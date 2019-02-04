# What is Scene It? Project

Trivia game web application to test user knowledge. Second Project to demonstrate knowledge of technologies: React, Redux, Javascript, Restful APIs, JSON, HTML, CSS, Bootstrap, and Moqups.

Creators of the project: [Alejandro Ozai](https://github.com/FireLordOzai01) and Heather Capati.

## Framework 

The home page is the login screen with options to login or create a new account if user is not a member. Clicking on sign up will conditionally render a sign up form for new user to create an account. After creating a new account the user is able to login and out with their chosen email and password. 

On login user is directed to the Results Page where user can see current score and highest score. If you are a new user, you will have scores of '0' since you have never played a game. Top 10 High Scores are dynamically rendered. If you score high enough, you will be added to the Top 10 list. 

The instruction page explains the game to the user and how to play the game. 

The game page renders 16 cards as columns of 4. Each column a diiferent category and card difficulty increases by card value. 
As user plays they will earn or lose points based on card value. If a user's answer is incorrect the user will accrue negative points and vice versa. 

## Challenges 

1. Using redux to manage state of cards. 
2. Getting card to disable when clicked without affecting other cards. 
3. When logging in, pushing user data into results page using redux as well as updating new scores.

## Solution

1. Create individual states for all 16 cards. Used redux to keep track of each card. If a card is clicked then the card is disabled. 
2. Created a function to loop through each card and check if a card is clicked. If it is clicked, card's value would be set to false.
3. On login, grabbed email data from login form to search all users that match the email of the user loggin in. When found, copied user to current user in initial state which populates the score history on results page. 

## Collaboration 

Paired Programming - Login and SignUp Functionality. CSS styling using Bootstrap. Disabling card functionality.
Alejandro Ozai - Setting up Restful Apis for 'Marvel' and 'Scene It' categories. Created functionality for Results Page. 
Heather Capati - Set up Restful Api for 'General Knowledge' and 'Science & Nature' categories. Wired redux for card application, setting up game matrix functionality. Redirecting to game page, results page, login/logout page. 

## Success

Saved time by planning and organizing before implementing code. Created wireframes to help visualize how the application will function. 

![alt text](/src/wireframe/siteTree.png)

## What would we do differently 

Not underestimate how long certain features would be implemented. 

### Demo

![](/screenshots/demo.gif)

### Login Page

![alt text](/screenshots/loginScreen.png)

### Sign up Page

![alt text](/screenshots/signUpPage.png)

### Who Dat trivia

![alt text](/screenshots/whoDatPage.png)

### Movie trivia

![alt text](/screenshots/movieQuestionPage.png)
