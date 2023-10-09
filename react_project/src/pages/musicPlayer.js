import React ,{useEffect,useState}from 'react'
import { useParams,useNavigate} from 'react-router-dom';
import {useDispatch,useSelector} from 'react-redux';
import { FaRandom, FaStepBackward, FaPlayCircle, FaStepForward } from 'react-icons/fa';
import { IoMdRepeat } from 'react-icons/io';
import styled from '@emotion/styled';
import { css } from '@emotion/css'

import { GET_SONGS_BY_ID } from '../types';

const Container = styled.div`
width: 100%;
height: 100vh;
  font-family: Arial, Helvetica, sans-serif;
  background: linear-gradient(to right,#16a085, #1abc9c);
  font-weight: bold;
`;

const Player = styled.div`
height: 95vh;
display: flex;
align-items: center;
flex-direction: column;
justify-content: center;
`;

const Wrapper = styled.div`
border: 1px solid transparent;
      padding: 30px;
      border-radius: 20px;
      background-color: #f1f1f1;
      box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px;
     width:350px;
`;

const Details = styled.div`
display: flex;
align-items: center;
flex-direction: column;
justify-content: center;
`;

const TrackArt = styled.div`
  margin: 25px;
  height: 250px;
  width: 250px;
  border: 2px solid #FFFAFA;
  background-size: cover;
  background-position: center;
  border-radius: 50%;
  -moz-box-shadow: 0px 6px 5px black;
  -webkit-box-shadow: 0px 6px 5px black;
  box-shadow: 0px 6px 5px black;
  -moz-border-radius: 190px;
  -webkit-border-radius: 190px;
  border-radius: 190px;
  animation: ${({ isPlaying }) => (isPlaying ? 'rotateAnimation 5s infinite linear' : 'none')};
  transition: all 0.5s;
  
  @keyframes rotateAnimation {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

const NowPlaying = styled.div`
  font-size: 1rem;
`;

const TrackName = styled.div`
  font-size: 1.5rem;
  font-weight:600;
`;

const TrackArtist = styled.div`
  margin: 5px 0;
  font-weight:600;
  font-size: 0.75rem;
`;

const Buttons = styled.div`
display: flex;
flex-direction: row;
align-items: center;
margin-bottom: 30px;
`;



const Track = styled.div`
  padding: 25px;
  opacity: 0.8;
  transition: opacity 0.2s;

  &:hover {
    opacity: 1.0;
  }
`;
const Slider= styled.input`

&::-webkit-slider-thumb {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    width: 15px;
    height: 15px;
    background: white;
    border: 3px solid #3774FF;
    cursor: grab;
    border-radius: 100%;
    &:hover {
        opacity: 1.0;
        }
    
`;
const audioStyle = css`

::-webkit-media-controls-current-time-display{
  color:#16a085;
  font-weight:bold;
}
    width: 100%;
    max-width: 400px;
    margin: 0 auto;
    display: block;
    margin-top: 20px;
  `;


// ... Continue converting other styles

const MusicPlayer = () => {



  let {songId}=useParams();

    
  const dispatch=useDispatch();
  let song=useSelector(state=>state.song);
  if (Array.isArray(song))
song=song[0]
  
useEffect(() => {
const asyncSongData = async () => {
   await  dispatch({ type:GET_SONGS_BY_ID,id:songId })
  }

  asyncSongData();
}, [dispatch,songId]);

   

    const [isPlaying, setIsPlaying] = useState(false);

    const handlePlayButtonClick = () => {
    setIsPlaying(true);}

    const handlePause = () => {
      setIsPlaying(false);
    }; 
 


  return (
    <Container>
      <Player>
        <Wrapper>
          <Details>
           
            <TrackArt isPlaying={isPlaying}>
            <img className={
              css`
              height:100%;
              width:100%;
              border-radius:50%;
              `
            } src={song.artwork} alt="photo"/>
            </TrackArt>
            <TrackName>{song.title}</TrackName>
            <TrackArtist>{song.artist}</TrackArtist>
          </Details>

          <audio controls autoplay css={audioStyle} onPlay={handlePlayButtonClick} onPause={handlePause} >
      <source src={song.url} type="audio/ogg" />
      <source src={song.url} type="audio/mpeg" />
      Your browser does not support the audio element.
    </audio>

          
         
        </Wrapper>
      </Player>
    </Container>
  );
};

export default MusicPlayer;
