import React from 'react'
import { connect } from 'react-redux'
import blobLight from '../assets/blob-light.svg'
import blobDark from '../assets/blob-dark.svg'

const Hero = (props) => {
  return (
    <section className='bg-hero bg-light' id='home'>
      <div className='container'>
        <div className='hero-info'>
          <div className='hero-info-desc'>
            <h1 className='hero-info-title text-white'>
              Hi, I'm Tritera Erlangga
            </h1>
            <h2 className='hero-info-subtitle text-white'>
              Junior Web Developer
            </h2>
            <p className='text-white'>
              just a man who pursuing his dream as a professional programmer,
              graduated from Budi Luhur University with bachelor degree in
              Computer Science on 2018.
            </p>
            <div className='center'>
              <a href='#contact'>
                <button className='btn btn-secondary btn-hero'>Contact</button>
              </a>
            </div>
          </div>
          <div className='hero-info-blob center'></div>
        </div>
      </div>
      <div className='center'>
        {props.theme === 'light' ? (
          <img src={blobLight} alt='blob' className='blob' />
        ) : (
          <img src={blobDark} alt='blob' className='blob' />
        )}
      </div>
    </section>
  )
}

const mapStateToProps = (state) => {
  return state
}

const mapDispatchToProps = (dispatch) => {
  return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(Hero)
