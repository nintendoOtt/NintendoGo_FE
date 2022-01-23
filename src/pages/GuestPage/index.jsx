import React from 'react'
import { Routes, Route } from 'react-router-dom'

import GuestLayout from 'components/layout/GuestLayout'
import GuestPayment from 'pages/GuestPage/GuestPayment'
import GeustEmail from 'pages/GuestPage/GuestEmail'
import GuestSuccess from 'pages/GuestPage/GuestSuccess'


function GuestPage() {
	
	return (
        <>			
			<GuestLayout>
				<Routes>
					<Route path="email" element={<GeustEmail />} />
					<Route path="payment" element={<GuestPayment />} />
					<Route path="success" element={<GuestSuccess />}/>
				</Routes>
			</GuestLayout>
		</>
    )
}

export default GuestPage
