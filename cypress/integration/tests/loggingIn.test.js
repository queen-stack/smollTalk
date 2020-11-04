describe('Cypress', () => {
    it('is working', () => {
        expect(true).to.equal(true);
    });
});

class loggingIn {
    static loadPage() {
        // This loads up the homepage of SmollTalk
        cy.visit("http://localhost:3001/") // loads up the url
    }

    static openModal() {
        // Verifies the "Login" modal button is clickable and opens the modal
        cy.get('#loginBtn').click();
    }

    static login() {
        // Verifies user input inside the "Username" field
        cy.get('#login-username-input').type('tea');
        // Verifies user input inside the "Password" field
        cy.get('#login-password-input').type('password');
        // Clicks on the login button in the modal
        cy.get('#loginModalBtn').click();
    }
}

describe('Tests the logging in functionality', () => {
    it('loggingIn.js', () => {
        loggingIn.loadPage();
        loggingIn.openModal();
        loggingIn.login();
    });
});