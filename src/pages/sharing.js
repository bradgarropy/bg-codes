import BottomBar from "components/BottomBar"
import styled from "styled-components"

const Sharing = styled.div`
    height: 100%;
    display: grid;
    grid-template-rows: 1fr auto;
`

const SharingPage = () => {
    return (
        <Sharing>
            <div></div>
            <BottomBar />
        </Sharing>
    )
}

export default SharingPage
