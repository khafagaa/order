import {simpleGit} from 'simple-git';
import chalk from 'chalk';
import figlet from 'figlet';
import inquirer from 'inquirer';
const git = simpleGit();

const askBranchType = () => {
  const questions = [
    {
      name: 'branchType',
      type: 'list',
      message: 'Select type of branch you want to create?',
      choices: ['feature', 'integration', 'release', 'hotfix', 'bugfix'],
    },
  ];

  return inquirer.prompt(questions);
};

const askJiraTicket = () => {
  const questions = [
    {
      name: 'ticketId',
      type: 'input',
      message: 'Enter Jira ticket: e.g. ASA-1234',
      validate: value => {
        if (value.match(/^ASA\-[1-9]{4,4}$/)) {
          return true;
        } else {
          return 'Enter a valid ticket id';
        }
      },
    },
  ];
  return inquirer.prompt(questions);
};

const askBranchDescription = () => {
  const questions = [
    {
      name: 'branchDescription',
      type: 'input',
      message: 'Enter 2-4 words description: e.g. discounted-coupons',
      validate: value => {
        if (value.match(/^[a-zA-Z0-9_]+$/)) return true;
        return 'Enter a valid description';
      },
    },
  ];

  return inquirer.prompt(questions);
};

export const initCreation = () => {
  let branchFullName = '';
  askBranchType().then(async response => {
    console.log(`wht is res ${JSON.stringify(response)}`);
    const branchPrefix = (branchFullName = response.branchType);
    if (
      branchPrefix === 'bugfix' ||
      branchPrefix === 'hotfix' ||
      branchPrefix === 'feature'
    ) {
      askJiraTicket().then(response => {
        branchFullName += `/${response.ticketId}`;
        askBranchDescription().then(async response => {
          branchFullName += `_${response.branchDescription}`;
          try {
            if (branchPrefix === 'hotfix') {
              await git.pull('origin', 'master');
              await git.checkoutBranch(branchFullName, 'master');
            } else {
              await git.pull('origin', 'main');
              // await git.checkoutBranch(branchFullName, 'main');
            }
            console.log(
              chalk.bold.green.bgBlack(
                'You Rock! Your branch has been created successfully!',
              ),
            );
          } catch (e) {
            console.log(
              chalk.bold.red.bgBlack(
                `unfortunitly can not complete the err ${e}`,
              ),
            );
          }
        });
      });
    }
  });
};

// module.exports = {
//   initCreation,
// };
