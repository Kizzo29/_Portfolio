import {createGlobalStyle} from "styled-components";
import { device } from "../pages/subComponents/device";

const GlobalStyle = createGlobalStyle`

*,*::before,*::after,h1,h2,h3,h4,h5,h6{
    margin:0;
    padding: 0;
}
h1,h2,h3,h4,h5,h6{
    display: inline-block;
}

html,body{
    margin: 0;
    padding: 0;
    overflow-x: hidden;
    background-color:"#022c43" ;
    scroll-behavior: smooth;

}

::-webkit-scrollbar{
  width: 10px;

  @media ${device.desktop}{

}

@media ${device.laptop}{
  
}
@media ${device.tablet}{
  
}
@media ${device.mobile}{
  
}
} 
    
::-webkit-scrollbar-track{
 background-color: #262626;

} 

::-webkit-scrollbar-thumb{

 background: linear-gradient(
    160deg,
    rgba(72, 219, 251, 1) 0%,
    rgba(47, 229, 167,0.1) 60%
);

 &:hover{
   background: linear-gradient(transparent,deepskyblue);  
    cursor: pointer;
 }

} 


`
export default GlobalStyle;