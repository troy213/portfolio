import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'

const Navbar = (props) => {
  const [menuVisible, setMenuVisible] = useState(false)
  const [size, setSize] = useState(window.innerWidth)
  const [y, setY] = useState(window.pageYOffset)

  const getSize = () => {
    setSize(window.innerWidth)
  }

  const getY = () => {
    setY(window.pageYOffset)
  }

  const changeTheme = () => {
    if (props.theme === 'light') {
      props.onSetTheme('dark')
      document.querySelector('#app').className = 'dark'
      document.querySelectorAll('.contact-input').forEach((value) => {
        value.style.background = 'rgba(168, 180, 243, 0.3)'
        value.style.color = 'whitesmoke'
      })
      document.querySelector('.blob-dark').style.opacity = '1'
      document.querySelector('.blob-light').style.opacity = '0'
    } else {
      props.onSetTheme('light')
      document.querySelector('#app').className = 'light'
      document.querySelectorAll('.contact-input').forEach((value) => {
        value.style.background = 'rgba(168, 180, 243, 0.15)'
        value.style.color = '#333'
      })
      document.querySelector('.blob-dark').style.opacity = '0'
      document.querySelector('.blob-light').style.opacity = '1'
    }
  }

  useEffect(() => {
    window.addEventListener('resize', getSize)
    window.addEventListener('scroll', getY)

    if (size > 650) {
      setMenuVisible(false)
    }

    const header = document.querySelector('header')
    const navWrapper = document.querySelector('.nav-wrapper')
    const navText = document.querySelectorAll('.nav-text')
    const navMenu = document.querySelector('.nav-menu')

    if (menuVisible) {
      navMenu.classList.add('nav-menu-visible')
      header.classList.add('sticky')
    } else {
      navMenu.classList.remove('nav-menu-visible')
      header.classList.remove('sticky')
    }

    if (y > header.offsetHeight || menuVisible) {
      header.classList.add('sticky')
      if (props.theme === 'light') {
        navWrapper.style.background = 'white'
        if (menuVisible) {
          navWrapper.style.borderBottom = 'none'
        } else {
          navWrapper.style.borderBottom = '1px solid #ddd'
        }
        navMenu.style.background = 'white'
        navMenu.style.borderBottom = '1px solid #ddd'
        document.querySelectorAll('.nav-menu-item p').forEach((value) => {
          value.style.color = '#333'
        })
        navText.forEach((value) => {
          value.style.color = '#333'
        })
      } else {
        navWrapper.style.background = '#333'
        if (menuVisible) {
          navWrapper.style.borderBottom = 'none'
        } else {
          navWrapper.style.borderBottom = '1px solid #555'
        }
        navMenu.style.background = '#333'
        navMenu.style.borderBottom = '1px solid #555'
        document.querySelectorAll('.nav-menu-item p').forEach((value) => {
          value.style.color = 'whitesmoke'
        })
        navText.forEach((value) => {
          value.style.color = 'whitesmoke'
        })
      }
    } else {
      navWrapper.style.background = 'none'
      navWrapper.style.borderBottom = 'none'
      header.classList.remove('sticky')
      navText.forEach((value) => {
        value.style.color = 'whitesmoke'
      })
    }

    return () => {
      window.removeEventListener('scroll', getY)
      window.removeEventListener('resize', getSize)
    }
  }, [y, size, menuVisible, props.theme])

  return (
    <header>
      <div className='nav-wrapper'>
        <div className='container-nav'>
          <div className='logo'>
            <a href='/'>
              <p className='nav-text'>Portfolio</p>
            </a>
          </div>
          <nav>
            <ul>
              <li className='responsive-li'>
                <a href='#home' className='nav-text'>
                  Home
                </a>
              </li>
              <li className='responsive-li'>
                <a href='#about' className='nav-text'>
                  About
                </a>
              </li>
              <li className='responsive-li'>
                <a href='#experiences' className='nav-text'>
                  Experience
                </a>
              </li>
              <li className='responsive-li'>
                <a href='#projects' className='nav-text'>
                  Projects
                </a>
              </li>
              <li className='responsive-li'>
                <a href='#contact' className='nav-text'>
                  Contact
                </a>
              </li>
              <li>
                <button className='btn-theme' onClick={changeTheme}>
                  {props.theme === 'light' ? (
                    <i className='fa fa-moon-o nav-text'></i>
                  ) : (
                    <i className='fa fa-sun-o nav-text'></i>
                  )}
                </button>
              </li>
              <li className='responsive-bars'>
                <button
                  className='btn-bars'
                  onClick={() => setMenuVisible(!menuVisible)}
                >
                  <i className='fa fa-bars nav-text'></i>
                </button>
              </li>
            </ul>
          </nav>
        </div>
      </div>
      <div className='relative'>
        <div className='nav-menu'>
          <div className='nav-menu-container'>
            <div className='nav-menu-item'>
              <a href='#home'>
                <i className='fa fa-home'></i>
                <p>Home</p>
              </a>
            </div>
            <div className='nav-menu-item'>
              <a href='#about'>
                <i className='fa fa-user'></i>
                <p>About</p>
              </a>
            </div>
            <div className='nav-menu-item'>
              <a href='#experiences'>
                <i className='fa fa-graduation-cap'></i>
                <p>Experiences</p>
              </a>
            </div>
            <div className='nav-menu-item'>
              <a href='#skills'>
                <i className='fa fa-flask'></i>
                <p>Skills</p>
              </a>
            </div>
            <div className='nav-menu-item'>
              <a href='#projects'>
                <i className='fa fa-cogs'></i>
                <p>Projects</p>
              </a>
            </div>
            <div className='nav-menu-item'>
              <a href='#contact'>
                <i className='fa fa-phone'></i>
                <p>Contact</p>
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

const mapStateToProps = (state) => {
  return state
}

const mapDispatchToProps = (dispatch) => {
  return {
    onSetTheme: (value) => {
      const action = { type: 'SET_THEME', payload: value }
      dispatch(action)
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Navbar)
