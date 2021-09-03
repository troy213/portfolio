import React, { useState } from 'react'
import useFetch from '../hooks/useFetch'
import SkillsInfo from './SkillsInfo'
import skillBlob from '../assets/skills.svg'

const computer = 'https://tritera-erlangga-api.herokuapp.com/skills/computer'
const other = 'https://tritera-erlangga-api.herokuapp.com/skills/other'
const language = 'https://tritera-erlangga-api.herokuapp.com/skills/language'

const Skills = (props) => {
  const [computerVisible, setComputerVisible] = useState(true)
  const [otherVisible, setOtherVisible] = useState(true)
  const [languageVisible, setLanguageVisible] = useState(true)

  const dataComputer = useFetch(computer)
  const dataOther = useFetch(other)
  const dataLanguage = useFetch(language)

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
      <div className='container'>
        <div className='skills'>
          <div className='img-center'>
            <img src={skillBlob} alt='skill-blob' className='secondary-blob' />
          </div>

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

          <button
            className='dropdown bluish'
            onClick={() => handleChevron('computer')}
          >
            <p className='dropdown-title'>Computer Skills</p>
            <i className='fa fa-chevron-up' id='skills-computer'></i>
          </button>
          {computerVisible === true ? (
            <>
              {dataComputer.isLoading ? (
                <Skeleton />
              ) : dataComputer.isError ? (
                <p>Error fetching from the server...</p>
              ) : (
                dataComputer.data.map((res) => {
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
          ) : (
            <></>
          )}

          <button
            className='dropdown bluish'
            onClick={() => handleChevron('other')}
          >
            <p className='dropdown-title'>Other</p>
            <i className='fa fa-chevron-up' id='skills-other'></i>
          </button>
          {otherVisible === true ? (
            <>
              {dataOther.isLoading ? (
                <Skeleton />
              ) : dataOther.isError ? (
                <p>Error fetching from the server...</p>
              ) : (
                dataOther.data.map((res) => {
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
          ) : (
            <></>
          )}

          <button
            className='dropdown bluish'
            onClick={() => handleChevron('language')}
          >
            <p className='dropdown-title'>Languages</p>
            <i className='fa fa-chevron-up' id='skills-language'></i>
          </button>
          {languageVisible === true ? (
            <>
              {dataLanguage.isLoading ? (
                <Skeleton />
              ) : dataLanguage.isError ? (
                <p>Error fetching from the server...</p>
              ) : (
                dataLanguage.data.map((res) => {
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
          ) : (
            <></>
          )}
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

export default Skills
