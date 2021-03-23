const header = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Team Tree</title>
    <link rel="stylesheet" href="./css/styles.css">
    <link rel="preconnect" href="https://fonts.gstatic.com">
<link href="https://fonts.googleapis.com/css2?family=Roboto&display=swap" rel="stylesheet">
</head>
<body>
    <div class="container">
        <header>
            <h1>Team Tree</h1>
        </header>
        <div class="box-container">`;

const footer = `        </div>

</div>

</body>
</html>`

function generateManager(data) {
    return `
    <div class="box">
    <h1>Manager</h1>
    <h1>${data.name}</h1>
    <ul>
        <li>Id #: ${data.id}</li>
        <li>Email: ${data.email}</li>
        <li>Office Number: ${data.officeNumber}</li>
    </ul>
</div>
<div class="box-container">
`;
}

function generateEngineer(data){
    return `
    <div class="box">
    <h1>Engineer</h1>
    <h1>${data.name}</h1>
    <ul>
        <li>Id #: ${data.id}</li>
        <li>Email: ${data.email}</li>
        <li>Github Username: ${data.github}</li>
    </ul>
</div>
`
}

function generateIntern(data){
    return `
    <div class="box">
    <h1>Intern</h1>
    <h1>${data.name}</h1>
    <ul>
        <li>${data.id}</li>
        <li>Email: ${data.email}</li>
        <li>Attedning: ${data.school}</li>
    </ul>
</div>
`
}

module.exports = {generateManager, generateEngineer, generateIntern, header, footer}