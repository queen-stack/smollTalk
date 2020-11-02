describe('Cypress', () => {
    it('is working', () => {
        expect(true).to.equal(true);
    });
});

class landingLoginModal {
    // Verifying the pages loads when going to localhost
    static loadPage() {
        // This loads up the homepage of SmollTalk
        cy.visit("http://localhost:3001/") // loads up the url
    }
    static loginModalBtn() {
        // Verifies the "Login" modal button is clickable and opens the modal
        cy.get('#loginModalBtn').click();
    }

    // Verifying the Username text above the username input field
    static loginText() {
        // Checking the Username text
        cy.get('#usernameLabel').should('contain', 'Username');
        // Checking the Password text
        cy.get('#passwordLabel').should('contain', 'Password');
    }

    static loginFields() {
        // Verifies the Username input field
        cy.get('#login-username-input').should('be.visible');
        // Verifies user input inside the "Username" field
        cy.get('#login-username-input').type('usernameTest');
        // Verifies the Password input field
        cy.get('#login-password-input').should('be.visible');
        // Verifies user input inside the "Password" field
        cy.get('#login-password-input').type('passwordTest');
        // Verifies the close button on the top right
        cy.get('#loginCloseBtn').should('be.visible');
        // Verifying the visibility of the login button
        cy.get('#loginModalBtn').should('be.visible');
        // Verifying the "Login" text for the login button
        cy.get('#loginModalBtn').should('contain', 'Login');
        // -=- TODO -=- 
        // Need to check the login button functionality
        cy.get('#loginCloseBtn').click();
    }
}

describe('login and signup modals', () => {
    it('verifies functionality of the login and signup modals', () => {
        landingLoginModal.loadPage();
        landingLoginModal.loginModalBtn();
        landingLoginModal.loginText();
        landingLoginModal.loginFields();
    })
})