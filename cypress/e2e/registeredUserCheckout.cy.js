import obj from './pageObjects/registeredUserCheckout';

const credentials = require('../fixtures/credentials.json');

describe('Checkout as a registered user', () => {

  it('Complete purchase as a signed up user', () => {
    
    cy.get(obj.signUp).click();
    cy.url().should('contains', obj.loginURL);
    cy.get(obj.inputUsername).type('Sujit');
    cy.get(obj.inputEmail).type((Math.random()*200000)+credentials.uniqueEmail.email);
    cy.get(obj.signupButton).click();
    cy.url().should('contains', obj.signupURL);

    cy.get(obj.selectGender).click();
    cy.get(obj.inputPassword).type('1234567890');
    cy.get(obj.dateSelection_DOB).select('21');
    cy.get(obj.monthSelection_DOB).select('August');
    cy.get(obj.yearSelection_DOB).select('1988');
    cy.get(obj.inputFirstname).type('Sujit');
    cy.get(obj.inputLastname).type('Sarker');
    cy.get(obj.inputCompany).type('Kite Games Studio Ltd.');
    cy.get(obj.inputAddress).type('Dhaka');
    cy.get(obj.selectCountry).select('United States');
    cy.get(obj.inputState).type('New York');
    cy.get(obj.inputCity).type('Dhaka');
    cy.get(obj.inputZipcode).type('10013');
    cy.get(obj.inputMobileNumber).type('0123456789');
    cy.get(obj.createAccountButton).click();
    cy.url().should('contains', obj.accountCreatedURL);
    cy.get(obj.textCongratulations).should('contain', 'Congratulations! Your new account has been successfully created!');

    cy.get(obj.continueButton).click();
    cy.url().should('contains', obj.homepageURL);
    cy.get(obj.expandKidsCategory).click();
    cy.get(obj.expandDress).click();
    cy.url().should('contains', obj.kidsDrrssPageURL);
    cy.get(obj.viewProduct).click();
    cy.url().should('contains', obj.productDetailPageURL);
    cy.get(obj.addToCart).click();
    cy.get(obj.viewCart).click();
    cy.url().should('contains', obj.cartPageURL);
    cy.get(obj.proceedToCheckout).click();
    cy.url().should('contains', obj.checkoutPageURL);
    cy.get(obj.placeOrder).click();
    cy.url().should('contains', obj.paymentPageURL);
    cy.get(obj.inputNameOnCard).type('Sujit Sarker');
    cy.get(obj.inputCardNumber).type('1234567890');
    cy.get(obj.inputCVC).type('123');
    cy.get(obj.inputExpirationMonth).type('12');
    cy.get(obj.inputExpirationYear).type('2345');
    cy.get(obj.payAndConfirmOrder).click();
    cy.url().should('contains', obj.paymentDoneURL);
    cy.get(obj.texttCongrats).should('contain','Congratulations! Your order has been confirmed!');

    cy.window().document().then(function (doc) {
      doc.addEventListener('click', () => {
        
        setTimeout(function () { doc.location.reload() }, 3000)
      })
      cy.get(obj.downloadInovoice).click();
    })
    cy.readFile('cypress/downloads/invoice.txt').should('contains', 'Hi Sujit Sarker, Your total purchase amount is 1600. Thank you');

    cy.get(obj.deleteAccount).click();
    cy.get(obj.ContinueDeleteAccount).click();
    cy.url().should('contains', obj.homepageURL);

  })
})