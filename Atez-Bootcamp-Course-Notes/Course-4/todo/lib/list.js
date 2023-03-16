const conf = new (require('conf'));
const chalk = require("chalk");



function    list() {
    const todoList = conf.get('todo-items');
    if(todoList && todoList.length > 0 ){
        todoList.forEach((todo, index) => {
            if(todo.checked){
                console.log(chalk.green(`${index + 1} : ${todo.text}`));
            }
            else {
                console.log(chalk.yellow(`${index + 1} : ${todo.text}`));
            }
        })
    }
    else {
        console.log(chalk.red('You have no todo items'))
    }
}

module.exports = list;