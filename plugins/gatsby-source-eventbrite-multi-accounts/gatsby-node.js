const fetch = require('./fetch')
const processEntry = require('./processEntry')

exports.sourceNodes = async ({ actions, createNodeId }, options) => {
  
  const { createNode } = actions
  
  // Fetch parameters from gatsby-config.js
  const { organisations, entities = [] } = options

  // Entities(events etc...) to fetch data from 
  const defaultEntities = ['events', 'venues']
  const entitiesToFetch = [...new Set([...defaultEntities, ...entities])]

  const nodes = {}
  let processedEntries = [];

  
  organisations.map(org => {
    let currentOrgEntries = entitiesToFetch.map(entity => {
      
      // For each Organisation fetch data, returns an array (fetchResults) of arrays (events, venues, etc...)
      // Then for each array (entity) within fetchResults, process its content while perform mapping
      // Then populating the nodes array with processed entries
      return fetch({ organisationId: org.organisationId, accessToken: org.accessToken, entity })
        .then(entries => entries[entity].map(
          entry => processEntry(entry, entity, createNodeId))
        )
        .then(entries => {
          nodes[entity] = [...(nodes[entity] || []), ...entries]
        }
      );
    });
    processedEntries = [...processedEntries, ...currentOrgEntries];
  });

  
  /* Returns a single promise that fulfills when all of the above promises passed as an iterable have been fulfilled or when the iterable 
  contains no promises or when the iterable contains promises that have been fulfilled and non-promises that have been returned. */
  await Promise.all(processedEntries).then(() => {
    Object.keys(nodes).forEach(entity => {
      if (entity === 'events') {
        nodes[entity].forEach(() => {
          const joinVenueToEvent = (eventVenueId, nodes) => {
            return nodes.venues.filter(venue => venue.id === eventVenueId)[0]
          }
          
          // For each event node, add venue from venue node
          nodes[entity].forEach(node => {
            node['venue'] = joinVenueToEvent(node.venue_id, nodes)
          })
        })
      }
      nodes[entity].forEach(entry => createNode(entry))
    })
  })
}


