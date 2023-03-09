const conf = new(require('conf'));
export function add(todoItem) {
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
}
