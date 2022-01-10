import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import styled from '@emotion/styled'


function NoParty() {
    // eslint-disable-next-line no-unused-vars
    const [userName, setUserName] = useState("김민우")

    return (
        <Container className='flex-col items-start'>
                {/* 위에 글씨 */}
                <div>
                    <div className='textContainer'>
                        <div className='text'>{userName}님,</div>
                        <div className='text'>아직 가입한 파티가 없어요</div>
                        <div>지금 NintendoGo로 파티에 참가해보세요!</div>
                    </div>

                    {/* 이미지 */}
                    <div className='imgContainer'>
                        <img
                            src="/img/partner.png"
                            alt="partner"
                            layout="fill"
                        />
                    </div>

                    {/* 파티 선택 버튼 */}
                    <div className='btnContainer'>
                        <Link to='/select' className='btn'>파티만들러 가기</Link>
                    </div>
                </div>
        </Container>
    )
}

const Container = styled.div`
	display: flex;
	flex-direction: column;
    align-items: center;
    margin-top: 40px;

    .textContainer {
        .text {
            font-size: x-large;
            font-weight: 700;
        }
    }

    .imgContainer { 
        display: flex;
        justify-content: center;
        margin: 40px 0 ;
        > img {
            width: 200px;
        }
    }

    .btnContainer {
        display: flex;
        margin-top: 20px;
            .btn {
                background-color: #6C5CE7;
                padding: 10px 200px;
                border-radius: 6px;
                box-shadow: 5px 5px 10px ${({ theme }) => theme.colors.gray_w};
                color: white;
                &:hover {
                filter: brightness(80%);
            }
        }
    }
`

export default NoParty;
