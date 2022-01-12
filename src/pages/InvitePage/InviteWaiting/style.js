import styled from '@emotion/styled'

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    .topContainer {
        padding-top: 40px;
        display: flex;
        flex-direction: column;
        align-items: center;

        .topFont {
            font-size: x-large;
            font-weight: 700;
        }
    }

    .mediumContainer {
        padding-top: 40px;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .bottomContainer {
        padding-top: 40px;
        display: flex;
        align-items: center;

        .bottomText {
            font-weight: 700;
            margin-right: 8px;
        }

        .bottomLink { 
            text-decoration: underline;
            color: 	#696969;
        }
    }

    .recommendText {
        color: 	#696969;
    }

    .btnContainer {
        display: flex;
        margin-top: 40px;

        .copyBtn {
            background-color:white;
            padding: 12px 10px;
            border-radius: 10px;
            margin-right: 4px;

            color: #696969;
            font-size: large;
            font-weight: 700;
        }

        .shareBtn {
            background-color: #fae100;
            padding: 12px 10px;
            border-radius: 10px;
            margin-left: 4px;

            font-size: large;
            font-weight: 700;
        }
    }

    .alertContainer {
        margin-top: 40px;
        box-shadow: 5px 5px 10px ${({ theme }) => theme.colors.gray_w};
        border-radius: 10px;
        padding: 20px 20px;

        .alertTop {
            margin: 10px 0;
            color: #696969;
            font-size: large;
            font-weight: 700;
        }

        .alerts {
            .alert {
                margin: 10px 0;
                color: #696969;
            }
        }
    }
`

