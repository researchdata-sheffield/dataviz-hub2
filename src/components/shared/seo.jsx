/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react";
import PropTypes from "prop-types";
import { Helmet } from "react-helmet";
import { useStaticQuery, graphql } from "gatsby";
import { getSrc } from "gatsby-plugin-image";

const SEO = ({
  title,
  author,
  description,
  lang,
  keywords,
  twitterCard,
  twitterImage,
  twitterImageAlt,
  meta
}) => {
  const { site, ogImage } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
            siteUrl
          }
        }
        ogImage: file(relativePath: { eq: "readme/readme.png" }) {
          childImageSharp {
            gatsbyImageData
          }
        }
      }
    `
  );

  const metaDescription = description || site.siteMetadata.description;
  const metaAuthor = author || "dataviz.shef.ac.uk";
  const metaTwitterCard = twitterCard || "summary_large_image";
  const metaTwitterImage =
    getSrc(twitterImage) || getSrc(ogImage?.childImageSharp?.gatsbyImageData);
  const metaTwitterImageAlt =
    twitterImageAlt || "Thumbnail for the website - dataviz.shef.ac.uk";

  return (
    <Helmet
      defer={false}
      htmlAttributes={{
        lang
      }}
      title={title}
      titleTemplate={`%s | ${site.siteMetadata.title}`}
      meta={[
        {
          name: `description`,
          content: metaDescription
        },
        {
          property: `og:title`,
          content: title
        },
        {
          property: `og:description`,
          content: metaDescription
        },
        {
          property: `og:type`,
          content: `website`
        },
        {
          property: `twitter:site`,
          content: `dataviz.shef.ac.uk`
        },
        {
          property: `twitter:site:id`,
          content: `@OpenResShef`
        },
        {
          name: `twitter:card`,
          content: metaTwitterCard
        },
        {
          name: `twitter:creator`,
          content: metaAuthor
        },
        {
          name: `twitter:title`,
          content: title
        },
        {
          name: `twitter:description`,
          content: metaDescription
        },
        {
          name: `twitter:image`,
          content: `https://dataviz.shef.ac.uk${metaTwitterImage}`
        },
        {
          name: `twitter:image:alt`,
          content: metaTwitterImageAlt
        }
      ]
        .concat(meta)
        .concat(
          keywords.length > 0
            ? {
                name: "keywords",
                content: keywords.join(",")
              }
            : []
        )}
    >
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
      <link
        href="https://fonts.googleapis.com/css2?family=Source+Sans+Pro:ital,wght@0,200;0,300;0,400;0,600;0,700;0,900;1,200;1,300;1,400;1,600;1,700;1,900&family=Source+Serif+Pro:ital,wght@0,200;0,300;0,400;0,600;0,700;0,900;1,200;1,300;1,400;1,600;1,700;1,900&display=swap"
        rel="stylesheet"
      />
    </Helmet>
  );
};

SEO.defaultProps = {
  lang: `en`,
  meta: [],
  description: ``,
  keywords: []
};

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  author: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
  keywords: PropTypes.arrayOf(PropTypes.string),
  twitterCard: PropTypes.string,
  twitterImage: PropTypes.object,
  twitterImageAlt: PropTypes.string
};

export default SEO;
