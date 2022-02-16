const fs = require('fs');
//const Manager = require('./lib/Manager');

const siteGen = ({ Manager, Engineer, Inter }) => {

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
            console.log('Manager: ',Manager);
            Manager.forEach(mgr => {
                output += `
                        <div class="card">
                            <h4><b>${mgr.getName()}</b></h4>
                            <p>ID: ${mgr.getId()}</p>
                            <p>Email: ${mgr.getEmail()}</p>
                            <p>Office number: ${mgr.getOfficeNumber()}</p>
                        </div>
                    `
            });

            output += '<h1>Managers</h1><hr></div>'


            output += `</div></body></html>`
        }
        
        return output
    }
   

        
        // <div class="Engineers">
        //     <div class="card">
        //         <h4><b></b></h4>
        //         <p>ID:</p>
        //         <p>Email:</p>
        //         <p>Office number: undefined</p>
        //     </div>
        //     <h1>Engineers</h1>
        //     <hr>
        // </div>
        // <div class="Interns">
        //     <div class="card">
        //         <h4><b></b></h4>
        //         <p>ID:</p>
        //         <p>Email:</p>
        //         <p>Office number: undefined</p>
        //     </div>
        //     <h1>Interns</h1>
        //     <hr>
        // </div>
   
    

module.exports = siteGen;

