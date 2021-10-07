import React from 'react'
import avatar from '../assets/Hero.jpg'
import cv from '../assets/CV-Tritera-Erlangga.pdf'

const About = () => {
  const dob = new Date('10/28/1995').getTime()
  const now = new Date().getTime()
  const age = Math.floor((now - dob) / (1000 * 60 * 60 * 24 * 365))

  return (
    <section className='bg-about section' id='about'>
      <div className='container'>
        <div className='about'>
          <h2 className='text-center bluish'>About Me</h2>
          <h3 className='text-center bluish-2'>
            <em>I'm a Junior Web Developer</em>
          </h3>
          <p className='text-justify'>
            I love traveling, acoustic, photography and coffee. I graduated with
            a Computer Science Degree and had an interest in Web Development
            which offers me the opportunity to develop new skills while
            strengthening those I already possess. And with more than 7 years of
            working experience as an Office Administrator had enabled me to
            develop good organizational skills. able to work under pressure and
            easily adapting to any working environment.
          </p>
          <hr />
          <div className='about-info'>
            <img src={avatar} alt='about-img' className='about-avatar' />
            <div className='about-info-details'>
              <div className='center'>
                <h3 className='bluish'>Details</h3>
              </div>
              <p>
                <i className='fa fa-user bluish'>&nbsp;</i>Name: Tritera
                Erlangga
              </p>
              <p>
                <i className='fa fa-calendar bluish'>&nbsp;</i>Age: {age} Years
              </p>
              <p>
                <i className='fa fa-map-marker bluish'>&nbsp;</i>Location:
                Pamulang, South Tangerang, Banten, Indonesia
              </p>
            </div>
          </div>
          <hr />
          <p className='text-justify'>
            I have an upcoming project on this website like put my Youtube
            video, my travel footage and implement all of "Computer Science"
            stuff like Encryption, Hashing, Compression and many more. We can
            have a little chit chat and having some coffee if you want! if you
            consider to support my website, you can click on the link below!
          </p>
          <div className='about-button'>
            <a href={cv} download>
              <button className='btn btn-primary'>
                Download CV <i className='fa fa-download'></i>
              </button>
            </a>
            <a
              href='https://www.paypal.me/triteraerlangga'
              target='_blank'
              rel='noreferrer noopener'
            >
              <button className='btn btn-secondary'>Donate</button>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
