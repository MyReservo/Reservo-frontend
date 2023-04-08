// describe('Rejestracja', () => {
//   it('Prawidłowa rejestracja klienta', () => {
//     cy.visit('https://rezervo.github.io/Reservo-frontend/')
//   })
// })

describe('Rejestracja', () => {
  it('Prawidłowa rejestracja klienta', () => {
    cy.visit('http://127.0.0.1:5173/Reservo-frontend/')
    cy.get('#name').type("Name").should('have.value', 'Name')
    cy.get('#surname').type("surname").should('have.value', 'surname')
    cy.get('#phone').type('123456789').should('have.value', '123456789')
    cy.get('#email').type("test@wp.pl").should('have.value', 'test@wp.pl')
    cy.get('#password').type("12345678").should('have.value', '12345678')
    cy.get('#repeat').type("12345678").should('have.value', '12345678')
    cy.get('#terms').check().should('be.checked')
    cy.get('#register').click()
    .url().should('include', 'calendar.html')
  })
})