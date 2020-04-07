const axios = require(`axios`)

/**
 * High-level function to coordinate fetching data from eventbrite.com
 * @param {string} organisationId - The organizationId of the eventbrite account
 * @param {string} accessToken - The access token for eventbrite.com
 * @param {string} entity - The endpoint to fetch
 */
async function fetch({ organisationId, accessToken, entity }) {
  console.log(`Fetch Eventbrite data for '${entity}' entity for the organisation '${organisationId.substring(0,5).concat("......")}'  `)

  // For each entity, create an array
  const fetchResults = {
    [entity]: [],
  };

  let continueFetching = true;
  let page = 1;
  
  // Eventbrite only returns 50 items per page
  while (continueFetching) {
    try{
      const result = await axios({
        method: `GET`,
        url: `https://www.eventbriteapi.com/v3/organizations/${organisationId}/${entity}?${ `${entity}` == "events" ? "time_filter=current_future&" : "" }token=${accessToken}&page=${page}`,
      });
      // Load current page items into arrays
      fetchResults[entity] = fetchResults[entity].concat(result.data[entity]);
  
      page += 1;
      continueFetching = result.data.pagination.has_more_items;

    } catch(e) {
      const { status, statusText, data: { message } } = e.response;
      console.log(`The server response was [${status} ${statusText}]`)
      if (message) {
        console.log(`Inner exception message : [${message}]`)
      }
    }
  }

  return fetchResults;
}
module.exports = fetch