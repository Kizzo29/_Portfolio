import React from 'react'
import styled from 'styled-components';
import { Github } from './AllSvgs';
import { motion,useMotionValue,useTransform } from 'framer-motion';
import { SoloTheme } from '../styles/Theme'
import "@fontsource/raleway"
import "@fontsource/roboto-mono"
import { device } from './device';


const Box = styled(motion.li)` 
width: 50rem;
height: 55vh;
background-color: transparent;
backdrop-filter: blur(5px);
padding: 1.5rem 2rem;
margin-right: 8rem;
display: flex;
flex-direction: column;
justify-content: space-between;
border: 2px solid  ${SoloTheme.text};
transition: all 0.2s ease;
border-top: 1px solid rgba(255,255,255,0.1);
border-left: 1px solid rgba(255,255,255,0.1);
border-right: 1px solid rgba(255,255,255,0.04);
border-bottom: 1px solid rgba(255,255,255,0.04);
color: ${SoloTheme.text};
box-shadow: 20px 20px 50px rgba(0, 0,0,0.5);
background-clip: border-box;
background: rgba(0,0,0,0.05) ;

@media ${device.desktop}{

}

@media ${device.laptop}{
  width: 43rem;
height: 52vh;
}
@media ${device.tablet}{
  width: 33rem;
height: 47vh;
margin-right: 1.1rem;
}
@media ${device.mobile}{
  width: 18rem;
height: 53vh;
margin-top: 2rem;
}

@media ${device.smallmobile}{
  width: 13rem;
height: 50vh;
margin-top: 2rem;
}

`
const StyledPerspective = styled.div`
perspective: 500;

@media ${device.desktop}{

}

@media ${device.laptop}{
  
}
@media ${device.tablet}{
  
}
@media ${device.mobile}{
  
}
`
const Container = styled.div` 
display:flex;
justify-content: space-evenly;
width: 100%;
height: 18rem;

@media ${device.desktop}{

}

@media ${device.laptop}{
  
}
@media ${device.tablet}{
  
}
@media ${device.mobile}{
  flex-direction: column;
}

@media ${device.smallmobile}{
  flex-direction: column;
}

`

const TextBox = styled.div` 
display: flex;
flex-direction: column;
width: 40%;
word-wrap: break-word;
color: ${SoloTheme.text};
font-family: "Raleway", sans-serif;

@media ${device.desktop}{

}

@media ${device.laptop}{
  font-size: 0.8rem;
}
@media ${device.tablet}{
  
}
@media ${device.mobile}{
  font-size: 0.6rem;
  width: 100%;
}

@media ${device.smallmobile}{
  font-size: 0.6rem;
  width: 100%;
}

`

const Tags = styled.div`
padding-top: 1.5rem;
font-family: "Roboto Mono", monospace;
display:flex;
flex-wrap:wrap;

@media ${device.tablet}{
  padding-top: 0.9rem;
  margin-bottom: 1rem;
}

@media ${device.smallmobile}{
  padding-top: 0.5rem;
}
`
const Tag = styled.span`
margin-right:1rem;
font-size:calc(0.8em + 0.3vw);
`
const Description = styled.div` 
margin: 10px 0 0 0;
font-family: "Roboto Mono", monospace;
letter-spacing: 3px;

@media ${device.desktop}{

}

@media ${device.laptop}{
  
}
@media ${device.tablet}{
  
}
@media ${device.mobile}{
  
}

`
const ImageBox = styled.div` 
color: ${SoloTheme.text};
width: 50%;
display: flex;
justify-content: center;
align-items: center;

img{
  width: 250px;
  margin-left: 0.5rem;
  object-fit: contain;
  filter: drop-shadow(4px 6px 10px #000000);
 
}

@media ${device.desktop}{
  img{
  width: 230px;
  margin-left: 0.5rem;
  object-fit: contain;
 
}
}

@media ${device.laptop}{
  img{
  width: 200px;
  margin-left: 0.5rem;
  object-fit: contain;
 
}
}
@media ${device.tablet}{
  img{
  width: 150px;
  margin-left: 0.5rem;
  object-fit: contain;
 
}
}
@media ${device.mobile}{
  img{
  width: 80px;
  margin-right: 0.5rem;
  object-fit: contain;
 
}
}

@media ${device.smallmobile}{

  img{
  width: 77px;
  margin-right: 0.5rem;
  object-fit: contain;
 
}
}

`


const Footer = styled.footer` 
display: flex;
justify-content: space-between;

@media ${device.desktop}{

}

@media ${device.laptop}{
  
}
@media ${device.tablet}{
  
}
@media ${device.mobile}{
  
}

`
const FLink = styled.a` 
background-color:  ${SoloTheme.text};
color:  ${SoloTheme.body};
text-decoration: none;
padding: 0.5rem calc(2rem + 2vw);
border-radius: 30px;
font-size:  calc(1em + 0.5vw);
cursor: pointer;
font-family: "Raleway", sans-serif;
:hover{
    background-color: ${SoloTheme.body};
    color: ${SoloTheme.text};

}

@media ${device.desktop}{

}

@media ${device.laptop}{
  padding: 0.4rem calc(1rem + 2vw);
  font-size:  calc(0.8em + 0.5vw);
}
@media ${device.tablet}{
  
}
@media ${device.mobile}{
  
}

`
const Git = styled.a` 
color: white;
cursor: pointer;
text-decoration: none;

@media ${device.desktop}{

}

@media ${device.laptop}{
  &>*{
    width: 18pt;
  }
}
@media ${device.tablet}{
  
}
@media ${device.mobile}{
  
}

`

{/*variants*/}
const Item = {

    hidden:{
        scale:0
    },
    show:{
        scale:1,
        transition:{
            type:'spring',
            duration:0.5
        }
    }
}


const Card = (props) => {

    const y = useMotionValue(0.5)
  const x = useMotionValue(0.5)

  const rotateY = useTransform(x, [0, 1], [-8, 8], {
    clamp: true,
  })
  const rotateX = useTransform(y, [0, 1], [8, -8], {
    clamp: true,
  })

  const onMove = e => {
    // get position information for the card
    const bounds = e.currentTarget.getBoundingClientRect()
    
    // set x,y local coordinates
    const xValue = (e.clientX - bounds.x) / e.currentTarget.clientWidth
    const yValue = (e.clientY - bounds.y) / e.currentTarget.clientHeight
    
    // update MotionValues
    x.set(xValue, true)
    y.set(yValue, true)
  }

  const onLeave = () => {
    
    
    // set x,y local coordinates
    const xValue = 0.5;
    const yValue = 0.5;
    
    // update MotionValues
    x.set(xValue, true)
    y.set(yValue, true)
  }

    const{id, demo,github, tags,name, description,src,src2,heading} = props.data;

    return (
        <StyledPerspective>
        <Box key={id} variants={Item} onPointerMove={onMove}
        onPointerLeave={onLeave}
        style={{
          rotateY,
          rotateX,
        }} >
         <Container>
         <TextBox>
         <h1>{heading}</h1> 
         <h1>{name}</h1>
         <Description>
         <p>
        {description}
         </p>
         </Description>
         <Tags>
         {
                 tags.map((t,id) => {
                     return <Tag key={id}>#{t}</Tag>
                 })
             }
         </Tags>
         </TextBox>
         <ImageBox>
          <img src={src2} alt=""/>
          <img src={src} alt=""/>
         </ImageBox>
         </Container>
         <Footer>
         <FLink href = {{pathname: `${demo}`}} target="_blank">
         Visit
         </FLink>
         <Git href = {{pathname: `${github}`}} target="_blank">
         <Github width={30} height = {30} fill='white'/>
         </Git>
        </Footer>
        </Box>
        </StyledPerspective>
        
    )
}

export default Card


