### Based on https://github.com/GatsbyCentral/gatsby-source-eventbrite

### How to use
  + Copy files under this directory to your gatsby-project-directory/plugins/gatsby-source-eventbrite-multi-accounts/
  + Add the following to your gatsby-config.js file:
    {
      resolve: `gatsby-source-eventbrite-multi-accounts`,
      options: {
        organisations: [
          {
            organisationId: "...",
            accessToken: "..."
          },
          {
            organisationId: "...",
            accessToken: "..."
          },
          ...
        ],
        entities: ['events', 'venues']
      }
    },
