import React,{useState,useEffect} from 'react'
import { useRouter } from 'next/router'
import { SoloTheme } from '../styles/Theme'
import { About, Envelope, PowerBtn, Skills, Work } from './AllSvgs'
import Styles from '../styles/Nav.module.css'
import Link from 'next/link'


const Nav = (props) => {
  const router = useRouter()
    const [activeTabs, setActiveTabs] = useState(props.name)
    useEffect(() => {
        switch (activeTabs) {
            case 'main':
                router.push('/MainPage')
                break;
            case 'skills':
                router.push('/MySkillsPage')
                break;
            case 'work':
                router.push('/WorkPage')
                break;
            case 'about':
                router.push('/AboutPage')
                break;
            case 'contact':
                router.push('mailto:kasemablackgmail.com')
                break;
            default:
                router.push('/MainPage')
                break;
        }
    }, [activeTabs, router])
  return (
    <nav className={`${Styles.navbar}`}>
   {activeTabs === 'main' ? <Link href='/MainPage' passHref><a className={`${Styles.active}`}  onClick={() => setActiveTabs('/MainPage')}><PowerBtn width={12} height={12} fill={SoloTheme.text}/> </a></Link> : <Link href='/MainPage'><a onClick={() => setActiveTabs('/MainPage')}><PowerBtn width={12} height={12} fill={SoloTheme.text}/> </a></Link>}
   {activeTabs === 'skills' ? <Link href='/MySkillsPage'passHref><a className={`${Styles.active}`}  onClick={() => setActiveTabs('/MySkillsPage')}><Skills width={12} height={12} fill={SoloTheme.text}/> </a></Link> :<Link href='/MySkillsPage'><a  onClick={() => setActiveTabs('/MySkillsPage')}><Skills width={12} height={12} fill={SoloTheme.text}/> </a></Link>}
   {activeTabs === 'work' ? <Link href='/WorkPage' passHref><a className={`${Styles.active}`} onClick={() => setActiveTabs('/WorkPage')}><Work width={12} height={12} fill={SoloTheme.text}/> </a></Link> : <Link href='/WorkPage'><a onClick={() => setActiveTabs('/WorkPage')}><Work width={12} height={12} fill={SoloTheme.text}/> </a></Link>}
   {activeTabs === '/AboutPage' ? <Link href='/AboutPage' passHref><a className={`${Styles.active}`} onClick={() => setActiveTabs('/AboutPage')}><About width={12} height={12} fill={SoloTheme.text}/></a></Link> : <Link href='/AboutPage'><a onClick={() => setActiveTabs('/AboutPage')}><About width={12} height={12} fill={SoloTheme.text}/> </a></Link>}    
   {activeTabs === '/Contact' ? <a href='mailto:kasemablackgmail.com' target= "_blank" rel='noreferrer' className={`${Styles.active}`} onClick={() => setActiveTabs('/404')}><Envelope width={12} height={12} fill={SoloTheme.text}/> </a> : <a href='mailto:kasemablackgmail.com' target= "_blank" rel='noreferrer' onClick={() => setActiveTabs('/404')}><Envelope width={12} height={12} fill={SoloTheme.text}/> </a>}    
   </nav>
  )
}

export default Nav

