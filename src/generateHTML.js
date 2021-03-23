const header = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Team Tree</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-BmbxuPwQa2lc/FVzBcNJ7UAyJxM6wuqIj61tLrc4wSX0szH/Ev+nYRRuWlolflfl" crossorigin="anonymous">
</head>
<body>
    <div class ="container-fluid">`;

const footer = `</div>
</div>
</body>
</html>`

function generateManager(data) {
    return `<div class="row">
    <h1>Manager</h1>
    <h1>${data.name}</h1>
    <ul class="list-group list-group-flush">
        <li class="list-group-item">Id #: ${data.id}</li>
        <li class="list-group-item">Email: ${data.email}</li>
        <li class="list-group-item">Office Number: ${data.officeNumber}</li>
    </ul>
</div>`;
}

function generateEngineer(data){
    return `<div class="col">
    <h1>Engineer</h1>
    <h1>${data.name}</h1>
    <ul class="list-group list-group-flush">
        <li class="list-group-item">Id #: ${data.id}</li>
        <li class="list-group-item">Email: ${data.email}</li>
        <li class="list-group-item">Github Username: ${data.github}</li>
    </ul>
</div>`
}

function generateIntern(data){
    return `<div class="col">
    <h1>Intern</h1>
    <h1>${data.name}</h1>
    <ul class="list-group list-group-flush">
        <li class="list-group-item">Id #: ${data.id}</li>
        <li class="list-group-item">Email: ${data.email}</li>
        <li class="list-group-item">Attedning: ${data.school}</li>
    </ul>
</div>`
}

module.exports = {generateManager, generateEngineer, generateIntern, header, footer}