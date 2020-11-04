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

    static signup() {
        // Verifies the Username input field
        cy.get('#signup-username-input').type('usernameTest');
        // Verifies user input inside the "Email" field
        cy.get('#signup-email-input').type('emailTest@emailTest.com');
        // Verifies user input inside the "Password" field
        cy.get('#signup-password-input').type('passwordTest');
        // Verifying user input inside the "LinkedIn" field
        cy.get('#signup-linkedin-input').type('https://www.linkedin.com/in/unavailable/');
        // Verifying user input inside the "Github" field
        cy.get('#signup-github-input').type('https://github.com/');
        // Verifying user input inside the "Twitter" field
        cy.get('#signup-twitter-input').type('https://twitter.com/?lang=en');
        // Clicks the signup button in the modal to make a user
        cy.get('#signupModalBtn').click();
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