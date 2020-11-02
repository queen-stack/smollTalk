describe('Cypress', () => {
    it('is working', () => {
        expect(true).to.equal(true);
    });
});

class landingSignupModal {
    // Verifying the pages loads when going to localhost
    static loadPage() {
        // This loads up the homepage of SmollTalk
        cy.visit("http://localhost:3001/") // loads up the url
    }
    static signupModalBtn() {
        // Verifies the "signup" modal button is clickable and opens the modal
        cy.get('#signupModalBtn').click();
    }

    // Verifying the Username text above the username input field
    static signupText() {
        // Checking the Username text
        cy.get('#signupUsernameLabel').should('contain', 'Username');
        // Checking the Email text
        cy.get('#signupEmailLabel').should('contain', 'Email');
        // Checking the Password text
        cy.get('#signupPasswordLabel').should('contain', 'Password (minimum of 4 characters)');
        // Checking the LikedIn text
        cy.get('#signupLinkedinLabel').should('contain', 'linkedIn');
        // Checking the Github text
        cy.get('#signupGithubLabel').should('contain', 'Github');
        // Checking the Twitter text
        cy.get('#signupTwitterLabel').should('contain', 'Twitter');
    }

    static signUpFields() {
        // Verifies the Username input field
        cy.get('#signup-username-input').should('be.visible');
        // Verifies user input inside the "Username" field
        cy.get('#signup-username-input').type('usernameTest');
        // Verifies the Email input field
        cy.get('#signup-email-input').should('be.visible');
        // Verifies user input inside the "Email" field
        cy.get('#signup-email-input').type('emailTest@emailTest.com');
        // Verifies the Password input field
        cy.get('#signup-password-input').should('be.visible');
        // Verifies user input inside the "Password" field
        cy.get('#signup-password-input').type('passwordTest');
        // Verifying the LinkedIn field
        cy.get('#signup-linkedin-field').should('be.visible');
        // Verifying user input inside the "LinkedIn" field
        cy.get('#signup-linkedin-field').type('https://www.linkedin.com/in/unavailable/');
        // Verifying the Github field
        cy.get('#signup-github-input').should('be.visible');
        // Verifying user input inside the "Github" field
        cy.get('#signup-github-input').type('https://github.com/');
        // Verifying the Twitter field
        cy.get('#signup-twitter-input').should('be.visible');
        // Verifying user input inside the "Twitter" field
        cy.get('#signup-twitter-input').type('https://twitter.com/?lang=en');

        // Verifies the close button on the top right
        cy.get('#signupCloseBtn').should('be.visible');
        // Verifying the visibility of the login button
        cy.get('#signupModalBtn').should('be.visible');
        // Verifying the "Login" text for the login button
        cy.get('#signupModalBtn').should('contain', 'Signup');
        // -=- TODO -=- 
        // Need to check the Signup button functionality
        cy.get('#signupCloseBtn').click();
    }
}

describe('login and signup modals', () => {
    it('verifies functionality of the login and signup modals', () => {
        landingSignupModal.loadPage();
        landingSignupModal.signupModalBtn();
        landingSignupModal.signupText();
        landingSignupModal.signUpFields();
    })
})