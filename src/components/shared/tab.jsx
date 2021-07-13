import React from 'react'
import PropTypes from "prop-types"
import sanitizeHtml from 'sanitize-html';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';


const tab = (props) => {
  const data = props.data;

  // add two attributes for all links within the page
  if (typeof window !== "undefined") {
    const tabs = document.querySelectorAll("[class^=react-tabs__tab-panel]");

    tabs.forEach((tabItem) => {
      tabItem.childNodes.forEach((child) => {
        if (child.href) {
          child.target = "_blank";
          child.rel = "noopener noreferrer";
        }
      })
    })
  }

  return (
    <Tabs className={`mt-16 ${props.className}`} {...props}>
      <TabList>
        {data.map((item, idx) => {
          return (
            <Tab key={idx + item.title} dangerouslySetInnerHTML={{ __html: sanitizeHtml(item.title, sanitizeOptions) }} />
          )
        })}
      </TabList>

      {data.map((item, idx) => {
        return (
          <TabPanel key={idx + item.title + " content"} dangerouslySetInnerHTML={{ __html: item.content }} />
        )
      })}
    </Tabs>
  )

}

export default tab

tab.propTypes = {
  props: PropTypes.any,
  data: PropTypes.array
}



const sanitizeOptions = {
  allowedTags: sanitizeHtml.defaults.allowedTags.concat([ 'img', 'Link', 'code' ]),
  allowedAttributes: {
    ...sanitizeHtml.defaults.allowedAttributes,
    '*': [ 'className', 'style', 'class' ],
    'a': [ 'href', 'name', 'target', 'rel' ]
  },
  allowedClasses: {
    ...sanitizeHtml.defaults.allowedClasses,
    '*': [ '*' ]
  } 
};