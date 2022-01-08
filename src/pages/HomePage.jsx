/* eslint-disable arrow-body-style */
import React from 'react'
import AppLayout from '../components/layout/AppLayout'
import Feed from '../components/Feed'

const HomePage = () => {
	return (
		<>
			<AppLayout>
				<Feed />
			</AppLayout>
		</>
	)
}

export default HomePage
