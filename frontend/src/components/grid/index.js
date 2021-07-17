import styled from 'styled-components';

export const Grid = styled.div`
    width: 600px;
    height: 600px;
    margin: 0 auto;
    background-color: ${({bgColor}) => bgColor};
    color: ${({color}) => color ? color : "#fff"};
    border: 6px solid ${({borderColor}) => borderColor};
    border-radius: 10px;

    display: grid;
    grid-template: ${({width, height}) => {
        return `repeat(${width}, 1fr) / repeat(${height}, 1fr)`
    }};
`

export const Cell = styled.div`
    border: 6px solid ${({borderColor}) => borderColor};
    font-family: Helvetica;
    font-weight: bold;
    color: zzzs${({color}) => color ? color : "#fff"};
    font-size: ${({fontSize}) => fontSize ? fontSize : "4em"};
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
`
