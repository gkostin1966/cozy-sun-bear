context('Cover', () => {
  beforeEach(() => {
    cy.visit('http://127.0.0.1:8080/cozy-sun-bear/examples/example.html?/epub3-local/moby-dick/#/6/2[cover]!/4/1:0')
  })

  // it('cy.window() - get the global window object', () => {
  //   cy.window().should('have.property', 'top')
  // })
  //
  // it('cy.document() - get the document object', () => {
  //   cy.document().should('have.property', 'charset').and('eq', 'UTF-8')
  // })
  //
  // it('cy.title() - get the title', () => {
  //   cy.title().should('include', 'Navigation Example')
  // })

  it( 'Cover Image', () => {
    cy.get('.epub-view')
      .find('>iframe')
      .should('have.id', 'greg')
      // .should('have.length', 1)
  })

})

