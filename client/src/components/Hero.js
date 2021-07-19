import React from 'react'
import Navbar from './Navbar'
import blob from '../assets/blob.svg'

const Hero = () => {
  return (
    <div className='bg-hero'>
      <div className='container'>
        <Navbar />
        <div className='hero'>
          <div className='hero-info'>
            <div className='hero-info-desc'>
              <h1 className='hero-info-title'>Hi, I'm Tritera Erlangga</h1>
              <h2 className='hero-info-subtitle'>Junior Web Developer</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
                rerum sit voluptatem, eos temporibus corrupti, quaerat veritatis
                veniam iusto deleniti modi ducimus possimus aliquid, nisi velit
                assumenda sunt! Nisi, rem.
              </p>
              <div className='center'>
                <button className='btn btn-primary btn-hero'>Contact</button>
              </div>
            </div>
            <div className='hero-info-blob'>
              <img src={blob} alt='blob' className='blob' />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
