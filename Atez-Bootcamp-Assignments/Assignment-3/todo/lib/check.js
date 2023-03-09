"use strict";
exports.__esModule = true;
exports.check = void 0;
var conf = new (require('conf'));
function check(text) {
    var todoItems = conf.get('todo-items');
    if (!todoItems) {
        console.log('No todo items found.');
        return;
    }
    var todoItem = todoItems.find(function (item) { return item.text === text; });
    if (!todoItem) {
        console.log("No todo item found with text \"".concat(text, "\"."));
        return;
    }
    todoItem.checked = true;
    conf.set('todo-items', todoItems);
    console.log("Todo item \"".concat(text, "\" checked off successfully."));
}
exports.check = check;
