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

export const mdxEdge = graphql`fragment MdxEdge on MdxConnection {
  edges {
    node {
      id
      frontmatter {
        description
        tag
        thumbnail {
          childImageSharp {
            gatsbyImageData(placeholder: BLURRED, layout: FULL_WIDTH)
          }
        }
        date(formatString: "DD MMMM YYYY")
        author {
          name
          avatar {
            childImageSharp {
              gatsbyImageData(placeholder: BLURRED, layout: FULL_WIDTH)
            }
          }
        }
        category
        title
        featured
        type
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

export const mdxNode = graphql`fragment MdxNode on Query {
  mdx(id: {eq: $id}) {
    id
    fields {
      slug
      slugOrigin
      readingTime {
        text
      }
    }
    body
    tableOfContents
    frontmatter {
      title
      author {
        name
        avatar {
          childImageSharp {
            gatsbyImageData(placeholder: BLURRED, layout: FULL_WIDTH)
          }
        }
      }
      date(formatString: "D MMMM YYYY")
      description
      thumbnail {
        childImageSharp {
          gatsbyImageData(placeholder: BLURRED, layout: FULL_WIDTH)
        }
      }
      category
      tag
      disableTOC
      d3
      type
    }
  }
}
`

export const imageSharp = graphql`
  fragment ImageSharp on File {
    childImageSharp {
      gatsbyImageData
    }
  }
`