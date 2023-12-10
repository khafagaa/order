import chalk from 'chalk';
// import clear from 'clear';
import figlet from 'figlet';
import inquirer from 'inquirer';
import {initCreation} from './new-branch.js';

// const {initCreation} = require('./new-branch');

// clear();

console.log(
  chalk.bold.bgBlack.yellow(
    figlet.textSync('Khafaga CLI!', {
      // font: 'ANSI Shadow',
      horizontalLayout: 'default',
      verticalLayout: 'default',
    }),
  ),
);

const whichCommand = () => {
  const questions = [
    {
      name: 'commandType',
      type: 'list',
      message: 'UGGHH!! You again! what do you want?',
      choices: ['New branch', 'Increment Version Code'],
    },
  ];
  return inquirer.prompt(questions);
};

whichCommand().then(async response => {
  if (response.commandType === 'New branch') {
    initCreation();
  }
});
