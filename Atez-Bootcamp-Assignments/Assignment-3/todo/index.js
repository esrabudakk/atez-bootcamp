#! usr/bin/env node
"use strict";
exports.__esModule = true;
var commander_1 = require("commander");
var add_1 = require("./lib/add");
var list_1 = require("./lib/list");
var del_1 = require("./lib/del");
var check_1 = require("./lib/check");
var update_1 = require("./lib/update");
var search_1 = require("./lib/search");
commander_1.program.command('list').description('list all todo items').action(list_1.list);
commander_1.program.command('add <todoItem>').description('Add new todo item').action((add_1.add));
commander_1.program.command('del <text>').description('Delete todo item').action((del_1.del));
commander_1.program.command('check <text>').description('Delete todo item').action((check_1.check));
commander_1.program.command('update <taskName> <newTaskText>').description('Update todo item').action((update_1.update));
commander_1.program.command('search <query>').description('Search for tasks').action(search_1.search);
commander_1.program.parse();
