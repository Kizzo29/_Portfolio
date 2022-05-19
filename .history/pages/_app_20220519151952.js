import React,{useEffect, useState} from "react"
import '../styles/styles.css'
import GlobalStyle from '../styles/global'
import Head from 'next/head'
import { ThemeProvider } from 'styled-components'
import { SoloTheme } from '../styles/Theme'
import { AnimatePresence } from 'framer-motion'
import { useRouter } from "next/router"
import { LoadingScreen } from "./subComponents/LoadingScreen"
import Music from "../subComponents/m"
import Nav from "./subComponents/Nav"
import { device } from "./subComponents/device"


function Loading () {
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  useEffect(() => {
    const handleStart = (url) => (url !== router.asPath) && setLoading(true);
 
    const handleComplete =  (url) => (url === router.asPath) && setLoading(false);
   
 
    
   router.events.on('routeChangeStart', handleStart)
   router.events.on('routeChangeComplete', handleComplete)
   router.events.on('routeChangeError', handleComplete)
 
   return () => {
     router.events.off('routeChangeStart', handleStart)
     router.events.off('routeChangeComplete', handleComplete)
     router.events.off('routeChangeError', handleComplete)
   }
})
return loading &&  (<LoadingScreen/>)
}
  

function MyApp({ Component, pageProps, router }) {
  const [showComponents, setShowComponents] = useState(true);
  useEffect(() => {
      if(window.matchMedia(`${device.nav}`).matches) {
          setShowComponents(false)
      } else {
          setShowComponents(true)
      }
  }, [])
  return <>

  <Head>
  <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
  <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
  <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
  <link rel="manifest" href="/site.webmanifest"/>
  <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5"/>
  <meta name="msapplication-TileColor" content="#da532c"/>
  <meta name="theme-color" content="#ffffff"/>
 <meta charSet='UTF-8'/>
  </Head>
  <GlobalStyle />
  <AnimatePresence exitBeforeEnter>
  <ThemeProvider theme = {SoloTheme}>
 {showComponents ? <Nav/> : null}
  <Music/>
  <Loading/>
  <Component {...pageProps} key={router.route}/>
  </ThemeProvider>
  </AnimatePresence>
  
  </>
}

export default MyApp
