describe('Cypress', () => {
    it('is working', () => {
        expect(true).to.equal(true);
    });
});

class landing {
    // Verifying the pages loads when going to localhost
    static loadPage() {
        // This loads up the homepage of SmollTalk
        cy.visit("http://localhost:3001/") // loads up the url
    }

    // Verifying the title on the landing page "SmollTalk"
    static verifyTitle() {
        // Verifies the title "SmollTalk" on the homepage
        cy.get('.hero-title-smoll').should('contain', 'SmollTalk');
    }

    // Verifying the modal buttons on the landing page
    static verifyLoginModalBtn() {
        // Verifies the login button contains "login" text
        cy.get('#loginModalBtn').should('contain', 'Login');
        // Verifies the "Login" modal button is clickable and opens the modal
        cy.get('#loginModalBtn').click();
        // Verifies the appearance of the "Login" modal
        cy.get('#loginModal').should('be.visible');
        // closes out the "Login" modal
        cy.get('#loginCloseBtn').click();
    }

    static verifySignupModalBtn() {
        // Verifies the "Signup" button contains the text "Signup"
        cy.get('#signupModalBtn').should('contain', 'Signup');
        // Verifies the "Signup" modal button is clickable and opens the modal
        cy.get('#signupModalBtn').click();
        // Verifies the appearance of the "Login" modal
        cy.get('#signUpModal').should('be.visible');
        // closes out the "Login" modal
        cy.get('#signupCloseBtn').click();
    }
}

describe('homepage content', () => {
    it('Tests the content on the homepage', () => {
        landing.loadPage();
        landing.verifyTitle();
        landing.verifyLoginModalBtn();
        landing.verifySignupModalBtn();

    })
})