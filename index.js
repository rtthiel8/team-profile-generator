const fs = require('fs');
const path = require('path');
const { prompt } = require('inquirer');
const Choices = require('inquirer/lib/objects/choices');
const siteGen = require('./generate-site');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Employee = require('./lib/Employee');
//const { data } = require('console');
const positions = { Manager:[], Engineer:[], Intern:[] };

function init() {
    return prompt([
        {
            type: 'confirm',
            name: 'addEmployee',
            message: 'Would you like to add a team member?'
        }
    ]).then(({ addEmployee }) => {
        addEmployee ? fillPosition() :  writeToFile('./dist/index.html', siteGen(positions))
    })
};

fillPosition = ()=> {
    return prompt([
        {
            type: 'list',
            name: 'role',
            message: 'What is the team members role?',
            choices: ['Manager','Engineer','Intern', 'No more team members']
        }
    ]).then(({ role })=> {
        const questions = [];
        const items = ['name','id','email'];
        items.push(role=='Manager'?'officeNumber':role=='Engineer'?'github':'school');
        items.forEach(item => {
            questions.push({type:'input',name:item,message:`What is your ${item}?`});
        });
        items.push(role);
        prompt(questions).then(ans => {
            let employeeInfo = ans;
            role == 'Manager'   ? positions.Manager.push(new Manager(employeeInfo))
            :role == 'Engineer' ? positions.Engineer.push(new Engineer(employeeInfo))
            :role == 'Intern' ? positions.Intern.push(new Intern(employeeInfo))
            :role == 'No more team members' 
            //? writeToFile(employeeInfo)
           console.log(employeeInfo)
            return employeeInfo;
        }).then(positions => {
            console.log(positions);
            writeToFile('./dist/index.html', siteGen(positions));
        })
    })
};



function writeToFile(filename, data) {
    fs.writeFile(path.join(__dirname, filename), data, err => {
        if (err) {
            console.log(err);
        }
        init();
    });
};

init();


