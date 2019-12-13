/*jshint esversion: 6 */

class LandingPage {

  //Locators
  get resourceName() {
    return cy.get('input[id="name"]');
  }
  get role() {
    return cy.get('input[id="role"]');
  }
  get platform() {
    return cy.get('input[id="platform"]');
  }
  get salary() {
    return cy.get('input[id="salary"]');
  }
  get rate() {
    return cy.get('input[id="rate"]');
  }
  get travelCost() {
    return cy.get('input[id="travelCost"]');
  }
  get offshore() {
    return cy.get('label[for="offshore"]');
  }
  get onshore() {
    return cy.get('label[for="onshore"]');
  }
  get areasDropdown() {
    return cy.get('div[class="input-field col m6 s12"] input[class="select-dropdown dropdown-trigger"]');
  }
  areas(val) {
    cy.contains(val).click({
      force: true
    });
  }
  get addResourceButton() {
    return cy.get('div[class="col m6 s12 right-align"] button[role="button"]');
  }

  //Common methods

  validationMessage(message) {
    cy.contains(message).should('be.visible');
  }

  formatMoney(amount, decimalCount = 2, decimal = ".", thousands = ",") {
    try {
      decimalCount = Math.abs(decimalCount);
      decimalCount = isNaN(decimalCount) ? 2 : decimalCount;

      const negativeSign = amount < 0 ? "-" : "";

      let i = parseInt(amount = Math.abs(Number(amount) || 0).toFixed(decimalCount)).toString();
      let j = (i.length > 3) ? i.length % 3 : 0;

      return negativeSign + (j ? i.substr(0, j) + thousands : '') + i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + thousands) + (decimalCount ? decimal + Math.abs(amount - i).toFixed(decimalCount).slice(2) : "");
    } catch (e) {
      console.log(e);
    }
  }
}
export default LandingPage;
