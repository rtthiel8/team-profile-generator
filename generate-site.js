const fs = require('fs');
//const Manager = require('./lib/Manager');

const siteGen = ({ Manager, Engineer, Intern }) => {

        let output = ` <!DOCTYPE html>
        <html lang="en">
        
        <head>
            <meta charset="UTF-8">
            <link rel="stylesheet" href="style.css">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Employee</title>
        </head>
        
        <body>
            <h1>Team Generator</h1>
            <hr>
            <div class="container">`

        if (Manager) {
            output += '<div class="Managers">'
            Manager.forEach(mgr => {
                output += `
                        <div class="card">
                            <h2><b>${mgr.getName()}</b></h2>
                            <h3><b>Manager</b></h3>
                            <p>ID: ${mgr.getId()}</p>
                            <p>Email: ${mgr.getEmail()}</p>
                            <p>Office number: ${mgr.getOfficeNumber()}</p>
                        </div>
                    `
                });

        if (Engineer) {
            output += '<div class="Engineers">'
            Engineer.forEach(engr => {
                output += `
                        <div class="card">
                            <h2><b>${engr.getName()}</b></h2>
                            <h3><b>Engineer</b></h3>
                            <p>ID: ${engr.getId()}</b></h4>
                            <p>Email: ${engr.getEmail()}</b></h4>
                            <p>GitHub: ${engr.getGitHub()}</b></h4>
                        </div>
                    `
                });

                if (Intern) {
                    output += '<div class="Interns">'
                    Intern.forEach(int => {
                        output += `
                                <div class="card">
                                    <h2><b>${int.getName()}</b></h2>
                                    <h3><b>Intern</b></h3>
                                    <p>ID: ${int.getId()}</b></h4>
                                    <p>Email: ${int.getEmail()}</b></h4>
                                    <p>School: ${int.getSchool()}</b></h4>
                                </div>
                        `
                    });

        }    

            output += `</div></body></html>`
        }
        
        return output
    }
};
   

module.exports = siteGen;

