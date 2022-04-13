/* eslint-disable */
import { graphql } from "gatsby";

/**
 * fragment FragmentName on TypeName {
    field1
    field2
  }
 */

export const fragmentQueries = graphql`
  fragment EventbriteEventsEdge on EventbriteEventsConnection {
    edges {
      node {
        id
        url
        name {
          text
        }
        logo {
          original {
            url
          }
        }
        venue {
          name
          address {
            address_1
            city
            postal_code
          }
        }
        online_event
        summary
        start {
          local(formatString: "ddd DD MMMM YYYY, hh:mm A", locale: "en-GB")
        }
      }
    }
  }

  fragment MdxFrontmatter on Frontmatter {
    type
    title
    date(formatString: "DD MMMM YYYY")
    description
    tag
    category
    featured
    thumbnail {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH)
      }
    }
    author {
      name
      avatar {
        childImageSharp {
          gatsbyImageData(layout: FULL_WIDTH)
        }
      }
    }
  }

  fragment MdxFields on MdxFields {
    slug
    readingTime {
      text
    }
  }

  fragment ImageSharp on File {
    childImageSharp {
      gatsbyImageData
    }
  }
`;
