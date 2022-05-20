import React,{useState, useEffect} from 'react'
import Link from 'next/link'
import styled,{keyframes} from 'styled-components'
import { Facebook, Github, LinkedIn, Twitter} from './AllSvgs'
import { motion } from 'framer-motion'
import { SoloTheme } from '../styles/Theme'
import { device } from './device'

const Icons = styled.div` 
display: flex;
flex-direction: column;
align-items: center;
position: fixed;
bottom: 0;
left: 2rem;
transition:.2s;
z-index: 3;

@media ${device.desktop}{

}

@media ${device.laptop}{

}
@media ${device.tablet}{
  bottom: 22%;
}

@media ${device.mobile} {
    bottom: 22%;
    margin: 0.5rem 0;
}

&>*:not(:last-child) {
margin: 0.5rem 0;
}

`
const scaledown = keyframes` 
  0%{
        -webkit-transform: scale(1.2);
        transform: scale(1.2)
    }
    100%{
        -webkit-transform: scale(1);
        transform: scale(1);
    }
`
const scale = keyframes` 
  0%{
        -webkit-transform: scale(1);
        transform: scale(1)
    }
    100%{
        -webkit-transform: scale(1.2);
        transform: scale(1.2);
    }
`

const Icon = styled.div`

animation: ${scaledown} .3s linear;
animation-fill-mode: forwards;
cursor: pointer;

&:hover{
    z-index: 100;
    animation: ${scale} 0.4s linear;
    animation-fill-mode: forwards;
}

@media ${device.desktop}{

}

@media ${device.laptop}{
 
}
@media ${device.tablet}{
  
}
@media ${device.mobile}{
  
}

.icon{
    @media ${device.desktop}{

}

@media ${device.laptop}{
  width: 16pt;
  height: 16pt;
}
@media ${device.tablet}{
  
}
@media ${device.mobile}{
  
} 
}

`

const Line = styled(motion.span)` 
width: 2px;
height: 8rem;
cursor: default;
background-color: ${SoloTheme.text};

@media ${device.desktop}{

}

@media ${device.laptop}{
    height: 4rem;
}
@media ${device.tablet}{
  
}

@media ${device.mobile} {
  display: none;
}
`

export const SocialIcons = (props) => {
    const [showLine, setShowLine] = useState(true);

    useEffect(() => {
        if(window.matchMedia(`${device.tablet}`).matches) {
            setShowLine(false)
        } else {
            setShowLine(true)
        }
    }, [])
    return (
        <Icons>
        <Icon>
        <motion.div
        initial={{transform:"scale(0)"}}
        animate={{scale:[0,1,1.5,1]}}
        transition={{type:'spring', duration:1, delay:1}}>
        <Link style = {{color:'inherit'}} target="_blank" href = {{pathname: "https://github.com/Kizzo29"}} passHref>
        <Github width = {25} height = {25} fill = {SoloTheme.text} className='icon' />
        </Link>
        </motion.div>
        </Icon>
        
        <Icon>
        <motion.div
        initial={{transform:"scale(0)"}}
        animate={{scale:[0,1,1.5,1]}}
        transition={{type:'spring', duration:1, delay:1.2}}
        >
        <Link  style = {{color:'inherit'}} target="_blank" href = {{pathname: "https://twitter.com/blacmahn"}} passHref>
        <Twitter width = {25} height = {25} fill = {SoloTheme.text} className='icon' />
        </Link>
        </motion.div>
        </Icon>
        <Icon>
        <motion.div
        initial={{transform:"scale(0)"}}
        animate={{scale:[0,1,1.5,1]}}
        transition={{type:'spring', duration:1, delay:1.4}}
        >
        <Link  style = {{color:'inherit'}}  target="_blank" href = {{pathname: "https://web.facebook.com/victor.kasema"}} passHref>
        <Facebook width = {25} height = {25} fill = {SoloTheme.text} className='icon' />
        </Link>
        </motion.div>
        </Icon>
        

       <Icon>
        <motion.div
        initial={{transform:"scale(0)"}}
        animate={{scale:[0,1,1.5,1]}}
        transition={{type:'spring', duration:1, delay:1.6}}
        >
        <Link  style = {{color:'inherit'}}  target="_blank" href = {{pathname: "https://www.linkedin.com/in/black-kasema-0388121b5/"}} passHref>
        <LinkedIn width = {25} height = {25} fill = {SoloTheme.text} className='icon'/>
        </Link>
        </motion.div>
        </Icon>
        {  showLine && <Line
         color = {props.theme}

         initial={{
             height:0
           }}
         animate={{
             height:'8rem'
         }}
         transition={{
             type:'spring', duration:1,delay:0.8
         }}
         />   }
        </Icons>
    )
}
