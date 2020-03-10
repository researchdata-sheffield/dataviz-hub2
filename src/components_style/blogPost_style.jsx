import styled from "styled-components"

export let H1 = styled.h1`
  display: block;
  font-size: 2em;
  margin-top: 0.67em;
  margin-bottom: 0.67em;
  margin-left: 0;
  margin-right: 0;
  font-weight: bold;
`

export let H2 = styled.h2`
  display: block;
  font-size: 1.5em;
  margin-top: 0.83em;
  margin-bottom: 0.83em;
  margin-left: 0;
  margin-right: 0;
  font-weight: bold;
`

export let H3 = styled.h3`
  display: block;
  font-size: 1.17em;
  margin-top: 1em;
  margin-bottom: 1em;
  margin-left: 0;
  margin-right: 0;
  font-weight: bold;
`

export let H4 = styled.h4`
  display: block;
  font-size: 1em;
  margin-top: 1.33em;
  margin-bottom: 1.33em;
  margin-left: 0;
  margin-right: 0;
  font-weight: bold;
`

export let H5 = styled.h5`
  display: block;
  font-size: .83em;
  margin-top: 1.67em;
  margin-bottom: 1.67em;
  margin-left: 0;
  margin-right: 0;
  font-weight: bold;
`

export let H6 = styled.h6`
  display: block;
  font-size: .67em;
  margin-top: 2.33em;
  margin-bottom: 2.33em;
  margin-left: 0;
  margin-right: 0;
  font-weight: bold;
`

export let P = styled.p`
  display: block;
  margin-top: 1em;
  margin-bottom: 1em;
  margin-left: 0;
  margin-right: 0;
  word-wrap: break-word; /* if you want to cut the complete word */
  white-space: normal;
`

export let A = styled.a`
  color: #00729b;

  &:hover, &:link:active, &:visited:active, &:visited:hover {
    color: #00aeef;
  }

  &:visited {
    color: #00729b;
  }

`

export let Ol = styled.ol`
  display: block;
  list-style-type: decimal;
  margin-top: 1em;
  margin-bottom: 1em;
  margin-left: 0;
  margin-right: 0;
  padding-left: 40px;
`

export let Li = styled.li` {
  display: list-item;
`