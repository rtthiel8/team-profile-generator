const fs = require('fs');
//const Manager = require('./lib/Manager');

const siteGen = positions => {
    console.log('positions', positions)
    return `
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Employee</title>
</head>
<body>
    <div class="card">
        <div class="container">
            <h4><b></b></h4>
            <p>ID:</p>
            <p>Email:</p>
            <p>Office number: ${positions.role}</p>
        </div>
    </div>
</body>
</html>
    `
}

module.exports = siteGen;

