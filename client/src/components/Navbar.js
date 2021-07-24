import React, { useState, useEffect } from 'react'

const Navbar = () => {
  const [menuVisible, setMenuVisible] = useState(false)
  const [theme, setTheme] = useState('light')
  const [size, setSize] = useState(window.innerWidth)

  const getSize = () => {
    setSize(window.innerWidth)
  }

  const changeTheme = () => {
    if (theme === 'light') {
      setTheme('dark')
      document.querySelector('#app').className = 'dark'
      document.querySelector('#home').className = 'bg-hero bg-dark'
      document.querySelector('#toggler').className = 'fa fa-sun-o'
    } else {
      setTheme('light')
      document.querySelector('#app').className = 'home'
      document.querySelector('#home').className = 'bg-hero bg-light'
      document.querySelector('#toggler').className = 'fa fa-moon-o'
    }
  }

  useEffect(() => {
    window.addEventListener('resize', getSize)
  }, [])

  return (
    <header>
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
      {menuVisible === true && size < 721 ? (
        <div className='nav-menu' style={{ width: { size } }}>
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
      ) : (
        <></>
      )}
    </header>
  )
}

export default Navbar
