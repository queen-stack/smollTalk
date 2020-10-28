# smollTalk
CMS-style chat site similar to a Wordpress site, where communities can post and comment on other friends’ posts

<h1 align="center">smollTalk</h1>
  
<p align="center">
    <img src="https://img.shields.io/badge/javascript-yellow" />
    <img src="https://img.shields.io/badge/express-orange" />
    <img src="https://img.shields.io/badge/sequelize-purple"  />
    <img src="https://img.shields.io/badge/handlebars-red"  />
    <img src="https://img.shields.io/badge/mySQL-blue"  />
    <img src="https://img.shields.io/badge/dotenv-green" />
    <img src="https://img.shields.io/badge/license-MIT-black.svg" />
</p>
   
## Description

🔍 A mysql database and CMS-style chat site community built using Model View Controller (MVC) paradigm. 
  <br>Built using MySQL2, Express, Sequelize, Handlebars and dotenv. <br>
   As communities scale, guarantee your users a place to belong by empowering them to start conversations that matter. <br>
   Build a group channel to collaborate. Then grow your community with quality interactions in every conversation at once.<br>
   Users who are logged in will be able to update and delete their existing posts through a dashboard UI.

**[Deployed Application](https://_)**
  
💻 Below are screenshots of the application:
  
![create sign up: smollTalk](./public/stylesheets/images/create_acct.png)
![login: smollTalk](./public/stylesheets/images/login.png)
![homepage: smollTalk](./public/stylesheets/images/homepage.png)


## Acceptance Criteria

```
GIVEN a CMS-style chat site
WHEN I visit the site for the first time
THEN I am presented with the homepage, which includes existing chat posts if any have been posted; navigation link for the homepage; with the option to log in
WHEN I click on the homepage option
THEN I am taken to the homepage
WHEN I click on any other links in the navigation
THEN I am prompted to either sign up or sign in
WHEN I choose to sign up 
THEN I am prompted to create a username and password
WHEN I click on the sign-up button
THEN my user credentials are saved and I am logged into the site
WHEN I am signed in as a new USER 
THEN I am prompted to create a profile
WHEN I revisit the site at a later time and choose to sign in
THEN I am prompted to enter my username and password
WHEN I am signed in to the site
THEN I am taken to the homepage and presented with existing chat posts that include the date created
WHEN I click on an existing chat post
THEN I am presented with the post , contents, post creator’s username, and date created for that post and have the option to leave a comment
WHEN I enter a comment and click on the submit button while signed in
THEN the comment is saved and the post is updated to display the comment, the comment creator’s username, and the date created
WHEN I click on the homepage option in the navigation
THEN I am taken to the homepage and presented with any chat posts I have already created and the option to add a new chat post
WHEN I click on the button to add a new chat post
THEN I am prompted to enter contents for my chat post for all to comment on within the community
WHEN I click on the button to create a new chat post
THEN the contents of my post are saved and I am taken back to an updated homepage with my new chat post
WHEN I click on one of my existing posts in the homepage
THEN I am able to delete or update my post and taken back to an updated homepage
WHEN I click on the logout option in the navigation
THEN I am signed out of the site, returned to the homepage with the login / sign-up option
```
   
## Table of Contents
- [Description](#description)
- [Acceptance Criteria](#acceptance-criteria)
- [Table of Contents](#table-of-contents)
- [Installation](#installation)
- [Usage](#usage)
- [Testing](#testing)
- [Contributing](#contributing)
- [Questions](#questions)

## Installation
💾   
  
`npm init`

`npm install`
  
## Backend Usage
💻   
  
Run the following command at the root of  project and answer the prompted questions:

`mysql -uroot -p`

Enter PW when promted

`source db/schema.sql`

`quit`

`npm start`

## Frontend Usage
💻 
`required login to create a chat post: username, password`

`Homepage displays all chats with comments count.  User can select to create a post, navigate to dashboard of all chats user has created.  User can Comment on other Users Chats. `

`Dashboard allows user to edit post, save edits made or delete post.`
`If a deletion is done from the blog - this is not able to be reversed! Community Chatters beware!`

## Testing
* see test file for TDD testing

## Contributing
:octocat: [Jenifer Queen](https://github.com/queen-stack)
[Jenifer Queen](https://github.com/queen-stack)
[Nathalie](https://github.com/natswatch)
[Michael Dreesen](https://github.com/mdreesen)

## Questions
✉️ Contact me with any questions: [email](mailto:jenf_queen@yahoo.com) , [GitHub](https://github.com/queen-stack)<br/>


