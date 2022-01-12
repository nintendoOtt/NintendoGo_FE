import styled from '@emotion/styled'

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    .topText {
        margin: 30px 0;
        font-size: large;
        font-weight: 700;
    }

    .alertContainer {
        width: 550px;
        background-color: white;
        box-shadow: 5px 5px 10px ${({ theme }) => theme.colors.gray_w};
        border-radius: 10px;
        padding: 20px 20px;

        .howMany {
            display: flex;
            justify-content: space-between;
            align-items: center;
            background-color: #f8f9fd;
            border-radius: 10px;
            padding:15px 30px;

            .howManyText {
                font-size: medium;
                font-weight: 600;
            }
            
            .howManyNum {
                .minusBtn {
                    /* border-width: thick;
                    border-width: 1px;
                    border-color: black;
                    padding:0 6px; */
                    margin-right: 5px;
                }

                .plusBtn {
                    margin-left: 5px;
                }
            }
        }
        

        .alert {
            margin-top: 20px;

            > li {
                margin:5px 0;
            }
        }
    }

    .btnContainer {
        display: flex;
        flex-direction: column;
        margin-top: 40px;
    }
`

