const conf = new(require('conf'));
const chalk = require("chalk");

export function check(text) {
    let todoItems = conf.get('todo-items');
    let todoItem = todoItems.find(item => item.text === text);
    if (!todoItem) {
        console.error(chalk.red(`No todo item found with text "${text}".`));
        return;
    }
    todoItem.checked = true;
    conf.set('todo-items', todoItems);
    console.log(chalk.green(`Todo item "${text}" checked off successfully.`));
}
