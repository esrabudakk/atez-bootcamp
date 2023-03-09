#! usr/bin/env node


import { program } from 'commander';
import {add} from './lib/add';
import {list} from './lib/list';
import {del} from './lib/del';
import {check} from "./lib/check";
import {update} from "./lib/update";
import {search} from "./lib/search";


program.command('list').description('list all todo items').action(list);
program.command('add <todoItem>').description('Add new todo item').action((add))
program.command('del <text>').description('Delete todo item').action((del))
program.command('check <text>').description('Delete todo item').action((check))
program.command('update <taskName> <newTaskText>').description('Update todo item').action((update))
program.command('search <query>').description('Search for tasks').action(search);



program.parse();
