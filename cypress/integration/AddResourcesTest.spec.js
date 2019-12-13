/// <reference types="cypress"/>
/*jshint esversion: 6 */

import LandingPage from '../support/pages/HomePage.js';

describe('Add Resources Test', () => {

  beforeEach('Launch app', () => {
    cy.visit('http://localhost:4200/');
    cy.fixture('data.json').as('data');
    
  });
  const landingPage = new LandingPage();
  it.only('Add resources', function () {
    for (let json = 0; json < this.data.length; json++) {
      landingPage.resourceName.type(this.data[json].name);
      landingPage.role.type(this.data[json].role);
      landingPage.platform.type(this.data[json].platform);
      landingPage.salary.clear().type(this.data[json].salary);
      landingPage.rate.clear().type(this.data[json].rate);
      landingPage.travelCost.clear().type(this.data[json].travelCost);
      landingPage.offshore.click();
      landingPage.areasDropdown.click();
      landingPage.areas(this.data[json].areas);
      landingPage.rate.click();
      landingPage.addResourceButton.click();
      cy.get('div[id="rsc-' + json + '"] a[class="util-text-capitalize action"]').should('contain', this.data[json].name);
      cy.get('div[id="rsc-' + json + '"] div[class="col m2 s12"]').first().should('contain', landingPage.formatMoney(this.data[json].salary));
      cy.get('div[id="rsc-' + json + '"] div[class="col m1 s12"]').should('contain', landingPage.formatMoney(this.data[json].rate));
      cy.get('div[id="rsc-' + json + '"] div[class="col m2 s12 center-align"]').should('contain', landingPage.formatMoney(Math.round(((this.data[json].salary * 1.058) / 260))));
      let Cost = Math.round(((this.data[json].salary * 1.058) / 260)) + this.data[json].travelCost;
      cy.log(Cost);
      cy.get('div[id="rsc-' + json + '"] div[class="col m1 s12 currency-value gain"]').should('contain', landingPage.formatMoney(Math.round((this.data[json].rate - Cost))));
    }
  });
});
