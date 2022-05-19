import React,{useState} from 'react'
import { Tab,TabPanel,Tabs} from './TabComponent'
import styled from 'styled-components'
import '@fontsource/raleway'
import { device } from './device'

const TabBox = styled.div` 
display: flex;
padding: 2px;
font-family: 'Raleway', sans-serif;

@media ${device.desktop}{

}

@media ${device.laptop}{
  padding: 1px;
}
@media ${device.tablet}{
  
}
@media ${device.mobile}{
  
}

`
const TabPanelBox = styled.div` 
height: 100vh;

@media ${device.desktop}{

}

@media ${device.laptop}{
  
}
@media ${device.tablet}{
  
}
@media ${device.mobile}{
  
}

`

const App = styled.div` 
background-color: darkslategrey;
margin: 0 auto;
padding: 0;
box-sizing: border-box;
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

const TabsContainer = () => {
    const [activeTab, setActiveTab] = useState(1);
    
    const handleChange = (e, value) => {
     setActiveTab(value);
    }
    return(
         <App>
    <TabBox>
     <Tabs selectedTab ={activeTab} onChange={handleChange}>
   <Tab label={"Tab 1"} value={1}></Tab>
   <Tab label={"Tab 2"} value={2}></Tab>
     </Tabs>
    </TabBox>
      <TabPanelBox>
   <TabPanel value={activeTab} selectedIndex = {1}><h1>Panel 1</h1></TabPanel>
   <TabPanel value={activeTab} selectedIndex = {2}><h1>Panel 2</h1></TabPanel>
      </TabPanelBox>
    </App>)
     
    
}

export default TabsContainer
