import styled from '@emotion/styled'

export const Container = styled.div`

	width: 35%;
	margin: 0 auto;
	display: flex;
	flex-direction: column;
	align-items: flex-start;

    .topText {
    	font-size: ${({ theme }) => theme.fontSizes.big};
        font-weight: 500;
    }

    .middleText {
        font-size: ${({ theme }) => theme.fontSizes.lg};
        color: ${({ theme }) => theme.colors.gray};
        font-weight: 500;
    }

    .btnContainer {
        width: 100%;
    }

    .btn {
        display: flex;
        justify-content: space-between;
    }
`

