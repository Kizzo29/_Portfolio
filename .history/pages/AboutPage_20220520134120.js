import React,{useState, useEffect} from 'react'
import styled, {ThemeProvider } from 'styled-components'
import { SoloTheme} from '../styles/Theme'
import BigTitle from '../subComponents/BigTitle'
import {SkyParticles} from '../subComponents/ParticleComponent'
import { Tabs,Tab,TabPanel } from '../subComponents/TabComponent'
import MenuBar  from '../subComponents/MenuBar'
import PowerButton from '../subComponents/PowerButton'
import { SocialIcons } from '../subComponents/SocialIcons'
import { motion } from 'framer-motion'
import "@fontsource/raleway"
import { Envelope, GradHat, Location, Twitter, User } from '../subComponents/AllSvgs'
import { device } from '../subComponents/device'


const Box = styled.div` 
background-color: ${SoloTheme.body};
width: 100vw;
height: 100vh;
position: relative;
overflow: hidden;

@media ${device.desktop}{

}

@media ${device.laptop}{
  
}
@media ${device.tablet}{

}
@media ${device.mobile}{
  
}
`


const Main = styled(motion.div)` 
border-top: 1px solid rgba(255,255,255,0.1);
border-left: 1px solid rgba(255,255,255,0.1);
border-right: 1px solid rgba(255,255,255,0.04);
border-bottom: 1px solid rgba(255,255,255,0.04);
box-shadow: 20px 20px 50px rgba(0, 0,0,0.5);
background-clip: border-box;
color: ${SoloTheme.text};
cursor: default;
padding: 2rem;
width: 55vw;
height: 66vh;
z-index: 3;
line-height: 1.5;
display: flex;
flex-direction: column;
font-size: calc(0.6rem + 1vw);
backdrop-filter: blur(4px);
position: absolute;
left:  ${props => props.click ? '25%' : '11%'};
top: 8rem;
transition: left 2s ease-out;

@media ${device.desktop}{

}

@media ${device.laptop}{
  width: 59vw;
  top: 7rem;
  
}
@media ${device.tablet}{
  width: 69vw;
  top: 6rem;
  left: 14%;
  height: 57vh;
}
@media ${device.smallmobile}{
  width: 68vw;
  top: 3rem;

}

`
const TabBox = styled.div` 
display: flex;
padding: 2px;
font-family: "Raleway", sans-serif;

@media ${device.desktop}{

}

@media ${device.laptop}{
  
}
@media ${device.tablet}{
  
}
@media ${device.mobile}{
  
}

`
const TabPanelBox = styled.div` 
height: 100vh;
max-width: 100vw;

@media ${device.desktop}{

}

@media ${device.laptop}{
  
}
@media ${device.tablet}{
  
}
@media ${device.mobile}{
  
}

`
const MenuBox = styled.div` 
height: ${props => props.click ?  '100vh' : ''};
width:100vw;
position: fixed;
cursor: pointer;
z-index: 3;
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

const AboutText = styled.div` 
color: white;
font-size: 0.7em;
width: 60%;
display: flex;
flex-direction: column;
justify-content: space-evenly;
word-wrap: break-word;
word-break: keep-all;
margin-left: 1rem;

@media ${device.desktop}{

}

@media ${device.laptop}{
  font-size: 0.7em;
  margin-bottom: 5rem;
  

span{
  &>*{
   width: 12pt;
}
}

}
@media ${device.tablet}{
  
}
@media ${device.smallmobile}{
  margin-left: 0.6rem;


}

`
const ContactOptions = styled.div` 
color: white;
width: 50%;
display: flex;
margin-right: 2.5rem ;
flex-direction: column;
justify-content: space-evenly;

@media ${device.desktop}{

}

@media ${device.laptop}{
  margin-bottom: 2.9rem ;
  margin-right: 2.9rem ;
}
@media ${device.tablet}{
  
}
@media ${device.smallmobile}{
  margin-right: 2rem ; 
  width: 60%;
}

`

const ContactOption = styled.article` 
border-top: 1px solid rgba(255,255,255,0.1);
border-left: 1px solid rgba(255,255,255,0.1);
border-right: 1px solid rgba(255,255,255,0.04);
border-bottom: 1px solid rgba(255,255,255,0.04);
box-shadow: 20px 10px 50px rgba(0, 0,0,0.3);
background-clip: border-box;
fill: ${SoloTheme.text};
font-size: 0.9em;
letter-spacing: 0.2em;
padding: 2rem;
border-radius: 1.2rem;
text-align: center;
border: 1px solid transparent;
text-decoration: none;
display: flex;
flex-direction: column;
justify-content: space-evenly;
align-items: center;

:hover{
  background: transparent;
  box-shadow: 10px 10px 25px rgba(0, 0,0,0.5);
  
}
&>*:nth-child(4){
  text-decoration: none;
  color:#2aff8b;
}
&>*:nth-child(1){
margin-bottom: 10px;
}
&>*:nth-child(2){
font-weight: lighter;
}
&>*:nth-child(3){
font-weight: lighter;
}

@media ${device.desktop}{

}

@media ${device.laptop}{
  font-size: 0.8em;
  padding: 1.2rem;
  &>*:nth-child(1){
    width: 18pt;
    height: 18pt;
}
}
@media ${device.tablet}{
  
}
@media ${device.smallmobile}{
  font-size: 0.7em;
  padding: 1.2rem;
  &>*:nth-child(1){
    width: 18pt;
    height: 18pt;
}
}

`
const ProfileBorder = styled.div` 
border: 3.5px solid hsl(207, 90%, 61%);
justify-self: center;
width: 165px;
height: 165px;
border-radius: 50%;
display: grid;
place-items: center;
margin-bottom: .75rem;
margin-right: 1rem;
@media ${device.desktop}{

}

@media ${device.laptop}{
  width: 155px;
height: 155px;
}
@media ${device.tablet}{
  width: 150px;
height: 150px;
}
@media ${device.mobile}{
  width: 109px;
height: 109px;
}

@media ${device.smallmobile}{
  width: 107px;
height: 107px;
}

`

const Profile = styled.div` 
width: 155px;
height: 155px;
background: linear-gradient(180deg, hsla(207, 90%, 61%, 1) 0%, hsla(207, 90%, 61%, .2) 100%);
border-radius: 50%;
overflow: hidden;
display: flex;
align-items: flex-end;
justify-content: center;

 img{
   width: 140px;
 }

 @media ${device.laptop}{
  width: 146px;
height: 146px;
img{
   width: 130px;
 }
}

@media ${device.tablet}{
  width: 141px;
height: 141px;
img{
   width: 125px;
 }
}

@media ${device.mobile}{
  width: 107px;
height: 107px;
img{
   width: 90px;
 }
}

@media ${device.smallmobile}{
  width: 107px;
height: 107px;
img{
   width: 90px;
 }
}

`



export default function AboutPage() {
    const [activeTab, setActiveTab] = useState(1);
    const [click, setClick] = useState(false)
    const handleClick = () => setClick(!click)

    const handleChange = (e, value) => {
     setActiveTab(value);}

     const [showLinks, setShowLinks] = useState(true);
     useEffect(() => {
       if(window.matchMedia(`${device.nav}`).matches) {
           setShowLinks(false)
       } else {
           setShowLinks(true)
       }
   }, [])

    return <motion.div exit={{opacity:0}}>
        <ThemeProvider theme={SoloTheme}>
        <Box>
        <SocialIcons/>
       <PowerButton/>
        <SkyParticles/>
       { showLinks ? null :<MenuBox> 
        <MenuBar handleClick={handleClick} name="About"/> 
        </MenuBox>}
        <Main click={click} initial={{y: -800}} animate={{y:0}} transition={{type:'spring', duration:2.5,delay:0.6}}>
       
        <TabBox>
        <Tabs selectedTab ={activeTab} onChange={handleChange}>
      <Tab label={"About"} value={1}/>
      <Tab label={"Contact"} value={2}/>
        </Tabs>
       </TabBox>
      
         <TabPanelBox>
      <TabPanel value={activeTab} selectedIndex = {1}>
      <ProfileBorder>
      <Profile>
      <img src= "/Transparent.png" alt =""/>
      </Profile>
      </ProfileBorder>
      <AboutText>
         <p><span><User width={20} height={20} fill={SoloTheme.text}/> </span>I am a self-motivated full-stack developer looking for an opportunity to grow my skills while delivering the best in any project or organisation I work in.</p>
         <p><span><GradHat width={20} height={20} fill={SoloTheme.text}/> </span> Bsc. Business Information Technology at Malawi University of Science and Technology.</p>
         <p><span><Location width={20} height={20} fill={SoloTheme.text}/> </span> Blantyre, Malawi.</p>
      </AboutText>
      </TabPanel>

      <TabPanel value={activeTab} selectedIndex = {2}>
      <ContactOptions>
      <ContactOption>
      <Envelope width={30} height={30}/>
      <h4>Email</h4>
      <h5>kasemablack@gmail.com</h5>
      <a href='mailto:kasemablackgmail.com' target="_blank" rel='noreferrer'>Send a message</a>
      </ContactOption>
      <ContactOption>
      <Twitter width={30} height={30}/>
      <h4>Whatsapp</h4>
      <h5>+265881620329</h5>
      <a href='https://api.whatsapp.com/send?phone=+265881620329' target="_blank" rel='noreferrer'>Send a message</a>
      </ContactOption>
   </ContactOptions>
   <ProfileBorder>
   <Profile>
   <img src= "/Transparent.png"/>
   </Profile>
   </ProfileBorder>
      </TabPanel>
         </TabPanelBox>
        </Main>
       <BigTitle text="ABOUT" top="10%" left="5%"/>

        </Box>
        </ThemeProvider>
          
       
    </motion.div>
}

