import React from 'react'
import Navbar from './Navbar'
import blob from '../assets/blob.svg'

const Hero = () => {
  return (
    <section className='bg-hero'>
      <div className='container'>
        <Navbar />
        <div className='hero'>
          <div className='hero-info'>
            <div className='hero-info-desc'>
              <h1 className='hero-info-title bluish'>
                Hi, I'm Tritera Erlangga
              </h1>
              <h2 className='hero-info-subtitle bluish'>
                Junior Web Developer
              </h2>
              <p>
                just a man who pursuing his dream as a professional programmer,
                graduated from Budi Luhur University with bachelor degree in
                Computer Science on 2018.
              </p>
              <div className='center'>
                <button className='btn btn-primary btn-hero'>Contact</button>
              </div>
            </div>
            <div className='hero-info-blob center'>
              <img src={blob} alt='blob' className='blob' />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
