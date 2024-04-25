# 03 Exercise - Add Auth0 to your application

## Scenario

House Tricks have an online application where they can post properties for sale. Currently, anyone logged in to the House Tricks applications can create new properties, causing problems for the Real Estate agents as customers are creating fake listings.

The endpoint to create a property needs to be secured so only authorized users can create new properties.

Your Tech Lead has insisted you use [Auth0](https://auth0.com/) to implement authentication in your React application and Express server. The authorization [router-level middleware](https://expressjs.com/en/guide/using-middleware.html#middleware.router) for the Express server has been created but is not used yet (see `server/middleware/authorizationMiddleware.js`).

## Getting started

- In a new Terminal, type `docker-compose up` to start the application. This will start a React application, Express application and Postgres database.
- Look in the `docker-compose.yml` file to learn what ports the apps are running on.

## User Story

- **As a** real estate agent for House Tricks
- **I want** only authorized real estate agents adding new properties
- **So that** the integrity of our real estate listings are maintained

## Acceptance criteria

- GIVEN an authorized user is logged in, WHEN they complete the create property form, THEN a property is created
- GIVEN a non-authorized user is logged in, WHEN they complete the create property form, THEN a property is **not** created

## Technical requirements

- [Auth0](https://auth0.com/) is used for authentication and authorization.
