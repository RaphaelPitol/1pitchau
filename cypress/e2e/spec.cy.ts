describe('template spec', () => {
  it('passes', () => {
    cy.visit('http://localhost:3000/contato')
    cy.get('.sc-beySPh > :nth-child(1)').type("Raphael Pitol")
    cy.get('.sc-beySPh > :nth-child(2)').type("raphael@email")
    cy.get('.sc-beySPh > :nth-child(3)').type("449888198370")
    cy.get('select').select("Umuarama")
    cy.get('.sc-beySPh > :nth-child(5)').type("Lembrando como usar o cypres")
    cy.get('.sc-gLLuof').click()

  })
})