import styled from '@emotion/styled'

export const Container = styled.div`
	width: 40%;
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
        align-items: center ;
        justify-content: space-between;
        margin: 40px 0;

        color: ${({ theme }) => theme.colors.black};
        font-size: ${({ theme }) => theme.fontSizes.lg};
        font-weight: 500;
    }
    
    .arrow {
        color: ${({ theme }) => theme.colors.gray};
    }

    .logout {
        color: red;
        border: 0;
        outline: 0;
        background-color: #f8f9fd;

        font-size: ${({ theme }) => theme.fontSizes.lg};
        font-weight: 500;
        
        cursor: pointer;
    }
`

