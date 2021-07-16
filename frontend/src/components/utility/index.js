import styled, { keyframes } from "styled-components";

const fadeIn = keyframes`
    from {
        opacity: 0;
    }

    to {
        opacity: 1
    }
`;

const fadeOut = keyframes`
    from {
        opacity: 1;
    }

    to {
        opacity: 0;
    }
`;

export const Fade = styled.div`
    display: inline-block;
    visibility: ${({visible}) => visible ? 'visible' : 'hidden'};
    animation: ${({visible}) => visible ? fadeIn : fadeOut} 1s linear;
    transition: visibility 1s linear;
`;