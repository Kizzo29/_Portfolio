import React,{useState,useEffect} from 'react'
import styled from 'styled-components'
import { LogoComponent } from '../subComponents/LogoComponent'
import PowerButton from '../subComponents/PowerButton'
import { SocialIcons } from '../subComponents/SocialIcons'
import { motion } from 'framer-motion'
import { SoloTheme } from '../styles/Theme'
import "@fontsource/raleway"
import "@fontsource/roboto-mono"
import { device } from '../subComponents/device'
import Logo from '../subComponents/Logo'
import { Envelope } from '../subComponents/AllSvgs'
import Link from 'next/link'
import { useRouter } from 'next/router'



const MainContainer = styled.div` 
background-color: ${SoloTheme.body};
overflow: hidden;
width: 100vw;
height: 100vh;
display: flex;
position: relative;
justify-content: space-evenly;
align-items: center; 

h1{
  font-family:'Raleway', sans-serif;
 
}

h2,h3,h4,h5,h6{
  font-family:'Raleway', sans-serif;
    font-weight: 500;

}

@media ${device.desktop}{

}

@media ${device.laptop}{
  h2,h3,h4,h5,h6{
   font-size: 1.2rem;

}
}
@media ${device.tablet}{
  
}
@media ${device.mobile}{
  
}
`

const Contact = styled.a` 
color:${SoloTheme.text};
position: absolute;
top: 2rem;
right: calc(1rem + 2vw);
text-decoration: none;
cursor: pointer;
z-index:1;

@media ${device.desktop}{

}

@media ${device.laptop}{
  
}
@media ${device.tablet}{

}

@media ${device.mobile} {

}

`


const Work = styled.a` 
color:${SoloTheme.text};
position: absolute;
top: 50%;
right: calc(1rem + 2vw);
cursor: pointer;
transform: rotate(90deg) translate(-50%, -50%);
text-decoration: none;
z-index:1;

@media ${device.desktop}{

}

@media ${device.laptop}{
  
}
@media ${device.tablet}{
  display: none;
}

@media ${device.mobile} {
 display: none;
}
`
const BottomBar = styled.div` 
position: absolute;
bottom: 1rem;
cursor: default;
left: 0;
right: 0;
width: 100%;

display: flex;
justify-content: space-evenly;

@media ${device.desktop}{

}

@media ${device.laptop}{
  
}
@media ${device.tablet}{
  display: none;
}

@media ${device.mobile} {
 display: none;
}
`
const About = styled.a` 
color: ${SoloTheme.text};
text-decoration: none;
cursor: pointer;
z-index:1;

@media ${device.desktop}{

}

@media ${device.laptop}{
  
}
@media ${device.tablet}{
  display: none;
}

@media ${device.mobile} {
 display: none;
}
`
const Skills = styled.a` 
color: ${SoloTheme.text};;
text-decoration: none;
cursor: pointer;
z-index:1;

@media ${device.desktop}{

}

@media ${device.laptop}{
  
}
@media ${device.tablet}{
  display: none;
}

@media ${device.mobile} {
 display: none;
}
`

const LeftContainer = styled.div` 
position: absolute;
left: 7rem;
top: 8rem;

@media ${device.desktop}{

  top: 10rem;
  left: 9rem;

}

@media ${device.laptop}{
  top: 9rem;
  left: 9rem;
}
@media ${device.tablet}{
 display: flex;
 flex-direction: column;
 align-items: center;
 justify-content: center;
  top: 4rem;
}

@media ${device.mobile} {
  display: flex;
 flex-direction: column;
 align-items: center;
 justify-content: center;
  top: 4rem;
  left: 1rem;
}

@media ${device.smallmobile} {
 
 
  top: 4rem;
  left: 1rem;
  right: 0.01rem;
}

`
const RightContainer = styled.div` 
position: absolute;
right: 8rem;
top: 8rem;
width: 500px;
height: 500px;

@media ${device.desktop}{
top: 11rem;
right: 7rem;
}

@media ${device.laptop}{
  right: 4rem;
top: 10rem;
}
@media ${device.tablet}{
  display: none;
}

@media ${device.mobile} {
right: 6rem;
top: ${props => props.click ? '19rem' : '8rem'} ; 
transition: top 1s ease-out;
}
`

const HeroText = styled.div`
color: ${SoloTheme.text};
padding: 2rem;
letter-spacing:4px;
display: flex;
flex-direction: column;
justify-content: space-evenly;
z-index:5;
cursor:default ;

@media ${device.desktop}{

}

@media ${device.laptop}{
  
}
@media ${device.tablet}{

}

@media ${device.mobile} {


}
`

const IntroText = styled(motion.div)` 
display: flex;
flex-direction: column;
font-family:'Raleway', sans-serif;
color:white ;
span{
  position: relative;
    display: inline-block;
   
}

h1{
  font-size: 2.5rem;
  font-family: "Roboto Mono", monospace;
  font-weight: lighter;
  color: #fece00;
  -webkit-text-fill-color: transparent;
  -webkit-text-stroke-width:1px;
}

&>*:first-child{
  color: ${`rgba(${SoloTheme.textRgba},0.6)` };
  margin-bottom: 10px;
  letter-spacing: 2px;
  }

&>*:not(:first-child) {
  font-size: 6rem;
  letter-spacing: 2px;
}

@media ${device.desktop}{
&>*:not(:first-child) {
  font-size: 4.5rem;
}
}

@media ${device.laptop}{
 display: flex;
 flex-direction: column;
 align-items: center;
 justify-content: center;
 
  &>*:first-child{
  font-size: 0.9rem;
  margin-right: 25px;
  }
  &>*:not(:first-child) {
  font-size: 4.2rem;
  letter-spacing: 2px;
}
}
@media ${device.tablet}{
 justify-content: center;
 &>*:first-child{
  font-size: 0.8rem;
  }
  &>*:not(:first-child) {
  font-size: 4rem;
}
}

@media ${device.mobile} {
  justify-content: center;
 &>*:first-child{
  font-size: 0.7rem;
  }
  &>*:not(:first-child) {
  font-size: 2.5rem;
}
}

@media ${device.smallmobile} {
  justify-content: center;
 &>*:first-child{
  font-size: 0.7rem;
  }
  &>*:not(:first-child) {
  font-size: 2.5rem;
}
}
`

const ELink = styled(motion.a)` 
color: ${SoloTheme.text};
display: flex;
margin-left: 30px;
justify-content: space-evenly;
cursor: pointer;
width: 7rem ;
height: 1.8rem;
align-items: center;
text-decoration: none;
padding: 0.5rem calc(0.6rem + 1vw);
border-radius: 5px;
border: 1px solid #2aff8b;
background: none;
outline: none;
font-size:  calc(0.8em + 0.5vw);
font-family: "Raleway", sans-serif;
letter-spacing: 2px;

:hover{
  background: #2aff8b ;
  transition: 0.5s ease;
  color: ${SoloTheme.body};
  &>*{
        fill:${SoloTheme.body};
    }
}
&>:nth-child(2){
       margin-left: 6px;
    }

@media ${device.desktop}{

}

@media ${device.laptop}{
  width: 6rem ;
height: 1.4rem;
font-size:  calc(0.6em + 0.5vw);

&>:nth-child(1){
       width: 10pt;
    }
}
@media ${device.tablet}{
  display: none;
}
@media ${device.mobile}{
  
}

`
const TabletText = styled(motion.h1) `
 display:none;
 
 @media ${device.tablet}{
  display:block ;
  font-size: 2.5rem;
    font-family: "Roboto Mono", monospace;
    font-weight: lighter;
    color: #fece00;
    -webkit-text-fill-color: transparent;
    -webkit-text-stroke-width:1px;
}
@media ${device.mobile}{
  font-size: 2.5rem;
    font-family: "Roboto Mono", monospace;
    font-weight: lighter;
    color: #fece00;
    -webkit-text-fill-color: transparent;
    -webkit-text-stroke-width:1px;
}
  
  `





const text1 = "A Full Stack Experience"  
const text2 = "That"
const text3 = "excites."
const text4 = "That Excites"

const spanVariants = {
  visible:{y:0, scaleY:1},
  hover: {
    y:[-1,-2,-2.8,0.9,1,1.1,0], 
  scaleY:[1,1.3,0.8,1.2,1],
  color:'#ffffff'},
transition: {
delay:1.2
}
}

{/*  variants */}
const list = {
  visible:{
    opacity:1,
    transition: {
      delay:1.2,
      when:'beforeChildren',
      staggerChildren:0.25
    }
  },
  hidden:{
    delay:1.2,
    opacity:0,
    transition: {when:"afterChildren", }
  }
}

{/*  variants */}
const item = {
  visible:{
    opacity:1,
    y:[-1, -1.9, -2.7, 1],
    scaleY:[1,1.3,0.8,1]
  },
 hidden:{
   opacity:0,
 },
 transition: {
   delay:1.2
 }
}

   

  const MainPage = () => {
  
    const [showComponents, setShowComponents] = useState(true);
  
    useEffect(() => {
        if(window.matchMedia(`${device.tablet}`).matches) {
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

  const router = useRouter()
  const [activeTabs, setActiveTabs] = useState('/MainPage')
  useEffect(() => {
      switch (activeTabs) {
          case '/MySkillsPage':
              router.push('/MySkillsPage')
              break;
          case '/WorkPage':
              router.push('/WorkPage')
              break;
          case '/AboutPage':
              router.push('/AboutPage')
              break;
          default:
              router.push('/MainPage')
              break;
      }
  }, [activeTabs, router])

  return <motion.div exit={{opacity:0}}>
      <MainContainer>
     {showComponents && <PowerButton/>}
      <LogoComponent/>
      <SocialIcons />
     
     <LeftContainer>
     
     <HeroText>  
     <IntroText initial={{opacity:0}} animate={{opacity:1}} transition={{delay: 1, duration:1.8, when:"beforeChildren"}}> 
     
     <motion.p>
     { text1.split("").map((letter, id) => { if (letter === 'F')
            return   <motion.span> 
            <motion.span  key = {id}> &nbsp;{letter}</motion.span>
            </motion.span>
     else if(letter === 'S') return <motion.span> 
     <motion.span key={id}> &nbsp;{letter}</motion.span>
     </motion.span>
     
     else if(letter === 'k') return <motion.span> 
     <motion.span key={id}> {letter}&nbsp;</motion.span>
     </motion.span>

    
       return(
      <motion.span key={id}> 
      <motion.span key={id}>{letter}</motion.span>
      </motion.span>
     )})}
      </motion.p>

     {showComponents &&  <motion.h1 variants={list} initial='hidden' animate='visible'>{text2.split("").map((letter, id) => (
                                    <motion.span  variants={item} key={id}>
                                    <motion.span key = {id}  variants={spanVariants} initial="visible" whileHover="hover">
                                    {letter}</motion.span>
                                    </motion.span>
))}</motion.h1> }

{ showComponents && <motion.h1 variants={list} initial='hidden' animate='visible'>
{ text3.split("").map((letter, id) => (
 <motion.span variants={item} key={id}> 
 <motion.span  key = {id} variants={spanVariants} initial="visible" whileHover="hover">{letter}</motion.span>
 </motion.span>
))}
 </motion.h1>}

 <TabletText variants={list} initial='hidden' animate='visible'>
{ text4.split("").map((letter, id) => (
 (letter === 'E') ?  <motion.span variants={item}>  <motion.span  key = {id} variants={spanVariants} initial="visible" whileHover="hover"> &nbsp;{letter}</motion.span></motion.span>
 :<motion.span variants={item}> 
 <motion.span  key = {id} variants={spanVariants} initial="visible" whileHover="hover">{letter}</motion.span>
 </motion.span>
))}
 </TabletText>
        </IntroText>
      </HeroText>

      {showComponents ? null : <Logo/>}
  <ELink href='mailto:kasemablackgmail.com'   initial={{x: 50, opacity:0}}
      animate={{opacity:1, x: 0}}
        transition={{ type: 'spring', duration:2, delay:1 }} target="_blank" rel='noreferrer'>
  <Envelope fill= {SoloTheme.text} width= {20} height={20}/>
  <p>Hire Me</p>
  </ELink>


     </LeftContainer>
 
    <RightContainer>
   <Logo/>
    </RightContainer>

  {showLinks ? null : <Contact  href='mailto:kasemablackgmail.com' target= "_blank" rel='noreferrer'>
      <motion.h2 
      initial={{
          y:-200,
          transition:{type:'spring', duration:1.5, delay:1}
      }}
      animate={{
        y:0,
        transition:{type:'spring', duration:1.5, delay:1}
    }}
      whileHover = {{scale:1.1}}
      whileTap={{scale: 0.9}}
      >
      Contact
      </motion.h2>
      </Contact>}
      
      {showLinks ? null :  <Link href= "/WorkPage" passHref> 
      <Work onClick={() => setActiveTabs("/WorkPage")}>
      <motion.h2 
      initial={{
        y:-200,
        transition:{type:'spring', duration:1.5, delay:1}
    }}
    animate={{
      y:0,
      transition:{type:'spring', duration:1.5, delay:1}
  }}
      whileHover = {{scale:1.1}}
      whileTap={{scale: 0.9}}
      >
      Work
      </motion.h2>
      </Work>
      </Link>
    }

      {showLinks ? null :   <BottomBar>
       <Link  href= "/AboutPage" passHref>
      <About  onClick={() => setActiveTabs("/AboutPage")}>
      <motion.h2 
      initial={{
        y:200,
        transition:{type:'spring', duration:1.5, delay:1}
    }}
    animate={{
      y:0,
      transition:{type:'spring', duration:1.5, delay:1}
  }}
      whileHover = {{scale:1.1}}
      whileTap={{scale: 0.9}}
      >
      About
      </motion.h2>
      </About>
      </Link>

      <Link  href= "/MySkillsPage" passHref>
      <Skills  onClick={() => setActiveTabs("/MySkillsPage")}>
      <motion.h2 
      initial={{
        y:200,
        transition:{type:'spring', duration:1.5, delay:1}
    }}
    animate={{
      y:0,
      transition:{type:'spring', duration:1.5, delay:1}
  }}
      whileHover = {{scale:1.1}}
      whileTap={{scale: 0.9}}
      >
      My Skills
      </motion.h2>
      </Skills>
      </Link>
      </BottomBar>}

    </MainContainer>
      </motion.div>
       
    
}

export default MainPage
