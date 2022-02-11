const fs = require('fs');

function siteGen(data) {
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
            <h4><b>${data[0]}</b></h4>
            <p>ID: ${data[1]}</p>
            <p>Email: ${data[2]}</p>
            <p>Office number: ${data[3]}</p>
        </div>
    </div>
</body>
</html>
    `
}

module.exports = siteGen;

