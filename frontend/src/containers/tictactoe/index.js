import React from 'react'
import styled from 'styled-components';

import TicTacToeBoard from '../../components/tttboard';

const colorPallette = {
    "Charcoal": "#34495E",
    "Charcoal2": "#2C3E50",
    "Platinum": "#EAEBED",
    "Pewter Blue": "#A3BAC3",
    "Pacific Blue": "#01A7C2"
}
const BG = styled.div`
    width: 100vw;
    height: 100vh;
    background: ${colorPallette["Pewter Blue"]};
    display: flex;
    align-items: center;
    justify-content: center;
`

/*
    For now lets keep this simple, no score tracking, and you dont get to
    choose if youre playing x or o's youre playing x, thats it. You also must
    go first. We will add more functionality as we go
*/

function Index() {
    const onCellClick = index => {

    }

    return (
        <BG>
            <div>
                <TicTacToeBoard 
                    board={Array(9).fill('')}
                    onClick={onCellClick}
                />
            </div>
        </BG>
    )
}

export default Index
