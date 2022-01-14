import styled from '@emotion/styled'

function MiniProfile() {
    
    return (
        <Container>
            <img
               src="/img/profile.png"
               alt="" 
            />
        </Container>
    )
}

const Container = styled.div`

    img {
        width: 50px;
        height: 50px;
        border-radius: 9999px;
        border-width: thick;
        border-width: 2px;
        border-color: gray;
    }
`
export default MiniProfile
