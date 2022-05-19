import React from 'react'
import Particles from 'react-tsparticles'
import styled from 'styled-components'
import configA from '../config/particlesjs-config.json'
import config from '../config/particlesjs-404.json'
import bubbles from '../../config/Bubble.json'

const Box = styled.div` 
position: absolute;
top: 0;
right: 0;
left: 0;
bottom: 0;
z-index: 0;
`

export const LinkedParticles = () => {
    return (
        <Box>
         <Particles style={{position:'absolute', top:0}} params={configA}/>
        
        </Box>
    )
}

export const SkyParticles = () => {
    return (
        <Box>
         <Particles style={{position:'absolute', top:0}} params={config}/>
        
        </Box>
    )
}

export const BubbleParticles = () => {
    return (
        <Box>
         <Particles style={{position:'absolute', top:0}} params={bubbles}/>
        
        </Box>
    )
}
