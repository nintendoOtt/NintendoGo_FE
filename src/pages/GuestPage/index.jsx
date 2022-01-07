import React from 'react'
import { Routes, Route } from 'react-router-dom'

import Init from './Init'
import Success from './Success'
import Cancel from './Cancel'
import Failure from './Failure'
import AppLayout from '../layout/AppLayout'


function GuestPage() {
	
	return (
        <>			
			<AppLayout>
				<Routes>
					<Route path="init" element={<Init />}/>
					<Route path="success" element={<Success />}/>
					<Route path="cancel" element={<Cancel />}/>
					<Route path="failure" element={<Failure />}/>
				</Routes>
			</AppLayout>
		</>
    )
}

export default GuestPage
