"use strict";
exports.__esModule = true;
exports.add = void 0;
var conf = new (require('conf'));
function add(todoItem) {
    var todoItems = conf.get('todo-items');
    if (!todoItems) {
        todoItems = [];
    }
    todoItems.push({
        text: todoItem,
        checked: false,
        createdDate: Date.now()
    });
    conf.set('todo-items', todoItems);
}
exports.add = add;
