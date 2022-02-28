import React from 'react'
import { connect } from 'react-redux'
import blobLight from '../assets/blob-light.svg'
import blobDark from '../assets/blob-dark.svg'

const Hero = (props) => {
  return (
    <section className='bg-hero' id='home'>
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
              <a href='#contact' className='btn btn-secondary btn-hero'>
                Contact
              </a>
            </div>
          </div>
          <div className='hero-info-link'>
            <a
              href='https://www.facebook.com/dev.triteraerlangga/'
              target='_blank'
              rel='noreferrer noopener'
            >
              <i className='fa fa-facebook'></i>
            </a>
            <a
              href='https://www.instagram.com/tritera.erlangga/'
              target='_blank'
              rel='noreferrer noopener'
            >
              <i className='fa fa-instagram'></i>
            </a>
            <a
              href='https://github.com/troy213'
              target='_blank'
              rel='noreferrer noopener'
            >
              <i className='fa fa-github'></i>
            </a>
            <a
              href='https://www.linkedin.com/in/tritera-erlangga-0ab7b5183/'
              target='_blank'
              rel='noreferrer noopener'
            >
              <i className='fa fa-linkedin'></i>
            </a>
          </div>
        </div>
      </div>
      <div className='center'>
        <img src={blobLight} alt='blob' className='blob blob-light' />
        <img src={blobDark} alt='blob' className='blob blob-dark' />
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
