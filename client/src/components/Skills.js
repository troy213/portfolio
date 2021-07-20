import React from 'react'

const Skills = () => {
  return (
    <section className='bg-skills'>
      <div className='container'>
        <div className='skills'>
          <h2 className='text-center bluish'>Skills</h2>
          <p className='quote text-center'>
            <em>
              "The interaction of knowledge and skills with experience is key to
              learning"
              <br />
              John Dewey - (Random Quotes on Internet)
            </em>
          </p>
          <hr />
          <button className='dropdown bluish'>
            <p className='dropdown-title'>Computer Skills</p>
            <i className='fa fa-chevron-down'></i>
          </button>
          <div className='skills-item'>
            <p>HTML</p>
            <div className='progress-bar'>
              <div className='progress-bar-value'></div>
            </div>
          </div>
          <div className='skills-item'>
            <p>CSS</p>
            <div className='progress-bar'>
              <div className='progress-bar-value'></div>
            </div>
          </div>
          <div className='skills-item'>
            <p>Javascript</p>
            <div className='progress-bar'>
              <div className='progress-bar-value'></div>
            </div>
          </div>
          <div className='skills-item'>
            <p>PHP</p>
            <div className='progress-bar'>
              <div className='progress-bar-value'></div>
            </div>
          </div>
          <div className='skills-item'>
            <p>Java</p>
            <div className='progress-bar'>
              <div className='progress-bar-value'></div>
            </div>
          </div>
          <button className='dropdown bluish'>
            <p className='dropdown-title'>Other</p>
            <i className='fa fa-chevron-down'></i>
          </button>
          <div className='skills-item'>
            <p>Microsoft Office</p>
            <div className='progress-bar'>
              <div className='progress-bar-value'></div>
            </div>
          </div>
          <div className='skills-item'>
            <p>Adobe</p>
            <div className='progress-bar'>
              <div className='progress-bar-value'></div>
            </div>
          </div>
          <div className='skills-item'>
            <p>Macro Toolworks</p>
            <div className='progress-bar'>
              <div className='progress-bar-value'></div>
            </div>
          </div>
          <button className='dropdown bluish'>
            <p className='dropdown-title'>Languages</p>
            <i className='fa fa-chevron-down'></i>
          </button>
          <div className='skills-item'>
            <p>Indonesia</p>
            <div className='progress-bar'>
              <div className='progress-bar-value'></div>
            </div>
          </div>
          <div className='skills-item'>
            <p>English</p>
            <div className='progress-bar'>
              <div className='progress-bar-value'></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills
