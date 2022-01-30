/* eslint-disable no-unused-vars */
import React from 'react'
import { Link } from 'react-router-dom'
import styled from '@emotion/styled'

const MiniProfile = ({ img }) => {
	return (
		<Container to="/myPage">
			<img src={img} alt="profile"/>
		</Container>
	)
}

const Container = styled(Link)`
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
export default MiniProfile
