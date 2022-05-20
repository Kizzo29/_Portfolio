import React from "react";
import styled from "styled-components";
import { Loggo } from "./AllSvgs";
import { device } from "./device";


const LogoContainer = styled.div` 
margin-left: 2.5rem;
z-index: 0;

@media ${device.desktop}{
margin-left: 7rem;
}

@media ${device.laptop}{
  margin-left: 9rem;
}
@media ${device.tablet}{
  
}
@media ${device.smallmobile}{
  margin-left: 2.8rem;
}

.myLogo{
  @media ${device.desktop}{
  width: 240pt;
  height: 240pt;
}

@media ${device.laptop}{
  width: 215pt;
  height: 215pt;
}
@media ${device.tablet}{
  width: 180pt;
  height: 180pt;
  margin-right: 8.5rem;
 
}
@media ${device.mobile}{
  
}
}

` 


const Logo = () => {


  return <>
  <LogoContainer>
 <Loggo
  width = "300pt" height="300pt" className= 'myLogo'/>
 </LogoContainer>
  </>
  
}

export default Logo