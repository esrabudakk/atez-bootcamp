"use strict";
exports.__esModule = true;
exports.update = void 0;
var conf = new (require('conf'));
var chalk = require("chalk");
function update(taskName, newTaskText) {
    var todoItems = conf.get('todo-items');
    var taskIndex = todoItems.findIndex(function (task) { return task.text === taskName; });
    if (taskIndex === -1) {
        console.error(chalk.red('Task not found'));
        return;
    }
    todoItems[taskIndex].text = newTaskText;
    conf.set('todo-items', todoItems);
    console.log(chalk.green('Task updated successfully'));
}
exports.update = update;
