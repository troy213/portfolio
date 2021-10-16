import React, { useState } from 'react'
import SkillsInfo from './SkillsInfo'
import skillBlob from '../assets/skills.svg'
import { connect } from 'react-redux'

const Skills = (props) => {
  const [computerVisible, setComputerVisible] = useState(true)
  const [otherVisible, setOtherVisible] = useState(true)
  const [languageVisible, setLanguageVisible] = useState(true)

  const handleChevron = (value) => {
    if (value === 'computer') {
      setComputerVisible(!computerVisible)
      const computerChevron = document.getElementById('skills-computer')
      if (computerVisible) {
        computerChevron.className = 'fa fa-chevron-down'
      } else {
        computerChevron.className = 'fa fa-chevron-up'
      }
    } else if (value === 'other') {
      setOtherVisible(!otherVisible)
      const otherChevron = document.getElementById('skills-other')
      if (otherVisible) {
        otherChevron.className = 'fa fa-chevron-down'
      } else {
        otherChevron.className = 'fa fa-chevron-up'
      }
    } else if (value === 'language') {
      setLanguageVisible(!languageVisible)
      const languageChevron = document.getElementById('skills-language')
      if (languageVisible) {
        languageChevron.className = 'fa fa-chevron-down'
      } else {
        languageChevron.className = 'fa fa-chevron-up'
      }
    }
  }

  return (
    <section className='bg-skills' id='skills'>
      <div className='container section'>
        <div className='skills'>
          <div className='img-center'>
            <img src={skillBlob} alt='skill-blob' className='secondary-blob' />
          </div>

          <h2 className='text-center bluish'>Skills</h2>
          <p className='text-center'>
            <em className='quotes'>
              "The interaction of knowledge and skills with experience is key to
              learning"
              <br />
              John Dewey - (Random Quotes on Internet)
            </em>
          </p>
          <hr />

          <div className='skills-card'>
            <button
              className='dropdown bluish'
              onClick={() => handleChevron('computer')}
            >
              <p className='dropdown-title'>Computer Skills</p>
              <i className='fa fa-chevron-up' id='skills-computer'></i>
            </button>
            {computerVisible && (
              <>
                {props.isLoading ? (
                  <Skeleton />
                ) : props.isError ? (
                  <p>Error fetching from the server...</p>
                ) : (
                  props.data.skills
                    .filter((value) => value.type === 'Computer')
                    .map((res) => {
                      const { id_skills, title, value, description } = res
                      return (
                        <SkillsInfo
                          store={props.store}
                          key={id_skills}
                          title={title}
                          value={value}
                          desc={description}
                        />
                      )
                    })
                )}
              </>
            )}
          </div>

          <div className='skills-card'>
            <button
              className='dropdown bluish'
              onClick={() => handleChevron('other')}
            >
              <p className='dropdown-title'>Other</p>
              <i className='fa fa-chevron-up' id='skills-other'></i>
            </button>
            {otherVisible && (
              <>
                {props.isLoading ? (
                  <Skeleton />
                ) : props.isError ? (
                  <p>Error fetching from the server...</p>
                ) : (
                  props.data.skills
                    .filter((value) => value.type === 'Other')
                    .map((res) => {
                      const { id_skills, title, value, description } = res
                      return (
                        <SkillsInfo
                          store={props.store}
                          key={id_skills}
                          title={title}
                          value={value}
                          desc={description}
                        />
                      )
                    })
                )}
              </>
            )}
          </div>

          <div className='skills-card'>
            <button
              className='dropdown bluish'
              onClick={() => handleChevron('language')}
            >
              <p className='dropdown-title'>Languages</p>
              <i className='fa fa-chevron-up' id='skills-language'></i>
            </button>
            {languageVisible && (
              <>
                {props.isLoading ? (
                  <Skeleton />
                ) : props.isError ? (
                  <p>Error fetching from the server...</p>
                ) : (
                  props.data.skills
                    .filter((value) => value.type === 'Language')
                    .map((res) => {
                      const { id_skills, title, value, description } = res
                      return (
                        <SkillsInfo
                          store={props.store}
                          key={id_skills}
                          title={title}
                          value={value}
                          desc={description}
                        />
                      )
                    })
                )}
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

const Skeleton = () => {
  return (
    <div className='skills-item'>
      <div className='skills-skeleton-name'></div>
      <div className='skills-skeleton-bar'></div>
    </div>
  )
}

const mapStateToProps = (state) => {
  return state
}

export default connect(mapStateToProps)(Skills)
