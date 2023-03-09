"use strict";
exports.__esModule = true;
exports.list = void 0;
var conf = new (require('conf'));
var chalk = require("chalk");
function list() {
    var todoList = conf.get('todo-items');
    if (todoList && todoList.length > 0) {
        todoList.forEach(function (todo, index) {
            console.log(todo.checked ? chalk.green("".concat(index + 1, " : [\u2713] ").concat(todo.text, " ")) : chalk.blue("".concat(index + 1, " : [X] ").concat(todo.text)));
        });
    }
    else {
        console.log(chalk.red('You have no todo items'));
    }
}
exports.list = list;
