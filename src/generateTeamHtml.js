function generate(arr) {
    return `<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=e, initial-scale=1.0">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.1/dist/css/bootstrap.min.css"
        integrity="sha384-zCbKRCUGaJDkqS1kPbPd7TveP5iyJE0EjAuZQTgFLD2ylzuqKfdKlfG/eSrtxUkn" crossorigin="anonymous">
    <link rel="stylesheet" href="./style.css">
    <title>My Team</title>
</head>

<body>
    <div class="jumbotron jumbotron-fluid"> <!-- Jumbotron -->
        <div class="container">
            <h1 class="display-4">My Team</h1>
        </div>
    </div>

    <div class="container"> <!-- Container -->
        <div class="row"> <!-- Row -->
    
    ${generateMgrs(arr)}
    ${generateEng(arr)}
    ${generateInt(arr)}
   
        </div> <!-- End row -->
    </div> <!-- End container -->
</body>
</html>`
}

function generateMgrs(arr) {
    let managerCardTemplate = ``
    for(i = 0; i < arr.length; i++) {
        if(arr[i].getRole() === "Manager"){
            managerCardTemplate += `
            <div class="card card-outer" style="width: 18rem;"> <!-- Card -->
                <div class="card-body card-top"> <!-- Card Top -->
                    <h3>${arr[i].name}</h3>
                    <h3>Manager</h3>
                </div>
                <div class="card-body card-bottom"> <!-- Card Bottom -->
                    <div class="card"> <!-- Card Items -->
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item">ID: ${arr[i].id}</li>
                            <li class="list-group-item">Email: <a href="mailto:${arr[i].email}">${arr[i].email}</a></li>
                                <li class="list-group-item">Office number: ${arr[i].officeNumber}</li>
                        </ul>
                    </div>
                </div>
            </div>
    `
        }
    }

    return managerCardTemplate;
}

function generateEng(arr) {
    let engineerCardTemplate = ``
    for (i = 0; i < arr.length; i++) {
        if (arr[i].getRole() === "Engineer") {
            engineerCardTemplate += `
            <div class="card card-outer" style="width: 18rem;"> <!-- Card -->
                <div class="card-body card-top"> <!-- Card Top -->
                    <h3>${arr[i].name}</h3>
                    <h3>Engineer</h3>
                </div>
                <div class="card-body card-bottom"> <!-- Card Bottom -->
                    <div class="card"> <!-- Card Items -->
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item">ID: ${arr[i].id}</li>
                            <li class="list-group-item">Email: <a href="mailto:${arr[i].email}">${arr[i].email}</a></li>
                            <li class="list-group-item">GitHub: <a href="https://github.com/${arr[i].github}" target="_blank">${arr[i].github}</a></li>
                        </ul>
                    </div>
                </div>
            </div>
    `
        }
    }

    return engineerCardTemplate;
}

function generateInt(arr) {
    let internCardTemplate = ``
    for (i = 0; i < arr.length; i++) {
        if (arr[i].getRole() === "Intern") {
            internCardTemplate += `
            <div class="card card-outer" style="width: 18rem;"> <!-- Card -->
                <div class="card-body card-top"> <!-- Card Top -->
                    <h3>${arr[i].name}</h3>
                    <h3>Intern</h3>
                </div>
                <div class="card-body card-bottom"> <!-- Card Bottom -->
                    <div class="card"> <!-- Card Items -->
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item">ID: ${arr[i].id}</li>
                            <li class="list-group-item">Email: <a href="mailto:${arr[i].email}">${arr[i].email}</a></li>
                                <li class="list-group-item">School: ${arr[i].school}</li>
                        </ul>
                    </div>
                </div>
            </div>
    `
        }
    }

    return internCardTemplate;
}

module.exports = generate;