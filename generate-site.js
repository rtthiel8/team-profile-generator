const fs = require('fs');

function siteGen(profile) {
    return `
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Employee</title>
</head>
<body>}
    ${profile}    
</body>
</html>
    `
}

module.exports = siteGen;

