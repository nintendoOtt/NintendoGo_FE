import React, { useEffect } from 'react'
import { useMutation, useReactiveVar } from '@apollo/client'
import styled from '@emotion/styled'

import { loginData } from 'apollo'
import { LOGOUT_USER } from 'apollo/user'

const Container = styled.div`
	img {
		width: 40px;
		height: 40px;
		border-radius: 9999px;
		border-width: thick;
		border-width: 2px;
		border-color: gray;
		cursor: pointer;
		&:hover {
			transform: scale(1.1);
			transition-duration: 200ms;
			transition-timing-function: cubic-bezier(0, 0, 0.2, 1);
		}
	}
`

const MiniProfile = ({ img }) => {
	const userData = useReactiveVar(loginData)

	// eslint-disable-next-line no-unused-vars
	const [logoutHandler, { loading, error, data }] = useMutation(LOGOUT_USER, {
		variables: { id: userData.loginUser.id }
	})

	useEffect(() => {
		if (data) {
			loginData({})
		}
	}, [data])

	return (
		<Container>
			<img src={img} alt="" onClick={logoutHandler} />
		</Container>
	)
}

export default MiniProfile
