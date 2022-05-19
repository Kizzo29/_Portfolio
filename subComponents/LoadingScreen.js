import React from "react"
import styled,{keyframes} from "styled-components"
import '@fontsource/raleway'
import { device } from "./device"


const Loader = styled.div` 
display: flex;
justify-content: center;
align-items: center;
height: 100vh;
background-color: #022c43;
width: 100vw;
overflow-x: hidden;
pointer-events: none;
z-index: 999;

@media ${device.desktop}{

}

@media ${device.laptop}{
  
}
@media ${device.tablet}{
  
}
@media ${device.mobile}{
  
}

`
const loading = keyframes ` 
0%{
    transform: rotate(0deg);
}

100%{
    transform: rotate(360deg);
}
`

const LoaderInner = styled.div` 
width: 200px;
height: 200px;
display: flex;
justify-content: center;
align-items: center;
color: #4DD0E1;
position: relative;
z-index: 999;
font-family:'Raleway' sans-serif ;

&:after{
    position: absolute;
    content: "";
    width: 200px;
    height: 200px;
    left: 0;
    top: 0;
    border-radius: 50%;
    border-top: 5px solid #4DD0E1;
    animation: ${loading} 250ms linear infinite;
}

@media ${device.desktop}{

}

@media ${device.laptop}{
  
}
@media ${device.tablet}{
  
}
@media ${device.mobile}{
  
}

`


export const LoadingScreen = () => {
    return (

        <Loader>
        <LoaderInner><span>Loading</span>
        </LoaderInner></Loader>
      
         )
       

}
