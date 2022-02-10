const fs = require('fs');
const path = require('path');
const { prompt } = require('inquirer');
const Choices = require('inquirer/lib/objects/choices');
const siteGen = require('./generate-site');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const positions = { Manager:[], Engineer:[], Intern:[] };

const init = () => {
    return prompt([
        {
            type: 'confirm',
            name: 'addEmployee',
            message: 'Would you like to add a team member?'
        }
    ]).then(({ addEmployee }) => {
        addEmployee ? fillPosition() :  writeToFile('generate-site', siteGen(positions))
    })
};

fillPosition = ()=> {
    return prompt([
        {
            type: 'list',
            name: 'role',
            message: 'What is the team members role?',
            choices: ['Manager','Engineer','Intern']
        }
    ]).then(({ role })=> {
        const questions = [];
        const items = ['name','id','email'];
        items.push(role=='Manager'?'officeNumber':role=='Engineer'?'github':'school');
        items.forEach(item => {
            questions.push({type:'input',name:item,message:`What is your ${item}?`});
        });

        prompt(questions).then(ans => {
            let employeeInfo = Object.values(ans);
            role == 'Manager'   ? positions.Manager.push(new Manager(...employeeInfo))
            :role == 'Engineer' ? positions.Engineer.push(new Engineer(...employeeInfo))
            : positions.Intern.push(new Intern(...employeeInfo));
            console.log(employeeInfo);
        }).then(employeeInfo => writeToFile('./dist/index.html', siteGen(employeeInfo)));

    })
};



function writeToFile(filename, data) {
    fs.writeFile(path.join(__dirname, filename), data, err => {
        if (err) {
            console.log(err);
        }
    });
};

init();


