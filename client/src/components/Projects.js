import React from 'react'
import projectBlob from '../assets/projects.svg'
import marketImg from '../assets/market.png'
import ongkirImg from '../assets/ongkir.png'

const Projects = () => {
  return (
    <section className='bg-projects section' id='projects'>
      <div className='container'>
        <div className='projects'>
          <div className='img-center'>
            <img
              src={projectBlob}
              alt='projects-blob'
              className='secondary-blob'
            />
          </div>

          <h2 className='text-center bluish'>Projects</h2>
          <p className='text-center'>
            Here, I will put all of my upcoming projects like blogs, computer
            science stuff, and many more!
          </p>
          <hr />
          <div className='projects-card'>
            <a
              href='https://market.triteraerlangga.com'
              className='projects-card-item'
              target='_blank'
              rel='noopener noreferrer'
            >
              <div className='projects-card-img-wrapper'>
                <img
                  src={marketImg}
                  alt='market'
                  className='projects-card-img'
                />
              </div>
              <div className='projects-card-desc'>
                <h3>E-Commerce</h3>
                <p>
                  A fully functioning RESTful e-commerce website project with
                  ReactJS, NodeJS, MySQL, JWT Authentication, and BCrypt hashing
                  algorithm for storing passwords.
                </p>
              </div>
            </a>
            <a
              href='https://app.triteraerlangga.com'
              className='projects-card-item'
              target='_blank'
              rel='noopener noreferrer'
            >
              <div className='projects-card-img-wrapper'>
                <img
                  src={ongkirImg}
                  alt='ongkir'
                  className='projects-card-img'
                />
              </div>
              <div className='projects-card-desc'>
                <h3>3rd Party API Web App</h3>
                <p>
                  A simple website using external API to check delivery cost
                  estimation from some courier services.
                </p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Projects
