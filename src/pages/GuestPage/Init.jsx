import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import axios from 'axios'

import config from '../../payConfig'
import { PAYMENT_REQUEST } from '../../reducers/post'

const ADMIN_KEY = 'd268a525c0e9dc5ac5b5fea39af316b4'

function Init() {

  const dispatch = useDispatch();
  const [redirectUri, setRedirectUri] = useState("")
	const { params } = config

	useEffect(() => {

		const getUri = async () => {
			const res = await axios.post('/v1/payment/ready', null, {
				params,
				headers: {
					Authorization: `KakaoAK ${ADMIN_KEY}`,
					'Content-type': 'application/x-www-form-urlencoded;charset=utf-8'
				}
			})
       dispatch({
        type: PAYMENT_REQUEST
      });
			setRedirectUri(res.data.next_redirect_pc_url)
			console.log(res.data.next_redirect_pc_url)
		}
		getUri()
	}, [])
  

    
    return (
        <>
            <a href={redirectUri}>
                <h1>결제 진행하기</h1>
            </a>
       </>
    )
}

export default Init
