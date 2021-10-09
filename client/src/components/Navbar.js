import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'

const Navbar = (props) => {
  const [menuVisible, setMenuVisible] = useState(false)
  const [theme, setTheme] = useState('light')
  const [size, setSize] = useState(window.innerWidth)
  const [y, setY] = useState(window.pageYOffset)

  const getSize = () => {
    setSize(window.innerWidth)
  }

  const getY = () => {
    setY(window.pageYOffset)
  }

  const changeTheme = () => {
    props.onChangeTheme(theme)
    if (theme === 'light') {
      setTheme('dark')
      document.querySelector('#app').className = 'dark'
      document.querySelector('#toggler').className = 'fa fa-sun-o'
      document.querySelectorAll('.contact-input').forEach((value) => {
        value.style.color = 'whitesmoke'
      })
    } else {
      setTheme('light')
      document.querySelector('#app').className = 'home'
      document.querySelector('#toggler').className = 'fa fa-moon-o'
      document.querySelectorAll('.contact-input').forEach((value) => {
        value.style.color = '#333'
      })
    }
  }

  useEffect(() => {
    window.addEventListener('resize', getSize)
    window.addEventListener('scroll', getY)

    if (size > 650) {
      setMenuVisible(false)
    }

    if (theme === 'light') {
      if (
        menuVisible ||
        window.pageYOffset > document.getElementById('header').offsetTop
      ) {
        document.getElementById('header').style.background = '#fff'
        document.getElementById('header').style.borderBottom = '1px solid #ddd'
        document.querySelectorAll('.logo p, li a, li i').forEach((value) => {
          value.style.color = '#333'
        })
      } else {
        document.getElementById('header').style.background = 'none'
        document.getElementById('header').style.borderBottom = 'none'
        document.querySelectorAll('.logo p, li a, li i').forEach((value) => {
          value.style.color = 'whitesmoke'
        })
      }
    } else {
      if (
        menuVisible ||
        window.pageYOffset > document.getElementById('header').offsetTop
      ) {
        document.getElementById('header').style.background = '#333'
        document.getElementById('header').style.borderBottom = '1px solid #555'
        document.querySelectorAll('.logo p, li a, li i').forEach((value) => {
          value.style.color = 'whitesmoke'
        })
      } else {
        document.getElementById('header').style.background = 'none'
        document.getElementById('header').style.borderBottom = 'none'
        document.querySelectorAll('.logo p, li a, li i').forEach((value) => {
          value.style.color = 'whitesmoke'
        })
      }
    }

    return () => {
      window.removeEventListener('scroll', getY)
      window.removeEventListener('resize', getSize)
    }
  }, [size, y, theme, menuVisible])

  return (
    <header id='header'>
      <div className='container-nav'>
        <div className='logo'>
          <a href='/'>
            <p>Portfolio</p>
          </a>
        </div>
        <nav>
          <ul>
            <li className='responsive-li'>
              <a href='#home'>Home</a>
            </li>
            <li className='responsive-li'>
              <a href='#about'>About</a>
            </li>
            <li className='responsive-li'>
              <a href='#experiences'>Experience</a>
            </li>
            <li className='responsive-li'>
              <a href='#projects'>Projects</a>
            </li>
            <li className='responsive-li'>
              <a href='#contact'>Contact</a>
            </li>
            <li>
              <button className='btn-theme' onClick={changeTheme}>
                <i className='fa fa-moon-o' id='toggler'></i>
              </button>
            </li>
            <li className='responsive-bars'>
              <button
                className='btn-bars'
                onClick={() => setMenuVisible(!menuVisible)}
              >
                <i className='fa fa-bars'></i>
              </button>
            </li>
          </ul>
        </nav>
      </div>
      {menuVisible === true && size < 651 ? (
        <div
          className={
            theme === 'dark'
              ? 'nav-menu dark border-bottom-dark'
              : 'nav-menu border-bottom-light'
          }
          id='nav-menu'
        >
          <div className='nav-menu-container'>
            <div className='nav-menu-item'>
              <a href='#home'>
                <i className='fa fa-home'></i>
                <p className={theme === 'dark' ? 'text-white' : ''}>Home</p>
              </a>
            </div>
            <div className='nav-menu-item'>
              <a href='#about'>
                <i className='fa fa-user'></i>
                <p className={theme === 'dark' ? 'text-white' : ''}>About</p>
              </a>
            </div>
            <div className='nav-menu-item'>
              <a href='#experiences'>
                <i className='fa fa-graduation-cap'></i>
                <p className={theme === 'dark' ? 'text-white' : ''}>
                  Experiences
                </p>
              </a>
            </div>
            <div className='nav-menu-item'>
              <a href='#skills'>
                <i className='fa fa-flask'></i>
                <p className={theme === 'dark' ? 'text-white' : ''}>Skills</p>
              </a>
            </div>
            <div className='nav-menu-item'>
              <a href='#projects'>
                <i className='fa fa-cogs'></i>
                <p className={theme === 'dark' ? 'text-white' : ''}>Projects</p>
              </a>
            </div>
            <div className='nav-menu-item'>
              <a href='#contact'>
                <i className='fa fa-phone'></i>
                <p className={theme === 'dark' ? 'text-white' : ''}>Contact</p>
              </a>
            </div>
          </div>
        </div>
      ) : (
        <></>
      )}
    </header>
  )
}

const mapStateToProps = (state) => {
  return state
}

const mapDispatchToProps = (dispatch) => {
  return {
    onChangeTheme: (value) => {
      const action = { type: 'SET_THEME', payload: value }
      dispatch(action)
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Navbar)
