import React,{useEffect,useRef, useState} from 'react'
import styled, { ThemeProvider } from 'styled-components'
import { SoloTheme} from '../styles/Theme'
import { SocialIcons } from '../subComponents/SocialIcons'
import PowerButton from '../subComponents/PowerButton'
import {Work} from "../data/WorkData.js"
import Card from '../subComponents/Card'
import { YingYang } from '../subComponents/AllSvgs'
import BigTitle from '../subComponents/BigTitle'
import { motion } from 'framer-motion'
import MenuBar from '../subComponents/MenuBar'
import {BubbleParticles} from '../subComponents/ParticleComponent'
import { device } from '../subComponents/device'
import Nav from '../subComponents/Nav'



const Box = styled.div` 
background-color: ${SoloTheme.body};
height: 00vh;
position: relative;
display: flex;
align-items: center;
cursor: default;
overflow: hidden;

@media ${device.desktop}{

}

@media ${device.laptop}{
  
}
@media ${device.tablet}{

}

@media ${device.mobile}{
height: 100vh;
overflow-x: scroll;
}

@media ${device.smallmobile}{
height: 100vh;
overflow-x: scroll;
}

`

const Main = styled(motion.ul)` 
position: fixed;
top: 7.5rem;
list-style: none;
left: calc(6rem + 15vw);
height: 40vh;
display: flex;
color: white;

@media ${device.desktop}{
left:  calc(4.3rem + 15vw);;

}

@media ${device.laptop}{

}
@media ${device.tablet}{
  left:  calc(4rem + 10vw);
  overflow: visible;
}
@media ${device.mobile}{
 position: absolute;
  top: 3rem;
  left:  calc(2.5rem + 10vw);
}

@media ${device.smallmobile}{
 position: absolute;
  top: 3rem;
  left:  calc(2.5rem + 10vw);
}

`

const Rotate = styled.span` 
display: block;
position: fixed;
right: 1rem;
bottom: 1rem;
width: 80px;
height: 80px;
z-index:1;

@media ${device.desktop}{

}

@media ${device.laptop}{
  width: 60px;
height: 60px;
&>*{
  width: 50pt;
height: 50pt;
}
}
@media ${device.tablet}{
  
}
@media ${device.mobile}{
  
}

`

const MenuBox = styled.div` 
height: ${props => props.click ?  '100vh' : ''};
width: 100vw;
position: fixed;
cursor: pointer;
z-index: 3;
left: 5px;
top: 1px;

@media ${device.desktop}{

}

@media ${device.laptop}{
  
}
@media ${device.tablet}{
  
}
@media ${device.mobile}{
  
}

`

{/* variants for main */}
const container = {
     hidden: {opacity:0},
     show: {
         opacity:1,

         transition:{
             staggerChildren:0.5,
             duration:0.5,
         }
     }

}


export default function WorkPage({work}) {

    const ref = useRef(null);
    const roller = useRef(null);
    const[click, setClick] = useState(false);
    const handleClick= () => setClick(!click); 
    const [showComponents, setShowComponents] = useState(true);


    useEffect(() => {
     let element = ref.current;
     const rotate = () => {
         element.style.transform = `translate(${-window.pageYOffset}px)`

         roller.current.style.transform = `rotate(` + -window.pageYOffset + 'deg)'
     }
     
     window.addEventListener('scroll', rotate)  

     return () => window.removeEventListener('scroll', rotate)
     
    }, [])

    useEffect(() => {
      if(window.matchMedia(`${device.mobile}`).matches) {
          setShowComponents(false)
      } else {
          setShowComponents(true)
      }
  }, [])

  const [showLinks, setShowLinks] = useState(true);
  useEffect(() => {
    if(window.matchMedia(`${device.nav}`).matches) {
        setShowLinks(false)
    } else {
        setShowLinks(true)
    }
}, [])

const [showNav, setShowNav] = useState(true);
useEffect(() => {
    if(window.matchMedia(`${device.nav}`).matches) {
        setShowNav(false)
    } else {
        setShowNav(true)
    }
}, [])
    return <motion.div exit={{opacity:0}}>
        <ThemeProvider theme={SoloTheme}>
        <PowerButton/>
        <BubbleParticles/>
        <SocialIcons/>
       {showNav && <Nav name='work'/>}
        <Box>
      {showLinks ? null : <MenuBox><MenuBar handleClick={handleClick} name="Work"/></MenuBox>}
         <Main ref={ref} variants={container} initial='hidden' animate='show'>
         {
        work.map( 

            d => <Card key={d.id} data={d}/> 
        )
          
         }
         </Main>
         <Rotate ref = {roller}>
        { showComponents && <YingYang width={80} height={80} fill={SoloTheme.text} />}
         </Rotate>
         <BigTitle text="WORK" top='10%' right='20%' />
        </Box>
        </ThemeProvider>
          
       
    </motion.div>
}

  
  export const getStaticProps = async () => {
    const work = Work.map((data) => data);
    return{
      props: {work}
    }
  }

