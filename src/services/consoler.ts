import chalk from 'chalk';

import isObject from '@/tools/isObject';

type ConsolerPropType = {
  err?: any;
  message: any;
  type: 'log' | 'info' | 'error' | 'warn';
};

const Consoler = ({ err, message, type }: ConsolerPropType) => {
  const { error, info, log, warn } = console;
  const timeInfo = `${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()}`;
  const warning = chalk.hex('#FFA500');
  const labelStyle = (label: string, types?: 'log' | 'info' | 'error' | 'warn') => {
    if (types === 'info') {
      return chalk.yellow.bold.underline(label);
    }

    if (types === 'error') {
      return chalk.red.bold.underline(label);
    }

    if (types === 'warn') {
      return warning.bold.underline(label);
    }

    return chalk.green.bold.underline(label);
  };

  info(`|---- Start Log Time: ${chalk.green(timeInfo)} ----|`);

  if (type === 'log') {
    if (isObject(message)) {
      log('Logging: ', message);
    } else {
      log(`Logging: ${chalk.green(message)}`);
    }
  }

  if (type === 'info') {
    if (isObject(message)) {
      info(`${labelStyle('Information', 'info')}: `, message);
    } else {
      info(`${labelStyle('Information', 'info')}: ${chalk.yellow(message)}`);
    }
  }

  if (type === 'warn') {
    warn(`${labelStyle('Warning', 'warn')}: ${warning(message)}`);
  }

  if (type === 'error') {
    error(`
    ${labelStyle(message, 'error')}
    ${chalk.red(JSON.stringify(err, null, '\t'))}
    `);
  }

  info(`|---- End Log Time: ${chalk.green(timeInfo)} ----|`);
};

export default Consoler;
