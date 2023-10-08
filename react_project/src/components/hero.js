import React from 'react';
import styled from '@emotion/styled';
import { keyframes } from '@emotion/react';
import {css} from '@emotion/css';


const fadeInUp = keyframes`
    to {
        opacity: 1;
        transform: translateY(0);
    }
`;

const colorChange = keyframes`
    0% {
        fill: #ff6f61;
    }
    25% {
        fill: #ffcc5c;
    }
    50% {
        fill: #88d8b0;
    }
    75% {
        fill: #4f98ca;
    }
    100% {
        fill: #9452a5;
    }
`;

const HeroDiv = styled.div`
    display: flex;
    background-color: #1abc9c;
    align-items: center;
    color:white;
    justify-content: center;
    height: 400px;
    
`;

const Hero = () => {
    

    return (
        <HeroDiv>
           <h1
           className={
            css`
            font-family: 'Poppins', sans-serif;
font-family: 'Young Serif', serif;
            `
           }
           >Addis Music</h1>
        </HeroDiv>
    );
}

export default Hero;

