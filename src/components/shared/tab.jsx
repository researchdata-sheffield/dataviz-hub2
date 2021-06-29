import React from 'react'
import PropTypes from "prop-types"
import sanitizeHtml from 'sanitize-html';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

const tab = () => {
  const sanitizeOptions = {
    allowedAttributes: {
      '*': [ 'className', 'style' ]
    }
  };
  const data = [
    {
      "title": "Source",
      "content": "<h1 className=\"text-white\">Source, this is source</h1>"
    },
    {
      "title": "Code",
      "content": "<p>THis is my code</p>"
    },
    {
      "title": "Attribution",
      "content": "<p>THis is my attribution</p>"
    },
  ] 

  return (
    <Tabs>
      <TabList>
        {data.map((item, idx) => {
          return (
            <Tab key={idx + item.title} dangerouslySetInnerHTML={{ __html: sanitizeHtml(item.title, sanitizeOptions) }} />
          )
        })}
      </TabList>

      {data.map((item, idx) => {
        return (
          <TabPanel key={idx + item.title + " content"} dangerouslySetInnerHTML={{ __html: sanitizeHtml(item.content, sanitizeOptions) }} />
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