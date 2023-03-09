const conf = new(require('conf'));
const chalk = require("chalk");

export function search(query: string){
    const todoItems = conf.get('todo-items');
    const match = todoItems.filter((task) =>
        task.text.toLowerCase().includes(query.toLowerCase())
    );

    if(match.length === 0) {
        console.error(chalk.red('No matching tasks found'));
        return;
    }
 match.forEach((task) => console.log(chalk.green(`Found the task about search: - ${task.text}`)));
}
