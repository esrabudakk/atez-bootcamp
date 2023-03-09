const conf = new (require('conf'));
const chalk = require("chalk");

export function list() {
    const todoList = conf.get('todo-items');
    if(todoList && todoList.length > 0 ){
        todoList.forEach((todo, index) => {
            console.log(todo.checked ? chalk.green(`${index + 1} : [✓] ${todo.text} ` ) : chalk.blue(`${index + 1} : [X] ${todo.text}`))
        })
    }
    else {
        console.log(chalk.red('You have no todo items'))
    }
}

