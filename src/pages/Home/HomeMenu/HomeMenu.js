import React, { useState } from 'react'
import {Tabs } from 'antd';
import TabPane from 'antd/lib/tabs/TabPane';

export default function HomeMenu(props) {
    const [tabPosition, setTabPosition] = useState('left');


    return (
        <>
           <Tabs tabPosition={tabPosition}>
            <TabPane tab={<img src="https://picsum.photos/500" className='rounded-full' width="50"/>} key="1">

            </TabPane>
            <TabPane tab={<img src="https://picsum.photos/500" className='rounded-full' width="50"/>} key="2">
                Content of tab 2
            </TabPane>
            <TabPane tab={<img src="https://picsum.photos/500" className='rounded-full' width="50"/>} key="3">
                Content of tab 3
            </TabPane>
           </Tabs>
        </>
    )
}
