// ***********************************************************
// This example support/index.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
/*jshint esversion: 6 */
import './commands';

//screenshots configuration
Cypress.Screenshot.defaults({
  trashAssetsBeforeRuns: true,
  disableTimersAndAnimations: false,
  scale: true,
  dimensions: {
    width: 1024,
    height: 660,
  },
  capture: 'runner',
});

//To turn off all uncaught exception handling
Cypress.on('uncaught:exception', (err, runnable) => {
  debugger;
  return false;
});

Cypress.on('fail', (error, runnable) => {
  debugger;
  throw error; // throw error to have test still fail
});

//adding screenshots to the report
const addContext = require('mochawesome/addContext');
Cypress.on('test:after:run', (test, runnable) => {
  if (test.state === 'failed') {
    const screenshotFileName = `${runnable.parent.title} -- ${test.title} (failed).png`;
    addContext(
      {
        test,
      },
      `assets/${Cypress.spec.name}/${screenshotFileName}`,
    );
  }
});
