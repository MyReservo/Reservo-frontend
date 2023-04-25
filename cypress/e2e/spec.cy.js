// describe('Rejestracja', () => {
//   it('Prawidłowa rejestracja klienta', () => {
//     cy.visit('https://rezervo.github.io/Reservo-frontend/')
//   })
// })

describe('Rejestracja', () => {
  it('Prawidłowa rejestracja klienta', () => {
    cy.visit('/')
    cy.get('#name').type("Name").should('have.value', 'Name')
    cy.get('#surname').type("surname").should('have.value', 'surname')
    cy.get('#phone').type('123456789').should('have.value', '123456789')
    cy.get('#email').type("test@wp.pl").should('have.value', 'test@wp.pl')
    cy.get('#password').type("12345678").should('have.value', '12345678')
    cy.get('#repeat').type("12345678").should('have.value', '12345678')
    cy.get('#terms').check().should('be.checked')
    cy.get('#register').click()
    .url().should('include', 'calendar.html')
    it('Selecting the time of the visit', () => {
      // cy.visit('calendar.html')
      cy.get('.user-name').should('contain', "Name")
      
  
    })
  })

  it("Nieprawidłowa rejestracja klienta", () => {
    cy.visit('/');
    cy.get('#register').click();
    cy.get('#name').should('have.class', 'red-input');
    cy.get('#surname').should('have.class', 'red-input');
    cy.get('#phone').should('have.class', 'red-input');
    cy.get('#email').should('have.class', 'red-input');
    cy.get('#password').should('have.class', 'red-input');
    cy.get('.register-terms').find('.terms-error').should('exist');

  })

  it("Prawidłowa rejestracja firmy", () => {
    cy.visit('/');
    cy.get('#company').check()
    cy.get('#name').type("Name").should('have.value', 'Name');
    cy.get('#surname').type("surname").should('have.value', 'surname');
    cy.get('#phone').type('123456789').should('have.value', '123456789');
    cy.get('#email').type("test@wp.pl").should('have.value', 'test@wp.pl');
    cy.get('#password').type("12345678").should('have.value', '12345678');
    cy.get('#repeat').type("12345678").should('have.value', '12345678');
    cy.get('#terms').check().should('be.checked');

    cy.get('#company-name').type("Company").should("have.value", "Company");
    cy.get('#street').type("Street").should("have.value", "Street");
    cy.get('#home').type("123").should("have.value", "123");
    cy.get('#city').type("City").should("have.value", "City");
    cy.get('#code').should('have.value.match', /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,3}))$/);


  })
})