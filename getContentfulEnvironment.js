const contentfulManagement = require("contentful-management");

const CONTENTFUL_ACCESS_TOKEN = process.env.CONTENTFUL_ACCESS_TOKEN;
const CONTENTFUL_SPACE_ID = process.env.CONTENTFUL_SPACE_ID;
const CONTENTFUL_ENVIRONMENT = process.env.CONTENTFUL_ENVIRONMENT;

module.exports = function () {
  const contentfulClient = contentfulManagement.createClient({
    accessToken: CONTENTFUL_ACCESS_TOKEN,
  });

  return contentfulClient
    .getSpace(CONTENTFUL_SPACE_ID)
    .then((space) => space.getEnvironment(CONTENTFUL_ENVIRONMENT));
};
