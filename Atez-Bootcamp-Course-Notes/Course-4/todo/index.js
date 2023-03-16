#! /usr/bin/env node

// add , task-check, update, list

const {program } = require('commander');
const list = require('./lib/list');
const add = require('./lib/add');
program.command('list').description('list all todo items').action(list);
program.command('add <todoItem>').description('Add new todo item').action((add))

program.parse();

