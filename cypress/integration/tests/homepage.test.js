import { cyan } from "color-name";

describe('Cypress', () => {
    it('is working', () => {
        expect(true).to.equal(true);
    });
});

class homepage {
    // Verifying the pages loads when going to localhost
    static loadPage() {
        // This loads up the homepage of SmollTalk
        cy.visit("http://localhost:3001/") // loads up the url
    }

    // Verifying the title on the landing page "SmollTalk"
    static verifyTitle() {
        // Verifies the "SmollTalk" title on the homepage
        cy.get('.hero-title-smoll').should('contain', 'SmollTalk');
    }

    // Verifying the modal buttons on the landing page
    static verifyModalBtn() {
        // Verifies the login button contains "login" text
        cy.get('#loginModalBtn').should('contain', 'Login');
        // Verifies the "Login" modal button is clickable and opens the modal
        cy.get('#loginModalBtn').click()
    }
}

describe('homepage content', () => {
    it('Tests the content on the homepage', () => {
        homepage.loadPage();
        homepage.verifyTitle();
        homepage.verifyModalBtn();
    })
})