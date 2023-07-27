import React from 'react'
import "./Heading.css"

export default function Heading() {
  return (
    <nav>
        <img src='./assets/logo.svg' alt='logo'/>
        <button className='btn-secondary'>Request Beta Access</button>
    </nav>
  )
}
