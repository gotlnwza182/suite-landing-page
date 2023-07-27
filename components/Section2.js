import React from 'react'
import './Section2.css'

export default function Section2() {
  return (
    <div className='section-2'>
        <img className='jeremy-large' src='./assets/image-jeremy-large.png' alt='jeremy large'/>
        <img className='pattern-curved-2' src='./assets/pattern-curved-line-2.svg' alt='pattern curved 2'/>
        <img className='pattern-blur' src='./assets/pattern-blur.svg' alt='pattern blur'/>
        <div className='quote'>
            <h2>It just <b>works</b>.</h2>
            <p>“I really like how it is an all-in-one solution that handle many of the tasks that you would normally need separate tools to do the same job. This thing is a miracle worker.”</p>
            <p className='upper-case'><b>Jeremy Robinson</b><br/> CMO, Fylo</p>
        </div>
    </div>
  )
}
