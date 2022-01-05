import React from 'react'
import axios from 'axios'

import config from '../patConfig'

const ADMIN_KEY = 'd268a525c0e9dc5ac5b5fea39af316b4'

function init() {
	const { params } = config

	const test = async () => {
		const res = await axios.post('/v1/payment/ready', null, {
			params,
			headers: {
				Authorization: `KakaoAK ${ADMIN_KEY}`,
				'Content-type': 'application/x-www-form-urlencoded;charset=utf-8'
			}
		})
		console.log(res)
	}

	return (
        <>
				<button onClick={test}>asdf</button>
		</>
    )
}

export default init
