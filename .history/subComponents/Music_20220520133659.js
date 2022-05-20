import React,{useRef, useState} from 'react'
import styled,{keyframes} from 'styled-components'
import { SoloTheme } from '../styles/Theme'
import { motion } from 'framer-motion'
import { device } from './device'


const SoundBar = styled(motion.div)`
 display: flex;
 position: fixed;
 cursor: pointer;
 left: 1.9rem;
 top: 20rem;
 z-index: 10;
 color: white;

 &>*:nth-child(1){
     animation-delay: 0.2s;
 }

 &>*:nth-child(2){
     animation-delay: 0.3s;
 }

 &>*:nth-child(3){
     animation-delay: 0.4s;
 }

 &>*:nth-child(4){
     animation-delay: 0.5s;
 }

 &>*:nth-child(5){
     animation-delay: 0.6s;
 }

 @media ${device.desktop}{

}

@media ${device.laptop}{
  top: 17rem;
  left: 1.6rem;
}
@media ${device.tablet}{
  
}
@media ${device.smallmobile}{
  left: 0.9rem;
}

`

const play = keyframes`
0%{
    transform: scaleY(1);
}
50%{
    transform: scaleY(2);
}
100%{
    transform: scaleY(1);
}

`

const Line = styled.span` 
background: ${SoloTheme.text};
border: 1px solid ${SoloTheme.body};
animation: ${play} 1s ease infinite;
animation-play-state: ${props => props.click ? "running" : "paused"};
height: 1rem;
width: 2px;
margin: 0 0.1rem;

@media ${device.desktop}{
    width: 1.5px;
    margin: 0 0.11rem;
}

@media ${device.laptop}{
    width: 1.5px;
    margin: 0 0.1rem;
}
@media ${device.tablet}{
  
}
@media ${device.mobile}{
  
}

`



const Music = () => {

const ref = useRef(null);
const [click, setClick] = useState(false);


    const handleClick = () => {
        setClick(!click);
    
        if(!click) {
            ref.current.play();
        } else {
            ref.current.pause();
        }
    }


    return (
    <SoundBar onClick={handleClick} initial={{x:-200}} animate={{x:0}} transition={{type:'spring', duration:1.5, delay:1}}>
    <Line click={click} />
    <Line click={click} />
    <Line click={click} />
    <Line click={click} />
    <Line click={click} />
    <audio src='/audio/creativeminds.mp3' ref={ref} loop/>  
    </SoundBar>
  )
}

export default Music
