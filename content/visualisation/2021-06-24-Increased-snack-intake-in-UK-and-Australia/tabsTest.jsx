import React from 'react'
import PropTypes from "prop-types"
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';


const tabsTest = () => {

	return (
    <Tabs>
      <TabList>
        <Tab>Title 1</Tab>
        <Tab>Title 2</Tab>
      </TabList>

      <TabPanel>
        Any content 1 Add
      </TabPanel>
      <TabPanel>
        Any content 2 more content here
      </TabPanel>
    </Tabs>
	)
}

export default tabsTest

tabsTest.propTypes = {
		data: PropTypes.any
	}