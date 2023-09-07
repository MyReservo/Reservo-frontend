
describe('Registration', () => {
  it('Correct customer registration', () => {
    cy.visit('/');
    cy.get('#name').type("Name").should('have.value', 'Name');
    cy.get('#surname').type("surname").should('have.value', 'surname');
    cy.get('#phone').type('123456789').should('have.value', '123456789');
    cy.get('#email').type("test@wp.pl").should('have.value', 'test@wp.pl');
    cy.get('#password').type("12345678").should('have.value', '12345678');
    cy.get('#repeat').type("12345678").should('have.value', '12345678');
    cy.get('#terms').check().should('be.checked');
    cy.get('#register').click();
    cy.url().should('include', 'customer-panel.html');
    it('Selecting the time of the visit', () => {
      // cy.visit('calendar.html')
      cy.get('.user-name').should('contain', "Name");
    })
  })

  it("Incorrect customer registration", () => {
    cy.visit('/');
    cy.get('#register').click();
    cy.get('#name').should('have.class', 'red-input');
    cy.get('#surname').should('have.class', 'red-input');
    cy.get('#phone').should('have.class', 'red-input');
    cy.get('#email').should('have.class', 'red-input');
    cy.get('#password').should('have.class', 'red-input');
    cy.get('.register-terms').find('.terms-error').should('exist');
  })

  it("Correct company registration", () => {
    cy.visit('/');
    cy.get('#company').check();
    cy.get('#provider-name').type("Name").should('have.value', 'Name');
    cy.get('#surname').type("surname").should('have.value', 'surname');
    cy.get('#phone').type('123456789').should('have.value', '123456789');
    cy.get('#email-company').type("test@wp.pl").should('have.value', 'test@wp.pl');
    
    cy.get('#company-name').type("Company").should("have.value", "Company");
    cy.get('#services').should('not.be.empty');

    cy.get('#street').type("Street").should("have.value", "Street");
    cy.get('#home').type("123").should("have.value", "123");
    cy.get('#citySelect').should('not.be.empty');
    cy.get('#code').type("12-345").should('have.value', "12-345");

    cy.get('#password').type("12345678").should('have.value', '12345678');
    cy.get('#repeat').type("12345678").should('have.value', '12345678');
    cy.get('#terms').check().should('be.checked');
  })

  it("Incorrect company registration", () => {
    cy.visit('/');
    cy.get('#company').check();
    cy.get('#register').click();

    cy.get('#provider-name').should('have.class', 'red-input');
    cy.get('#surname').should('have.class', 'red-input');
    cy.get('#phone').should('have.class', 'red-input');
    cy.get('#email-company').should('have.class', 'red-input');

    cy.get('#company-name').should("have.class", "red-input");
    cy.get('#street').should("have.class", "red-input");
    cy.get('#home').should("have.class", "red-input");
    cy.get('#citySelect').should('not.be.empty');
    cy.get('#services').should('not.be.empty');
    cy.get('#code').should('have.class', "red-input");
    cy.get('#password').should('have.class', 'red-input');
    cy.get('#terms').check().should('be.checked');
  })
})

describe("Login", () => {

  it("Correct login", () => {
    cy.visit('/');
    cy.get(".login__text--link").click();
    cy.get('#email-login').type("test@gmail.com").should("have.value", "test@gmail.com");
    cy.get('#password-login').type('12345678').should("have.value", "12345678");
  })
  it("Incorrect login", () => {
    cy.get('#login-btn').click();
    cy.get('#email-login').should("have.class", "red-input");
    cy.get('#password-login').should("have.class", "red-input" );
  })
})