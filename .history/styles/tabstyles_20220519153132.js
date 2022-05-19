import styled,{css} from "styled-components";
import "@fontsource/raleway"
import "@fontsource/roboto-mono"
import { device } from ''


export const TabHeaderContainer = styled.div` 
display: flex;
flex-direction: column;
width: 100%;
font-family: 'Raleway', sans-serif;

@media ${device.desktop}{

}

@media ${device.laptop}{

}
@media ${device.tablet}{
  
}
@media ${device.mobile}{
  
}

`
export const StylizedTab = styled.button` 
color: #fff;
width: 100%;
margin-left:0.5rem;
font-size: 1.25rem;
background-color: transparent;
border: none;
cursor: pointer;

${(p) => p.active && css`
color:hsl(207, 90%, 61%); 
`}
${(p) => !p.active && p.inactiveStyle}

@media ${device.desktop}{

}

@media ${device.laptop}{
  font-size: 1.1rem;

}
@media ${device.tablet}{
  font-size: 0.95rem;
}
@media ${device.mobile}{
  
}

`
export const StyledTabPanel = styled.div` 
display: ${(p) => p.active ? 'flex':'none'};
padding-top:2rem;
width: 100%;
height: 100%;
cursor: default;
justify-content: center;
font-family: "Roboto Mono", monospace;
letter-spacing: 2px;

@media ${device.desktop}{

}

@media ${device.laptop}{
  
}
@media ${device.tablet}{
  
}
@media ${device.mobile}{
  
}

`
export const TabsHolder = styled.div` 
display: flex;
font-family:'Raleway', sans-serif;

@media ${device.desktop}{

}

@media ${device.laptop}{

}
@media ${device.tablet}{
  
}
@media ${device.mobile}{
  
}

`
export const InactiveTab = {
    opacity: 0.65,
}