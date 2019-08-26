import React, { Component } from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import "react-tabs/style/react-tabs.css";
import Purchase from '../Purchase/Purchase';

export class Home extends Component {
    render() {
        return (
            <div>
                <Tabs >
                    <TabList>
                        <Tab>Trending Stocks</Tab>
                        <Tab>List Of Stocks</Tab>
                        <Tab>Purchase Stocks</Tab>
                        <Tab>My Stock History</Tab>
                    </TabList>

                    <TabPanel>
                       
                    </TabPanel>
                    <TabPanel>
                        <h2>Any content 2</h2>
                    </TabPanel>
                    <TabPanel>
                        <Purchase></Purchase>                        
                    </TabPanel>
                    <TabPanel>
                        <h2>Any content 4</h2>
                    </TabPanel>
                </Tabs>
            </div>
        )
    }
}

export default Home
