import React from 'react'
import PropTypes from "prop-types"

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

const tab = () => {
  const data = [
    {
      "title": "Source",
      "content": "<p>THis is my content</p>"
    },
    {
      "title": "Code",
      "content": "<p>THis is my content</p>"
    },
    {
      "title": "Attribution",
      "content": "<p>THis is my content</p>"
    },
  ]

  return (
    <Tabs>
      <TabList>
        {data.map((item, idx) => {
          return (
            <Tab key={idx + item.title}>{item.title}</Tab>
          )
        })}
      </TabList>

      {data.map((item, idx) => {
        return (
          <TabPanel key={idx + item.title + " content"}>{item.content}</TabPanel>
        )
      })}
    </Tabs>
  )

}

export default tab

tab.propTypes = {
  props: PropTypes.any,
  data: PropTypes.object
}