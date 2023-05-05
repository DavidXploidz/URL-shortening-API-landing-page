import React from 'react'
import '../styles/hero.css'


export default function Hero() {
  return (
    <div className='contenedor hero'>
        <div>
            <h1 className='hero__title'>More than just <span className='hero__title--span'>shorter links</span></h1>
            <p className='hero__text'>
                Build your brand’s recognition and get detailed 
                <span className='hero__text--span'>
                    insights on how your links are performing.
                </span> 
            </p>
            <div>
                <button className='btn-primary'>Get Started</button>
            </div>
        </div>
        <div>
            <img src="/images/illustration-working.svg" alt="hero image working" />
        </div>
    </div>
  )
}
