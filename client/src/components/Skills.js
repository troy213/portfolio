import React from 'react'

const Skills = () => {
  return (
    <div className='bg-skills'>
      <div className='container'>
        <div className='skills'>
          <h2 className='text-center'>Skills</h2>
          <p className='quote text-center'>
            <em>
              "The interaction of knowledge and skills with experience is key to
              learning"
              <br />
              John Dewey - (Random Quotes on Internet)
            </em>
          </p>
          <hr />
          <h3>Computer Skills</h3>
          <div className='skills-item'>
            <p>HTML</p>
            <div className='progress-bar'></div>
          </div>
          <div className='skills-item'>
            <p>CSS</p>
            <div className='progress-bar'></div>
          </div>
          <div className='skills-item'>
            <p>Javascript</p>
            <div className='progress-bar'></div>
          </div>
          <div className='skills-item'>
            <p>PHP</p>
            <div className='progress-bar'></div>
          </div>
          <div className='skills-item'>
            <p>Java</p>
            <div className='progress-bar'></div>
          </div>
          <h3>Other</h3>
          <div className='skills-item'>
            <p>Microsoft Office</p>
            <div className='progress-bar'></div>
          </div>
          <div className='skills-item'>
            <p>Adobe</p>
            <div className='progress-bar'></div>
          </div>
          <div className='skills-item'>
            <p>Macro Toolworks</p>
            <div className='progress-bar'></div>
          </div>
          <h3>Languages</h3>
          <div className='skills-item'>
            <p>Indonesia</p>
            <div className='progress-bar'></div>
          </div>
          <div className='skills-item'>
            <p>English</p>
            <div className='progress-bar'></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Skills
