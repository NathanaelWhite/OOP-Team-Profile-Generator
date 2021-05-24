const generateMarkdown = (data) => {

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
        <div class="container" style="display: flex">
            <div class="row">
                ${data.map(d => {
                return `                  
                  <div class="col s12 m6">
                  <div class="card cyan darken-2">
                    <div class="card-content white-text">
                      <span class="card-title">${d.name}</span>
                      <span class="card-title">
                        <span class="material-icons">
                        ${d.role === 'Manager' ? 'coffee' : d.role === 'Intern' ? 'child_friendly' : 'miscellaneous_services'}  
                        </span>${d.role}</span
                      >
                    </div>
                    <div class="card-content white">
                      <p>ID: ${d.id}</p>
                
                      <p>Email: <a href="mailto:${d.email}">${d.email}</a></p>
                
                      <p>${d.role === 'Manager' ? 'Office Number: '+ d.officeNum : d.role === 'Intern' ? 'School: '+ d.school : `GitHub: 
                      <a href="https://github.com/${d.github}" target="blank">` + d.github + '</a>'}
                      </p>
                    </div>
                  </div>
                </div>
                `;
                }).join("")}
                
            </div>
        </div>
    </body>
    </html>
    `;
};

module.exports = generateMarkdown;
