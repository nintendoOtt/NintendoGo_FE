import styled from '@emotion/styled'

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    .imgContainer {
        position: relative;
        width: 150px;
    }

    .pageLogo {
        font-size: x-large;
        font-weight: 500;
        margin: 30px 0;
    }

    .benefitsContainer {
        width: 550px;
        background-color: white;
        box-shadow: 5px 5px 10px ${({ theme }) => theme.colors.gray_w};
        border-radius: 10px;
        padding: 20px 20px;

        .benefit {
            margin-bottom: 15px;
        }
    }

    .btnContainer {
        display: flex;
        flex-direction: column;

        .btnTop {
            margin: 20px 0 10px 0;
        }
    }
`

