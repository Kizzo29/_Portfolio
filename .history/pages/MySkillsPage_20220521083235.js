import React,{useState,useEffect} from 'react'
import styled, { ThemeProvider } from 'styled-components'
import { SoloTheme } from '../styles/Theme'
import { Develope, Apps} from '../subComponents/AllSvgs'
import BigTitle from '../subComponents/BigTitle'
import {LinkedParticles} from '../subComponents/ParticleComponent'
import MenuBar from '../subComponents/MenuBar'
import { motion } from 'framer-motion'
import PowerButton from '../subComponents/PowerButton'
import { SocialIcons } from '../subComponents/SocialIcons'
import "@fontsource/raleway"
import "@fontsource/roboto-mono"
import { device } from '../subComponents/device'
import Nav from '../subComponents/Nav'



const Box = styled.div` 
background-color: ${SoloTheme.body};
width: 100vw;
overflow: hidden;
height: ${props => props.click ? 'auto' : '100vh'};
position: relative;
display: flex;
flex-direction: ${props => props.click ? 'column' : 'row'};
align-content: space-between;
justify-content: space-evenly;
align-items: center;
padding-bottom: ${props => props.click ? '2.5rem' : ''};


@media ${device.desktop}{

}

@media ${device.laptop}{
  
}
@media ${device.tablet}{
  flex-direction: column;
  justify-content: space-between;
  overflow: scroll;
}
@media ${device.mobile}{
    flex-direction: column;
  justify-content: space-between;
   overflow: scroll;

   
}

`

const Main = styled(motion.div)` 
border-top: 1px solid rgba(255,255,255,0.1);
border-left: 1px solid rgba(255,255,255,0.1);
border-right: 1px solid rgba(255,255,255,0.04);
border-bottom: 1px solid rgba(255,255,255,0.04);
color: ${SoloTheme.text};
box-shadow: 20px 20px 50px rgba(0, 0,0,0.3);
background-clip: border-box;
align-content: space-between;
padding: 2rem;
width: 32vw;
background: rgba(0,0,0,0.05) ;
margin: ${props => props.click ? '40px 40px 40px 76px' : '0 0 0 40px'};
height: 65vh;
z-index: 3;
backdrop-filter: blur(5px);
font-family: "Roboto Mono", monospace;
font-weight: 100;
letter-spacing: 1px;
line-height: 1.5;
display: flex;
flex-direction: column;
justify-content: space-between;
border-radius: 20px;

  
&:hover{
    background-image: linear-gradient(0deg,#009ece ,transparent);  border: transparent;
   transition: 0.5s ease;

}

@media ${device.desktop}{

}

@media ${device.laptop}{
  
}
@media ${device.tablet}{
  margin-top: 2rem;
  width: 38vw;
}
@media ${device.mobile}{
    width: 46vw;
}

@media ${device.smallmobile}{
    width: 53vw;

}

`

const Title = styled.h2` 
display: flex;
justify-content: center;
align-items: center;
font-size: calc(1em + 1vw);
font-family:'Raleway', sans-serif;
font-weight: 400;
letter-spacing: 1px;

&>*:first-child{
    margin-right: 0.5rem;
}

@media ${device.desktop}{

}

@media ${device.laptop}{
    font-size: calc(0.8em + 1vw);
    &>*:first-child{
    width: 18pt;
}
}
@media ${device.tablet}{
  font-size: calc(0.6em + 0.9vw) ;
}
@media ${device.mobile}{
  
}

`
const MenuBox = styled.div` 
height: ${props => props.click ?  '100vh' : ''};
width:100vw;
position: fixed;
z-index: 3;
cursor: pointer;
left: 5px;
top:  1px;

@media ${device.desktop}{

}

@media ${device.laptop}{
  
}
@media ${device.tablet}{
  
}
@media ${device.mobile}{
  
}

`

const Description = styled.div` 
color: ${SoloTheme.text};
font-size: calc(0.6rem + 1vw);
padding: 0.5rem 0;



${Main}:hover &{
   
   color:${SoloTheme.text};

}

strong{
    margin-bottom: 1rem;
    text-transform: uppercase;
    font-family:'Raleway', sans-serif;
}
ul,p{
    margin-left: 2rem;
    font-family:  "Roboto Mono", monospace;
    letter-spacing: 1px;
    font-weight: 100;

}

@media ${device.desktop}{

}

@media ${device.laptop}{
    font-size: calc(0.5rem + 1vw);
  
}
@media ${device.tablet}{
    font-size: calc(0.5rem + 0.8vw);
    strong{
    font-size: calc(0.5rem + 0.8vw);;
}
}
@media ${device.mobile}{
  
}

`



const MySkillsPage = () => {
   
   {/*State declaration for when menu is clicked */}
    const[click, setClick] = useState(false);
    const handleClick = () => setClick(!click)
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
        <SocialIcons/>
        <Box click={click}>
        <PowerButton/>
        <LinkedParticles/>
       {showNav && <Nav name='skills'/>}
        
       {showLinks ? null : <MenuBox> 
        <MenuBar handleClick={handleClick} name='Skills' /> 
        </MenuBox>}

        <Main click={click}  initial={{height:0, opacity:0}}
        animate={{height: '65vh', opacity:1}}
        transition={{ type: 'spring', duration:2, delay:1 }}>
        <Title>
        <Apps width={32} height={32} fill='currentColor'/>Mobile App Developer
        </Title>
        <Description>
        I love creating full-stack mobile applications for both iOS and Android.
        </Description>
        <Description>
        <strong>Skills</strong>
        <p>Dart,Flutter,Mysql, Nodejs, Docker, Rethink database.</p>
        </Description>
        <Description>
        <strong>Tools</strong>
        <p>VScode,Github.</p>
        </Description>
        </Main> 
     
        
        <Main click={click}  initial={{height:0, opacity:0}}
        animate={{height: '65vh', opacity:1}}
        transition={{ type: 'spring', duration:2, delay:1 }}>
        <Title>
        <Develope width={40} height={40} fill = 'currentColor'/> Web Developer
        </Title>
        <Description>
        I enjoy front-end web development.
        </Description>
        <Description>
        <strong>Skills</strong>
        <p>
        Javascript, Nextjs, React, Html, Css, StyledComponents,Firebase.
        </p>
        </Description>
        <Description>
        <strong>Tools</strong>
        <p>
        VScode, Github, Illustrator, PhotoShop.
        </p>
       
        </Description>
        </Main>  
      <BigTitle text="SKILLS" top="80%" right="30%" />

        </Box>
        </ThemeProvider>
        </motion.div>
       
   
    }

    export default  MySkillsPage;