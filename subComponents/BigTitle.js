import React from 'react'
import styled from 'styled-components'
import "@fontsource/raleway"
import { device } from './device'

const Text = styled.h1` 
position: fixed;
top: ${props => props.top};
left: ${props => props.left};
right: ${props => props.right};
color: ${props => `rgba(${props.theme.textRgba},0.1)`};
font-size: calc(5rem + 5vw);
cursor: default;
z-index:0;
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

const BigTitle = (props) => {
    return (
        <Text top={props.top} left={props.left} right={props.right} >
            {props.text}
        </Text>
    )
}

export default BigTitle
