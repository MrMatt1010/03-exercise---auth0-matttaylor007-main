const { auth, requiredScopes } = require("express-oauth2-jwt-bearer");

const checkJwt = auth({
  audience: "http://housetricks.com",
  issuerBaseURL: "https://dev-y0a2px1sm46ajwe2.us.auth0.com/",
});

const checkScopes = requiredScopes("New Property Listing");

module.exports = {
  checkJwt,
  checkScopes,
};
