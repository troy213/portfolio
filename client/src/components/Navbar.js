import React from 'react'

const Navbar = () => {
  return (
    <header>
      <div className='container-nav'>
        <h2 className='title'>Portfolio</h2>
        <nav>
          <ul>
            <li>
              <a href='/'>Home</a>
            </li>
            <li>
              <a href='/'>About</a>
            </li>
            <li>
              <a href='/'>Experience</a>
            </li>
            <li>
              <a href='/'>Projects</a>
            </li>
            <li>
              <a href='/'>Contact</a>
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
