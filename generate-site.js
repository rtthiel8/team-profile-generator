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
            <header>
                <h1>My Team</h1>
            </header>
            <hr>
            <div class="flex-container">`

        if (Manager) {
            output += '<div>'
            Manager.forEach(mgr => {
                output += `
                        <div class="card">
                            <h2><b>${mgr.getName()}</b></h2>
                            <h3><b>Manager</b></h3>
                            <p>ID: ${mgr.getId()}</p>
                            <a href = "mailto: ${mgr.getEmail()}">Send Email</a>
                            <p>Office number: ${mgr.getOfficeNumber()}</p>
                        </div>
                    </div>
                    `
                });

        if (Engineer) {
            output += '<div>'
            Engineer.forEach(engr => {
                output += `
                        <div class="card">
                            <h2><b>${engr.getName()}</b></h2>
                            <h3><b>Engineer</b></h3>
                            <p>ID: ${engr.getId()}</b></h4>
                            <a href = "mailto: ${engr.getEmail()}">Send Email</a><br>
                            <a href= "https://github.com/${engr.getGitHub()}">GitHub</a>
                        </div>
                    </div>
                    `
                });

        if (Intern) {
            output += '<div>'
            Intern.forEach(int => {
                output += `
                        <div class="card">
                            <h2><b>${int.getName()}</b></h2>
                            <h3><b>Intern</b></h3>
                            <p>ID: ${int.getId()}</b></h4>
                            <a href = "mailto: ${int.getEmail()}">Send Email</a>
                            <p>School: ${int.getSchool()}</b></h4>
                        </div>
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

