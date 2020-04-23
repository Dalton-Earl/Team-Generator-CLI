const inquirer = require("inquirer");

function promtUser(){
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
    return inquirer.prompt(questions);

}
promtUser();