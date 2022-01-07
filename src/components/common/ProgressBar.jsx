import styled from '@emotion/styled'

const Container = styled.div`
	width: 100%;
	height: 15px;
	background-color: #eee;
	border-radius: 10px;
	box-shadow: 5px 5px 10px ${({ theme }) => theme.colors.gray_w};
	> div {
		width: ${({ percent }) => percent}%;
		height: 100%;
		background-color: ${({ theme }) => theme.colors.primary};
		border-radius: inherit;
		transition: 0.3s;
	}
`

const ProgressBar = ({ percent }) => (
	<Container percent={percent}>
		<div />
	</Container>
)

export default ProgressBar
