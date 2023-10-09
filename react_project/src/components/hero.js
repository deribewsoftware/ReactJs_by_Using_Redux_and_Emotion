import React from 'react';
import styled from '@emotion/styled';
import { keyframes } from '@emotion/react';
import {css} from '@emotion/css';


// Define keyframes for animations
const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const slideInUp = keyframes`
  from {
    transform: translateY(20px);
  }
  to {
    transform: translateY(0);
  }
`;

const HeroContainer = styled.div`
  text-align: center;
  margin-top:100px;
  @media(max-width:768px){
margin-top:6px;
padding:60px 0;
  }
`;

const AnimatedText = styled.h1`
  font-size: 48px;
  margin: 0;
  opacity: 0;
  animation: ${fadeInUp} 1s forwards 0.5s, ${slideInUp} 0.8s forwards 0.7s;
  @media(max-width:768px){
font-size:24px;
  }
`;

const HeroDiv = styled.div`
    display: flex;
    flex-direction:column;
    background-color: #1abc9c;
    align-items: center;
    color:white;
    justify-content: center;
   
    
`;

const Hero = () => {
    

    return (
        <HeroDiv>

<HeroContainer>
           <AnimatedText
           className={
            css`
            font-family: 'Poppins', sans-serif;
font-family: 'Young Serif', serif;
            `
           }
           >Addis Music</AnimatedText>
 </HeroContainer>
<svg viewBox="0 0 1428 174" version="1.1" xmlns="http://www.w3.org/2000/svg" >
        <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
          <g transform="translate(-2.000000, 44.000000)" fill="#ecf0f1" fillRule="nonzero">
            <path d="M0,0 C90.7283404,0.927527913 147.912752,27.187927 291.910178,59.9119003 C387.908462,81.7278826 543.605069,89.334785 759,82.7326078 C469.336065,156.254352 216.336065,153.6679 0,74.9732496" opacity="0.100000001"></path>
            <path
              d="M100,104.708498 C277.413333,72.2345949 426.147877,52.5246657 546.203633,45.5787101 C666.259389,38.6327546 810.524845,41.7979068 979,55.0741668 C931.069965,56.122511 810.303266,74.8455141 616.699903,111.243176 C423.096539,147.640838 250.863238,145.462612 100,104.708498 Z"
              opacity="0.100000001"
            ></path>
            <path d="M1046,51.6521276 C1130.83045,29.328812 1279.08318,17.607883 1439,40.1656806 L1439,120 C1271.17211,77.9435312 1140.17211,55.1609071 1046,51.6521276 Z" id="Path-4" opacity="0.200000003"></path>
          </g>
          <g transform="translate(-4.000000, 76.000000)" fill="#ecf0f1" fillRule="nonzero">
            <path
              d="M0.457,34.035 C57.086,53.198 98.208,65.809 123.822,71.865 C181.454,85.495 234.295,90.29 272.033,93.459 C311.355,96.759 396.635,95.801 461.025,91.663 C486.76,90.01 518.727,86.372 556.926,80.752 C595.747,74.596 622.372,70.008 636.799,66.991 C663.913,61.324 712.501,49.503 727.605,46.128 C780.47,34.317 818.839,22.532 856.324,15.904 C922.689,4.169 955.676,2.522 1011.185,0.432 C1060.705,1.477 1097.39,3.129 1121.236,5.387 C1161.703,9.219 1208.621,17.821 1235.4,22.304 C1285.855,30.748 1354.351,47.432 1440.886,72.354 L1441.191,104.352 L1.121,104.031 L0.457,34.035 Z"
            ></path>
          </g>
        </g>
      </svg>

        </HeroDiv>
    );
}

export default Hero;

