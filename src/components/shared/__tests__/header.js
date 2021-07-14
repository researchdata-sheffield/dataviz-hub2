/* eslint-disable no-unused-vars */
import React from "react"
import renderer from "react-test-renderer"
import Header from "../header"
import { createMemorySource, createHistory, LocationProvider } from "@gatsbyjs/reach-router"
 
let source = createMemorySource("/starting/url")
let history = createHistory(source)

describe("Header", () => {
  test("renders correctly", () => {
    const tree = renderer
      .create(
        <LocationProvider history={history}>
          <Header />
        </LocationProvider>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
  // test("Navbar style - top: 0", () => {
  //   const tree = renderer
  //     .create(
  //       <LocationProvider history={history}>
  //         <Header />
  //       </LocationProvider>
  //     )
  //   const el = document.querySelector('#navbar');
  //   el.scrollTop = 12345;
  //   el.dispatchEvent(new window.Event('scroll'));
  // })

})

