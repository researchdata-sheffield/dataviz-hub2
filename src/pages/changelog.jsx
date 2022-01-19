import React from "react";
import SEO from "../components/shared/seo";
import { MDXProvider } from "@mdx-js/react";
import ChangelogMDX from "../../CHANGELOG.mdx";
import { commonMdxComponent } from "../components/style/commonMdxComponent";

const Changelog = () => {
  return (
    <>
      <SEO
        title="Changelog"
        keywords={[
          "the university of sheffield",
          "data visualisation",
          "data visualisation hub",
          "research",
          "changelog",
          "What's new"
        ]}
      />
      <div
        style={{
          width: "100%",
          textAlign: "center",
          padding: "180px 0 50px"
        }}
      >
        <h1
          style={{
            fontSize: "3rem",
            fontWeight: "800",
            letterSpacing: ".4rem"
          }}
        >
          CHANGELOG
        </h1>
        <h3 style={{ fontSize: "1.5rem", color: "#595959" }}>
          🥳 What&apos;s new?
        </h3>
      </div>
      <div
        style={{
          maxWidth: "800px",
          margin: "auto",
          paddingBottom: "100px",
          paddingTop: "50px"
        }}
      >
        <MDXProvider components={{ ...commonMdxComponent }}>
          <ChangelogMDX />
        </MDXProvider>
      </div>
    </>
  );
};

export default Changelog;
