// const generateManager = (employeeArr) => {
//   if (!employeeArr) {
//     return "";
//   }
//   return `
//   <div class="col">
//   <div class="card cyan darken-2">
//     <div class="card-content white-text">
//       <span class="card-title">${employeeArr.getName()}</span>
//       <span class="card-title">
//         <span class="material-icons">coffee</span>Manager</span
//       >
//     </div>
//     <div class="card-action white">
//       <p>ID: ${employeeArr.getId()}</p>

//       <p>Email: ${employeeArr.getEmail()}</p>

//       <p>Office number: ${employeeArr.officeNum}</p>
//     </div>
//   </div>
// </div>
// `
// }

const generateMarkdown = () => {
  // de-structure the page by section
  return `
    <!DOCTYPE html>
    <html lang="en">
        <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css"
        />
        <link
      href="https://fonts.googleapis.com/icon?family=Material+Icons"
      rel="stylesheet"
        />
        <title>My Team</title>
    </head>
    <body>
        <nav>
            <div class="nav-wrapper">
                <a href="#" class="brand-logo center">My Team</a>
            </div>
        </nav>
        <div class="container">
            <div class="row">
          
            </div>
        </div>
    </body>
    </html>
    `;
};

module.exports = generateMarkdown;