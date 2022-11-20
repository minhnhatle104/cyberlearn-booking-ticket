import React from 'react'
import { CustomCard } from '@tsamantanis/react-glassmorphism'
import '@tsamantanis/react-glassmorphism/dist/index.css'
import "../../assets/styles/circle.scss"
import { Tabs } from 'antd'

const {TabPane} = Tabs

export default function Detail(props) {
	return (
		<div style={{backgroundImage:'url(https://picsum.photos/1000)',minHeight:'100vh'}}>
			<CustomCard
				style={{paddingTop:150,minHeight:'100vh'}}
				effectColor="#fff" // required
				color="#fff" // default color is white
				blur={20} // default blur value is 10px
				borderRadius={0} // default border radius value is 10px
			>
				<div className='grid grid-cols-12'>
					<div className='col-span-4 col-start-4'>
						<div className='grid grid-cols-2'>
							<img src='https://picsum.photos/200/350' alt='123'/>
							<div>
								<p>Tên phim</p>
								<p>Mô tả</p>
							</div>
						</div>
					</div>
					<div className='col-span-4'>
					<div className='c100 p50 big'>
						<span>50%</span>
						<div className='slice'>
							<div className='bar'></div>
							<div className='fill'></div>
						</div>
					</div>
				</div>
				</div>

				<div className='mt-10 container'>
					<Tabs tabPosition={'left'}>
						<TabPane tab="Tab 1" key="1">
							Content of tab 1
						</TabPane>
						<TabPane tab="Tab 2" key="2">
							Content of tab 2
						</TabPane>
						<TabPane tab="Tab 3" key="3">
							Content of tab 3
						</TabPane>
					</Tabs>
				</div>
			</CustomCard>
		</div>
	)
}
