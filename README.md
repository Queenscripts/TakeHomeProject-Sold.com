# Queen Entry | Sold.com Take Home Project

This project includes several common tools and frameworks for developing a modern-day full-stack node/react web application.

This project entry assesses my fullstack capabilities and knowledge in the following areas:

- React
- Typescript
- Coding Patterns / Component Organization
- Existing NextJS knowledge, if any, or ability to learn it quickly
- Existing NestJS knowledge, if any, or ability to learn it quickly
- Existing Cypress knowledge, if any, or ability to learn it quickly

## Summary

Utilizing frameworks that utilize the best practices for modern-day SPA (Single Page Applications) enforcing techniques such as _**code splitting, SSR (server-side rendering), material design, modular styles, state management, typing with typescript, prettier linting, unit testing, and more**_.

As a React developer, you should be able to dive in and start writing components!
_(don't worry about setting up config =])_

**Happy Coding!!!**

## Frameworks Included

### Major Dependencies worth mentioning

- [React (v16)](https://reactjs.org/)
- [Next.js](https://nextjs.org/docs/)
- [NestJS](https://nestjs.com/)
- [Cypress.io](https://www.cypress.io/)
- [Material UI](https://material-ui.com/)
- [React Testing Library + Jest](https://github.com/testing-library/react-testing-library)
- [Redux](https://www.valentinog.com/blog/redux/)
- [Sass / SCSS (for styling)](https://sass-lang.com/)
- [Typescript](https://medium.com/@wittydeveloper/typescript-learn-the-basics-2f56eb9b02eb)

### Dev Dependencies worth mentioning

- [Webpack Bundle Analyzer](https://github.com/webpack-contrib/webpack-bundle-analyzer)
- [Prettier Linter](https://prettier.io/)
- [Redux Dev Tools Extension](https://github.com/reduxjs/redux-devtools)
- [Zsh + Powerlevel10k theme (docker container)](https://github.com/romkatv/powerlevel10k)

## Installation

To get started, you will need to first install the following:

- [Docker](https://docs.docker.com/get-docker/)
- [Docker-Compose](https://docs.docker.com/compose/)
- [NodeJS](https://nodejs.org/en/)

_Docker will let us run things in an isolated container environment._

Next you'll want to clone this repository. (Make sure you push updates to a personal github account, and make your commits there).

```bash
git clone -o sold.com https://github.com/brothatru/fullstackjs-interview.git
```

Install all npm dependencies locally

```bash
cd fullstackjs-interview
npm install && cd backend && npm install && cd ..
```

Build docker containers and start local servers

```bash
npm start
```

This command will start up docker containers for the following services (may take a few minutes):

- NextJS node application to serve our front-end react components
- NestJS node application to serve as our back-end api docs and endpoints
- MongoDB database with a users collection

Once the services are ready, you will be able to access them locally:

Our NextJS application will be running on [http://localhost:4000](http://localhost:4000)

Our NestJS application will be running at [http://localhost:9001/api/users/](http://localhost:9001/api/users/)

Our MongoDB can be accessed at localhost:27018

#### What I Have Changed

##### Backend

A major milestone in working concurrently with the API and the front-end was in navigating around CORS blocking issues. This led me to add to the ./backend/src/main.ts file:

```ts
app.enableCors();
```

##### Backend

Utilized regex to perform a more dynamic search query on the MongoDB database, using Mongoose as the ODM at ./backend/src/models/users/users.service.ts

##### Frontend

I've added a form that performs a fetch request using the POST method to the http://localhost:9001/users API route:

- Visit [http://localhost:4000/sign-up](http://localhost:4000/sign-up) to view
- Requests user's first name, last name, email, password and phone number.

##### Automation Testing

Using [Cypress](https://www.cypress.io/).

The signup spec that contains 5 tests:

- Checks that invalid email will render error that user must submit correct email format
- Checks that invalid phone number format will render error that user must submit correct phone format
- Checks that empty last name field will render error that user must include a last name
- Checks that empty first name field will render error that user must include a first name
- Checks that empty password field will render error that user must include a password

#### Note\*

### Thank you for this opportunity!

#### I enjoyed approaching solving the problems in this project. I look forward to connecting, and you can find me at [Queenscript Twitter](http://twitter.com/_queenscript)

Installation Notes:

```bash
npm install
```

To run the automation tests

```bash
npm run cy
```

This will open up a cypress window and run the tests in an actual browser.
