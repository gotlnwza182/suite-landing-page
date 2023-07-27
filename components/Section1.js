import React from 'react'
import './Section1.css'

export default function Section1() {
  return (
    <div className='section-1'>
        <section>
            <h1>A <b>super solution </b>for your <b>business</b>.</h1>
            <p>Our marketing and sales automations help you scale your outreach to get more leads for your company.</p>
            <button className='btn-primary'>Request Beta Access</button>
        </section>
        <aside>
            <div className='aside-text'>
                <h2>2K+</h2>
                <p>COMPANIES</p>
            </div>
            <div className='aside-text'>
                <h2>8</h2>
                <p>LANGUAGES</p>
            </div>
            <div className='aside-text'>
                <h2>1.2M</h2>
                <p>LEADS</p>
            </div>      
        </aside>
        <img className='hero-portrait' src='./assets/image-hero-portrait.png' alt='hero portrait'/>
        <img className='hero-landscape' src='./assets/image-hero-landscape.png' alt='hero landscape'/>
        <img className='curved-line-1' src='./assets/pattern-curved-line-1.svg' alt='curved line 1'/>
    </div> 
  )
}
