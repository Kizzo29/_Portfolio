import React,{useState, useEffect} from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import '@fontsource/raleway'
import { device } from './device'
import Link from 'next/link'
import { useRouter } from 'next/router'

const MenuBarContainer = styled(motion.div)` 
position: absolute;
z-index: 3;
left: 20px;
top: 20px;

@media ${device.desktop}{

}

@media ${device.laptop}{
  
}
@media ${device.tablet}{
  display: none;
}
@media ${device.mobile}{
  
}

`

const Bar = styled.div` 
content: "";
width: 30px;
cursor: pointer;
border: 1px solid white;
margin: 8px;
transform-origin: 9px 2px;
transition: all 1s 0.1s;
transform: rotateZ(${p => p.angle * 45}deg);
opacity: ${p => p.opacity};

@media ${device.desktop}{

}

@media ${device.laptop}{
    width: 25px;
    margin: 6px;
}
@media ${device.tablet}{
  
}
@media ${device.mobile}{
  
}

` 
const MenuItem = styled.a`
position: absolute;
padding: 37px;
left: 7%;
font-family:  "Raleway", sans-serif;
top: 5%;
color: #fff;
border-radius: 100px;
border-bottom: 3px solid #00adb5;
width: 220px;
text-align: center;
font-size: 2rem;
letter-spacing: 0.25rem;
background: rgb(72,219,251);
box-shadow: 0px 0px 50px rgba(17, 120, 100, 0.27);
background: linear-gradient(
    160deg,
    rgba(72, 219, 251, 1) 0%,
    rgba(47, 229, 167,0.1) 60%
);
opacity: ${p => p.opacity || 0};
transform: rotateZ(${p => p.z - 0}deg) rotateY(${p => p.opacity ? 0 : 90}deg);
transform-origin: left;
transition: transform 1s 0.1s opacity 1s 0.1s;

span{
    position: absolute;
    width: 200px;
    left: 40px;

}

&:hover{
    color: #00adb5;
    background: #00222631;
    span{
        left: 120px;
        letter-spacing: 1rem;
        text-shadow: 2px 2px 10px #00adb5;
    }
}

@media ${device.desktop}{
width: 190px;
}

@media ${device.laptop}{
    width: 160px;
    &:hover{
    span{
        left: 50px;
    
    }
}
}
@media ${device.tablet}{
  
}
@media ${device.mobile}{
  
}

` 


const MenuBar = ({handleClick,name}) => {
const [toggle, setToggle] = useState(0);
const [opacity, setOpacity] = useState(0);
const router = useRouter()
const [activeTabs, setActiveTabs] = useState(name)

const openMenu = () => {
    setToggle(t => !toggle);
}

useEffect(() => {
    setOpacity(toggle);
}, [toggle])

useEffect(() => {
    switch (activeTabs) {
        case 'Skills':
            router.push('/MySkillsPage')
            break;
        case 'Work':
            router.push('/WorkPage')
            break;
        case 'About':
            router.push('/AboutPage')
            break;
        default:
            router.push('/MainPage')
            break;
    }
}, [activeTabs])


    return <>
        <MenuBarContainer onClick={() => {
            openMenu(),
             handleClick()
        }}  initial={{x:-200}} animate={{x:0}} transition={{type: 'spring', delay: 1, duration: 1.5}}>
         <Bar angle={toggle}/>
         <Bar angle={-toggle}/>   
         <Bar opacity={1 - opacity}/>      
        </MenuBarContainer>

      <Link href='/AboutPage'><MenuItem onClick={() => {setActiveTabs('About')}} z={90 * toggle} opacity={opacity}><span>About</span></MenuItem></Link>
      <Link href='/WorkPage'><MenuItem  onClick={() => {setActiveTabs('Work')}} z={60 * toggle} opacity={opacity}><span>Work</span></MenuItem></Link>
       <Link href='/MySkillsPage'><MenuItem  onClick={() => {setActiveTabs('Skills')}} z={0 * toggle} opacity={opacity}><span>Skills</span></MenuItem></Link>
        </>
}

export default MenuBar