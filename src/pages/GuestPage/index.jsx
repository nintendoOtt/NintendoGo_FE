import React from 'react'
import { Routes, Route } from 'react-router-dom'

import GuestLayout from 'components/layout/GuestLayout'
import GuestInit from 'pages/GuestPage/GuestInit'
import GeustEmail from 'pages/GuestPage/GuestEmail'
import GuestSuccess from 'pages/GuestPage/GuestSuccess'





function GuestPage() {
	
	return (
        <>			
			<GuestLayout>
				<Routes>
					<Route path="init" element={<GuestInit />} />
					<Route path="email" element={<GeustEmail />} />
					<Route path="success" element={<GuestSuccess />}/>
				</Routes>
			</GuestLayout>
		</>
    )
}

export default GuestPage
