/// <reference types="cypress"/>
/*jshint esversion: 6 */

import LandingPage from '../support/pages/HomePage.js';
describe('Mandatory Fields Validation Test', () => {
  beforeEach('Launch app', () => {
    cy.visit('http://localhost:4200/');
  });
  const landingPage = new LandingPage();

  it('verify validation messages for mandatory fields', () => {
    landingPage.resourceName.type('randomestring');
    landingPage.resourceName.clear();
    landingPage.validationMessage('Resource name is required.');
    landingPage.addResourceButton.should('not.be.visible');
    landingPage.role.type('randomestring');
    landingPage.role.clear();
    landingPage.validationMessage('Role is required.');
    landingPage.addResourceButton.should('not.be.visible');
    landingPage.platform.type('randomestring');
    landingPage.platform.clear();
    landingPage.validationMessage('Platform is required.');
    landingPage.addResourceButton.should('not.be.visible');
    landingPage.salary.clear();
    landingPage.validationMessage('Salary is required.');
    landingPage.addResourceButton.should('not.be.visible');
    landingPage.rate.clear();
    landingPage.validationMessage('Rate is required.');
    landingPage.addResourceButton.should('not.be.visible');
    landingPage.travelCost.clear();
    landingPage.validationMessage('Travel cost per day is required.');
    landingPage.addResourceButton.should('not.be.visible');
  });
});
