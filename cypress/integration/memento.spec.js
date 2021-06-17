describe('Memento header', () => {
    beforeEach(() => {
      cy.visit('http://localhost:3000')
    })

    it('Should display the memento logo and title', () => {
        cy
            .get('.logo-container').should('be.visible')
            .get('h1').contains('Memento')
    })

    it('Should display a navigation control with two buttons', () => {
        cy
            .get('[data-cy=nav]')
            .should(($button) => {
                expect($button).to.have.length(2)
            })
    })
})

describe('Memento collections', () => {
    beforeEach(() => {
      cy.visit('http://localhost:3000')
    })

    it('Should display a title for the collections list', () => {
        cy.get('h2').contains('My Collections')
    })

    it('Should display with three collections by default', () => {
        cy
            .get('.collection')
            .should(($collection) => {
                expect($collection).to.have.length(3)
            })
    })

    it('Should add new collections in create mode', () => {
        cy.get('[data-cy=addNew]').click()
        cy.get('[data-cy=inputForm]').should('be.visible')
    })

    it('Should prevent blank collections from being added', () => {
        cy.get('[data-cy=addNew]').click()
        cy.get('[data-cy=complete]').click({ 
                multiple: true,
                force: true
            })
        cy.on('window:alert', (str) => {
                expect(str).to.equal('Please enter a name for your collection.')
            })
    })

    it('Should allow users to delete collections and add collections', () => {
        cy.get('[data-cy=delete]').click({ multiple:true })
        cy.get('[data-cy=addNew]').click()
        cy.get('[data-cy=inputForm]').type('My precious')
        cy.get('[data-cy=complete]').click()
        cy.get('.collection').contains('My precious')
    })
})