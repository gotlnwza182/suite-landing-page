import React from 'react'
import './Footer.css'

export default function Footer() {
  return (
    <footer>
        <img className='logo' src='./assets/logo.svg' alt='logo'/>
        <p>Copyright - Denpong Khetpong</p>
        <div className='social-icon'>
            <img className='icon' src='./assets/icon-facebook.svg' alt='icon facebook'/>
            <img className='icon' src='./assets/icon-instagram.svg' alt='icon instagram'/>
            <img className='icon' src='./assets/icon-twitter.svg' alt='icon twitter'/>
        </div>
        <div className='footer-background'></div>
    </footer>
  )
}
