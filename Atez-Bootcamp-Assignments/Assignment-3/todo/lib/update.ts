const conf = new(require('conf'));
const chalk = require("chalk");
export function update(taskName, newTaskText) {
    const todoItems = conf.get('todo-items');
    const taskIndex = todoItems.findIndex((task) => task.text === taskName);
    if (taskIndex === -1) {
        console.error(chalk.red('Task not found'));
        return;
    }
    todoItems[taskIndex].text = newTaskText;
    conf.set('todo-items', todoItems);

    console.log(chalk.green('Task updated successfully'));
}
