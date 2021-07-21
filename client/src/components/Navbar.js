import React from 'react'

const Navbar = () => {
  return (
    <header>
      <div className='container-nav'>
        <h2 className='logo'>Portfolio</h2>
        <nav>
          <ul>
            <li>
              <a href='/'>Home</a>
            </li>
            <li>
              <a href='#about'>About</a>
            </li>
            <li>
              <a href='#experiences'>Experience</a>
            </li>
            <li>
              <a href='#projects'>Projects</a>
            </li>
            <li>
              <a href='#contact'>Contact</a>
            </li>
            <li>
              <a href='/'>
                <i className='fa fa-moon-o'></i>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Navbar
