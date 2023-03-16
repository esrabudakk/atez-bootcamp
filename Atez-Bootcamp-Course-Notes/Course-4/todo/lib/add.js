const conf = new (require('conf'));
const chalk = require("chalk");


function add(todoItem) {
    let todoItems = conf.get('todo-items');
    if(!todoItems){
        todoItems = [];
    }
    todoItems.push({
        text: todoItem,
        checked: false,
        createdDate: Date.now()
    })

    conf.set('todo-items', todoItems);
    console.log(chalk.green(`Todo item added successfully: ${todoItem}`))
}

module.exports = add;