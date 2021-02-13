const generateTeam = team => {


const generateManager = manager => {
    return
    <div class="card employee-card">
    <div class="card-header" style="width: 18rem;">
        <h5 class="card-title"> ${manager.getName()} </h5>
        <h6 class="card-subtitle mb-2 text-muted"> ${manager.getRole()} </h6>
    </div>

    <div class="card-body">
        <ul class="list-group list-group-flush">
          <li class="list-group-item"> ${manager.getId()} </li>
          <li class="list-group-item"> ${manager.getEmail()} </li>
          <li class="list-group-item"> ${manager.getOfficeNumber()} </li>
        </ul>
      </div>
    </div>
    ;
};
  
    const generateEngineer = engineer => {
        return
    <div class="card employee-card" style="width: 18rem;">
      <div class="card-header">
        <h5 class="card-title"> ${engineer.getName()} </h5>
        <h6 class="card-subtitle mb-2 text-muted"> ${engineer.getRole()} </h6>
      </div>

      <div class="card-body">
        <ul class="list-group list-group-flush">
          <li class="list-group-item"> ${engineer.getId()} </li>
          <li class="list-group-item"> ${engineer.getEmail()} </li>
          <li class="list-group-item"> ${engineer.getGithub()}: </li>
        </ul>
      </div>
    </div>
    ;
    };

    const generateIntern = intern => {
        return
    <div class="card employee-card" style="width: 18rem;">
      <div class="card-header">
        <h5 class="card-title"> ${intern.getName()} </h5>
        <h6 class="card-subtitle mb-2 text-muted"> ${intern.getRole()} </h6>
      </div>

      <div class="card-body">
        <ul class="list-group list-group-flush">
          <li class="list-group-item"> ${intern.getId()} </li>
          <li class="list-group-item"> ${intern.getEmail()} </li>
          <li class="list-group-item"> ${intern.getGithub()} </li>
        </ul>
      </div>
    </div>
    ;
    };

    const html = [];

    html.push(team
        .filter(employee => employee.getRole() === "Manager")
        .map(manager => generateManager(manager))
    );
    html.push(team
        .filter(employee => employee.getRole() === "Engineer")
        .map(engineer => generateEngineer(engineer))
        .join("")
    );
    html.push(team
        .filter(employee => employee.getRole() === "Intern")
        .map(intern => generateIntern(intern))
        .join("")
    );

    return html.join("");

}



    module.exports = team => {

    return

    <!DOCTYPE html>
    <html lang="en">
    
    <head>   
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js"></script>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-giJF6kkoqNQ00vy+HMDP7azOuL0xtbfIcaT9wjKHr8RbDVddVHyTfAAsrekwKmP1" crossorigin="anonymous">
    <link rel="stylesheet" href="style.css">
    </head>

    <body>
    <title> Team Profile Generator </title>

    <div class="jumbotron jumbotron-fluid" style="background-color: maroon;">
      <div class="p-5 text-center">
        <div class="container-fluid">
            <h1> The Team </h1>
        </div>
      </div>
    </div>

    <div class="container">
      <div class="row">
        <div class="team-cards col-12 d-flex justify-content-center">
            ${generateTeam(team)}
        </div>
      </div>
    </div>
 
  </body>
  </html>

  ;
  };