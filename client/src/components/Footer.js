import React from 'react'

const Footer = () => {
  return (
    <div className='bg-footer'>
      <div className='container'>
        <footer>
          <p className='text-center'>
            <em>
              There's a lot of good cafe in Southern Jakarta. I love coffee!
              maybe we can get in touch. Instagram message work best!
            </em>
          </p>
          <div className='center'>
            <button className='btn btn-secondary btn-footer'>
              Back To Top
            </button>
          </div>
          <div className='footer-link'>
            <div>
              <a href='/'>
                <i className='fa fa-instagram footer-link-logo'>&nbsp;</i>
                <span className='footer-link-text'>Instagram</span>
              </a>
            </div>
            <div>
              <a href='/'>
                <i className='fa fa-facebook footer-link-logo'>&nbsp;</i>
                <span className='footer-link-text'>Facebook</span>
              </a>
            </div>
            <div>
              <a href='/'>
                <i className='fa fa-github footer-link-logo'>&nbsp;</i>
                <span className='footer-link-text'>Github</span>
              </a>
            </div>
            <div>
              <a href='/'>
                <i className='fa fa-linkedin footer-link-logo'>&nbsp;</i>
                <span className='footer-link-text'>Linkedin</span>
              </a>
            </div>
          </div>
          <p className='copyright text-center'>
            Copyright &copy; 2021 Tritera Erlangga. All Rights Reserved
          </p>
        </footer>
      </div>
    </div>
  )
}

export default Footer