import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import {Loggo} from './AllSvgs'
import { SoloTheme } from '../styles/Theme'
import { device } from './device'



const Logo = styled(motion.div)`
display: inline-block;
color: ${SoloTheme.text};
cursor: default;
font-family:'Raleway', sans-serif;
position: fixed;
left: 1.3rem;
top: 1.1rem;
z-index:3;

@media ${device.desktop}{
  
}

@media ${device.laptop}{
  
}
@media ${device.tablet}{
  
}
@media ${device.mobile}{
  
}

`
const LogoRow = styled(motion.div)` 
display: flex;
justify-content: center;
align-items: flex-end;


&:last-child{
font-size: 1.8rem;
color: white;
@media ${device.desktop}{

}

@media ${device.laptop}{
  font-size: 1.4rem;
}
@media ${device.tablet}{
  
}
@media ${device.mobile}{
  
}

}

@media ${device.desktop}{

}

@media ${device.laptop}{
  
}
@media ${device.tablet}{
  
}
@media ${device.mobile}{
  
}

.logo{
  @media ${device.desktop}{

}

@media ${device.laptop}{
  width: 33pt;
  height: 33pt;
}
@media ${device.tablet}{
  
}
@media ${device.mobile}{
  
}
}

`


const Bvariants = {
  initial:{ x: -200},
  visible:{x:0, rotate:[0,18, 36,0]}
}

const spanVariants = {
  initial:{ x: 20, opacity:0},
  visible:{x:0, opacity:1},
}


export const LogoComponent = () => {
  return (
        <Logo>
        <LogoRow>
        <motion.div variants={Bvariants} initial='initial' animate="visible" transition={{type: 'spring', delay: 1, duration: 1.5}}>
        <Loggo width={50} height={50} className='logo'/> 
        </motion.div>
        <motion.span variants={spanVariants} initial='initial' animate="visible"  transition={{type: 'spring', delay: 1.5, duration: 1.5}}>lack
        </motion.span>
        </LogoRow>
        </Logo>

       
    )
}
