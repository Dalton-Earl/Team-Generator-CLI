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
            name: "EmplyeeName",
            message: "Enter the employees Name"
        },
        {
            type: "input",
            name: "email",
            message: "Enter the employees Email"
        }

      ];
const internPromt = [
    {
        type: "input",
        name: "school",
        message: "Enter the school the Intern is attending"
    }
];
const EngineerPromt = [
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
function main(){
    inquirer.prompt(questions).then(answers => {
        let role = answers.role
        console.log (role)
    })
}
   
main();

