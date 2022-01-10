import Logo from 'components/common/Logo'
import styled from '@emotion/styled'

const Container = styled.div`
	width: 100%;
	max-width: 812px;
	margin: 50px auto 0;
	display: flex;
	align-items: center;
	flex-direction: column;
`

const SelectLayout = ({ children }) => (
	<Container>
		<Logo />
		<div>{children}</div>
	</Container>
)

export default SelectLayout
