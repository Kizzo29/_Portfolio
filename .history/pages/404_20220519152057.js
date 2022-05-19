import React,{useState} from "react";
import styled,{keyframes} from "styled-components";
import { SoloTheme } from "../styles/Theme";
import {SkyParticles} from "../subComponents/ParticleComponent.js";
import Image from "next/image";
import PowerButton from "../subComponents/PowerButton";
import BigTitle from "../subComponents/BigTitle";
import '@fontsource/roboto-mono'
import { motion } from "framer-motion";
import MenuBar from "../subComponents/MenuBar";
import { device } from "../subComponents/device";


const Not_found = styled.div` 
background-color: ${SoloTheme.body};
overflow: hidden;
width: 100vw;
height: 100vh;
z-index: 5;
@media ${device.desktop}{

}

@media ${device.laptop}{
  
}
@media ${device.tablet}{
  
}
@media ${device.mobile}{
  
}

`

const float = keyframes`
0% { transform: translateY(-10px) }
50% { transform: translateY(15px) translateX(15px) }
100% { transform: translateY(-10px) }
`

const Astronaut = styled(motion.div)` 
position: absolute;
top: 30%;
right: 38%;
width: 20vw;
animation: ${float} 4s ease infinite;

@media ${device.desktop}{

}

@media ${device.laptop}{
  
}
@media ${device.tablet}{
  
}
@media ${device.mobile}{
  
}

`

const GoBack = styled.div` 
display: flex;
flex-direction: column;
justify-content:center;
align-items: center;
height: 20px;
width: 420px;
position: fixed;
top: 2rem;
left: 50%;
transform: translate(-50%, 0);
font-family: 'Roboto Mono',monospace ;
color: white;
z-index: 5;

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
const NotFound = () => {
    {/*State declaration for when menu is clicked */}
    const[click, setClick] = useState(false);
    const handleClick = () => setClick(!click)
    return (  
<Not_found>
<GoBack>
<PowerButton/>
<motion.span initial={{scale:0}} animate={{scale:1}} transition={{delay:1.4, duration:1}}>Page not found. Click below to go back home</motion.span>
</GoBack>
<MenuBox>
<MenuBar handleClick={handleClick} />
</MenuBox>
<SkyParticles/>
<Astronaut>
<Image src={'/astronaut404.png'} width={400} height={400} alt="" >
</Image>
</Astronaut>
<BigTitle text="404" top="10%" left="5%"/>
</Not_found>

    );
}
 
export default NotFound;