import React from 'react'
import { Routes, Route } from 'react-router-dom'

import Init from './Init'
import Success from './Success'
import AppLayout from '../layout/AppLayout'


function GuestPage() {
	
	return (
        <>			
			<AppLayout>
				<Routes>
					<Route path="init" element={<Init />}/>
					<Route path="success" element={<Success />}/>
				</Routes>
			</AppLayout>
		</>
    )
}

export default GuestPage
