import React from 'react'
import styled from 'styled-components'
import Link from 'next/link'
import {PowerBtn} from './AllSvgs'
import { motion } from 'framer-motion'
import { device } from './device'


const Power = styled(motion.button)`
position: fixed;
top: 2rem;
left: 50%;
transform: translate(-50%, 0);
cursor: pointer;
background-color: #FCF6F4;
padding: 0.3rem;
border-radius: 50%;
border: 1px solid #000;
width: 2.5rem;
height: 2.5rem;
display: flex;
justify-content: center;
align-items: center;
z-index: 3;

&:hover{
    background-color: rgba(0,255,0,0.4);
    box-shadow: 0 0 8px 6px rgba(0,255,0,0.2);
}

&>*:first-child{
 text-decoration: none;
 color: inherit;
}

@media ${device.desktop}{

}

@media ${device.laptop}{
    width: 2.1rem;
height: 2.1rem;
}
@media ${device.tablet}{
display: none;
}
@media ${device.mobile}{
  
}

`


const PowerButton = () => {
    return (
        <Power initial={{y:-200}} animate={{y:0}} transition={{delay:1, duration:1}}>
        <Link href = "/MainPage" passHref>
        <PowerBtn width={30} height={30} fill='currentColor'/>
        </Link>
        </Power>
    )
}

export default PowerButton
