"use strict";
exports.__esModule = true;
exports.del = void 0;
var conf = new (require('conf'));
function del(text) {
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
    todoItems = todoItems.filter(function (item) { return item.text !== text; });
    conf.set('todo-items', todoItems);
    console.log("Todo item \"".concat(text, "\" deleted successfully."));
}
exports.del = del;
