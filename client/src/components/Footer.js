import React from 'react'

const Footer = () => {
  return (
    <section className='bg-footer'>
      <div className='container'>
        <footer>
          <p className='text-center text-white'>
            <em className='quotes'>
              There's a lot of good cafe in Southern Jakarta. I love coffee!
              maybe we can get in touch. Instagram message work best!
            </em>
          </p>
          <div className='center'>
            <a href='#home'>
              <button className='btn btn-secondary btn-footer'>
                Back To Top
              </button>
            </a>
          </div>
          <div className='footer-link'>
            <div>
              <a
                href='https://www.instagram.com/tritera.erlangga/'
                target='_blank'
                rel='noreferrer noopener'
              >
                <i className='fa fa-instagram footer-link-logo'>&nbsp;</i>
                <span className='footer-link-text'>Instagram</span>
              </a>
            </div>
            <div>
              <a
                href='https://www.facebook.com/dev.triteraerlangga/'
                target='_blank'
                rel='noreferrer noopener'
              >
                <i className='fa fa-facebook footer-link-logo'>&nbsp;</i>
                <span className='footer-link-text'>Facebook</span>
              </a>
            </div>
            <div>
              <a
                href='https://github.com/troy213'
                target='_blank'
                rel='noreferrer noopener'
              >
                <i className='fa fa-github footer-link-logo'>&nbsp;</i>
                <span className='footer-link-text'>Github</span>
              </a>
            </div>
            <div>
              <a
                href='https://www.linkedin.com/in/tritera-erlangga-0ab7b5183/'
                target='_blank'
                rel='noreferrer noopener'
              >
                <i className='fa fa-linkedin footer-link-logo'>&nbsp;</i>
                <span className='footer-link-text'>Linkedin</span>
              </a>
            </div>
          </div>
          <p className='copyright text-center text-white'>
            Copyright &copy; 2021 Tritera Erlangga. All Rights Reserved
          </p>
        </footer>
      </div>
    </section>
  )
}

export default Footer
