import React,{useState,useEffect} from 'react'
import { useRouter } from 'next/router'
import { SoloTheme } from '../../styles/Theme'
import { About, Envelope, PowerBtn, Skills, Work } from './AllSvgs'
import styled from 'styled-components'
import Styles from '../../styles/Nav.module.css'
import Link from 'next/link'


const Nav = () => {
  const router = useRouter()
    const [activeTabs, setActiveTabs] = useState('/MainPage')
    useEffect(() => {
        switch (activeTabs) {
            case '/MainPage':
                router.push('/MainPage')
                break;
            case '/MySkillsPage':
                router.push('/MySkillsPage')
                break;
            case '/WorkPage':
                router.push('/WorkPage')
                break;
            case '/AboutPage':
                router.push('/AboutPage')
                break;
            case '/Contact':
                router.push('mailto:kasemablackgmail.com')
                break;
            default:
                router.push('/MainPage')
                break;
        }
    }, [activeTabs, router])
  return (
    <nav className={`${Styles.navbar}`}>
   {activeTabs === '/MainPage' ? <Link href='/MainPage'><a className={`${Styles.active}`}  onClick={() => setActiveTabs('/MainPage')}><PowerBtn width={12} height={12} fill={SoloTheme.text}/> </a></Link> : <Link href='/MainPage'><a onClick={() => setActiveTabs('/MainPage')}><PowerBtn width={12} height={12} fill={SoloTheme.text}/> </a></Link>}
   {activeTabs === '/MySkillsPage' ? <Link href='/MySkillsPage'><a className={`${Styles.active}`}  onClick={() => setActiveTabs('/MySkillsPage')}><Skills width={12} height={12} fill={SoloTheme.text}/> </a></Link> :<Link href='/MySkillsPage'><a  onClick={() => setActiveTabs('/MySkillsPage')}><Skills width={12} height={12} fill={SoloTheme.text}/> </a></Link>}
   {activeTabs === '/WorkPage' ? <Link href='/WorkPage'><a className={`${Styles.active}`} onClick={() => setActiveTabs('/WorkPage')}><Work width={12} height={12} fill={SoloTheme.text}/> </a></Link> : <Link href='/WorkPage'><a onClick={() => setActiveTabs('/WorkPage')}><Work width={12} height={12} fill={SoloTheme.text}/> </a></Link>}
   {activeTabs === '/AboutPage' ? <Link href='/AboutPage' ><a className={`${Styles.active}`} onClick={() => setActiveTabs('/AboutPage')}><About width={12} height={12} fill={SoloTheme.text}/></a></Link> : <Link href='/AboutPage'><a onClick={() => setActiveTabs('/AboutPage')}><About width={12} height={12} fill={SoloTheme.text}/> </a></Link>}    
   {activeTabs === '/Contact' ? <a href='mailto:kasemablackgmail.com' target= "_blank" className={`${Styles.active}`} onClick={() => setActiveTabs('/404')}><Envelope width={12} height={12} fill={SoloTheme.text}/> </a> : <a href='mailto:kasemablackgmail.com' target= "_blank" onClick={() => setActiveTabs('/404')}><Envelope width={12} height={12} fill={SoloTheme.text}/> </a>}    
   </nav>
  )
}

export default Nav

