const inquirer = require("inquirer");
const questions = [
        {
            type: "list",
            name: "role",
            message:"What is the role for the new employee?",
            choices: [
                'Manager',
                'Intern',
                'Engineer',
                'Employee'
            ]
        },
        {
            type: "input",
            name: "EmployeeName",
            message: "Enter the employees Name"
        },
        {
            type: "input",
            name: "email",
            message: "Enter the employees Email"
        },
          {  type: "input",
             name: "id",
             message: "Enter a unique ID for the employee"

        }
      ];
const internPromt = [
    {
        type: "input",
        name: "school",
        message: "Enter the school the Intern is attending"
    }
];
const engineerPromt = [
    {
        type: "input",
        name: "githubUsername",
        message: "Enter the Engineers github username"
    }
];
const managerPromt = [
    {
        type: "input",
        name: "officenumber",
        message: "Enter the managers office number"
    }
];
const endCase = [
    {
        type: "list",
        name: "Continue",
        message: "Do you want to add another Employee or Generate The page?",
        choices:[
            'Add another Employee',
            'Generate HTML Document',
            'exit'
        ]
    }
]
function main(){
    inquirer.prompt(questions).then(answers => {
        let role = answers.role
        switch(role){
            case role = "Manager":
                // console.log(answers)
            addManager(answers);
            break;
            case role = "Intern":
            addIntern(answers);
            break;
            case role = "Engineer":
            addEngineer(answers);
            break;
            default:
            addEmployee(answers);

        }
        
    })
}
function addManager(answers){
    let name = answers.EmployeeName
    let id = answers.id
    let email = answers.email

    inquirer.prompt(managerPromt).then(answers =>{
         
        let officeNumber = answers.officenumber
        console.log (officeNumber)
        return officeNumber
        
    })
    console.log(answers);
}
function addIntern(){
    inquirer.prompt(internPromt).then(answers =>{

        console.log("You added a new Intern")
    })
}
function addEngineer(){
    inquirer.prompt(engineerPromt).then(answers =>{

        console.log("You added a new Engineer")
    })
}
function addEmployee(){
    console.log("added a new employee")
}
   
main();

