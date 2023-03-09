"use strict";
exports.__esModule = true;
exports.search = void 0;
var conf = new (require('conf'));
function search(query) {
    var todoItems = conf.get('todo-items');
    var match = todoItems.filter(function (task) {
        return task.text.toLowerCase().includes(query.toLowerCase());
    });
    if (match.length === 0) {
        console.log('No matching tasks found');
        return;
    }
    match.forEach(function (task) { return console.log("Match the task for search:- ".concat(task.text)); });
}
exports.search = search;
