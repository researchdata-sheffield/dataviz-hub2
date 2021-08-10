/**
 * @jest-environment jsdom
 */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import React from "react"
import renderer from "react-test-renderer"
import Header from "../header"
import { LocationProvider } from "@gatsbyjs/reach-router"
import { render, fireEvent, waitFor, getByRole } from '@testing-library/react'


describe("Header", () => {
  it("renders correctly", async () => {
    let tree = renderer
    .create(
      <LocationProvider>
        <Header />
      </LocationProvider>
    )
    .toJSON();
    expect(tree).toMatchSnapshot();
  });
})

describe("Header Interaction", () => {
  let header;
  document.execCommand = jest.fn();

  beforeEach(() => {
    header = render(      
      <LocationProvider>
        <Header />
      </LocationProvider>
    )
  });

  // TODO: not supported by React-testing-library yet
  it.skip("disappear on scroll down", async() => {
    await fireEvent.scroll(window, { target: { scrollY: 400 } });
  
    const navbar = await getByRole(header.container, 'navigation');
    expect(navbar).not.toHaveStyle("top: 0px");
  })

  // TODO: not supported by React-testing-library yet
  it.skip("appears on scroll up", async() => {
    await fireEvent.scroll(window, { target: { scrollY: 600 } });
    await fireEvent.scroll(window, { target: { scrollY: -200 } });

    const navbar = await getByRole(header.container, 'navigation');
    expect(navbar).toHaveStyle("top: 0px");
  })

  it("open the dialog box when click RSS button (desktop)", async() => {
    const rssDesktop = await header.container.querySelector('#rssDesktop');
    await fireEvent.click(rssDesktop);

    const rssBox = await header.container.querySelector('#rssBox');

    expect(rssBox.style.visibility).toBeFalsy();
    expect(document.execCommand).toHaveBeenCalledWith('copy');

  })

  it("open the dialog box when click RSS button (mobile)", async() => {
    Object.defineProperty(window, 'innerWidth', {
      writable: true,
      configurable: true,
      value: 400,
    });

    await window.dispatchEvent(new Event('resize'));

    const rssMobile = await header.container.querySelector('#rssMobile');
    await fireEvent.click(rssMobile);

    const rssBox = await header.container.querySelector('#rssBox');
    expect(rssBox.style.visibility).toBeFalsy();
    expect(document.execCommand).toHaveBeenCalledWith('copy');
  })
})
