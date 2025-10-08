# Friends Form Management

## Running this project

This project is set up with [Parcel Bundler](https://parceljs.org/), an npm package
that compiles our frontend assets and comes with an integrated development server.

The dev server runs on port `1234` by default, but will use another if `1234` is
being used by another application.

- Clone the repo.
- Navigate into the project folder.
- Run `npm i` to download the project's dependencies listed in the `package.json`.
- Run `npm start` to compile the React project and spin up the app on `http://localhost:1234`.

##  Spring Boot Backend Overview
This project uses Spring Boot to provide a RESTful API for managing Friends and Pets data. The backend is built with Java, Spring Boot, and Maven, and connects to an H2 in-memory database for development and testing.


Features
CRUD operations for Friends and Pets entities
Role-based authentication using Spring Security
CORS support for integration with frontend applications
H2 Console for easy database inspection


##  API Endpoints
/friends - Manage friends (GET, POST, etc.)
/pets - Manage pets (GET, POST, etc.)
Authentication endpoints for login and role validation
