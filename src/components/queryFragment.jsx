import { graphql } from "gatsby"

export const eventbriteEdge = graphql`
  fragment EventbriteEventsEdge on EventbriteEventsConnection {
    edges {
      node {
        id
        url
        name{
          text
        }
        description {
          text
          html
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
`

export const mdxEdge = graphql`
  fragment MdxEdge on MdxConnection {
    edges {
      node {
        id
        frontmatter {
          description
          tag
          thumbnail {
            childImageSharp {
              fluid {
                src
              }
            }
          }
          date(formatString: "DD MMMM YYYY")
          author {
            name
            avatar {
              childImageSharp {
                fluid {
                  src
                }
              }
            }
          }
          category
          title
        }
        fields {
          slug
          readingTime {
            text
          }
        }
      }
    }
  }
`