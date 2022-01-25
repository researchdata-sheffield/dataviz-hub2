/* eslint-disable no-undef */
import React, { useState, useEffect } from "react";
import SEO from "../components/shared/seo";
import Visualisation from "./workshop/visualisation";

const VisWorkshop = () => {
  const [authenticated, setAuth] = useState(
    process.env.NODE_ENV === "development" ?? false
  );

  useEffect(() => {
    authentication();
  }, [authenticated]);

  function authentication() {
    if (typeof window == "undefined") {
      return;
    }

    if (!authenticated) {
      let userInput = window.prompt(
        "This route is password protected, please enter the password."
      );

      if (userInput == process.env.GATSBY_ENV) {
        setAuth(true);
      } else {
        authentication();
      }
    }
  }

  return (
    authenticated && (
      <>
        <SEO
          title="Craft visualisations"
          keywords={[
            "the university of sheffield",
            "data visualisation",
            "data visualisation hub",
            "research"
          ]}
        />
        <div
          className="min-h-100 flex flex-wrap justify-center py-32"
          style={{ background: "#111827" }}
        >
          <Visualisation />
        </div>
      </>
    )
  );
};

export default VisWorkshop;
