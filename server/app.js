require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const path = require("path");
const yaml = require("js-yaml");
const fs = require("fs");
const swaggerUi = require("swagger-ui-express");
const propertyRouter = require("./property/property.router");
const errorHandlerMiddleware = require("./middleware/errorHandlerMiddleware");

const swaggerDocument = yaml.load(
  fs.readFileSync(path.join(__dirname, "./apispec.yaml"), "utf8")
);

// middleware
app.use(cors());
app.use(express.json());
// server.js

const { auth } = require('express-oauth2-jwt-bearer');

// Authorization middleware. When used, the Access Token must
// exist and be verified against the Auth0 JSON Web Key Set.
const checkJwt = auth({
  audience: 'http://housetricks.com',
  issuerBaseURL: `https://dev-y0a2px1sm46ajwe2.us.auth0.com/`,
});

const { requiredScopes } = require('express-oauth2-jwt-bearer');

const checkScopes = requiredScopes('New Property Listing');

app.post('/api/private-scoped', checkJwt, checkScopes, function(req, res) {
  res.json({
    message: 'Hello from a private endpoint! You need to be authenticated and have a scope of New Property Listing to see this.'
  });
});
// routes
app.use("/api/properties", propertyRouter);
app.use("/", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// error handling middleware
app.use(errorHandlerMiddleware);

module.exports = app;
