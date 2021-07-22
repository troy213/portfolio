import React, { useState } from 'react'
import useFetch from '../hooks/useFetch'

const computer = '/skills/computer'
const other = '/skills/other'
const language = '/skills/language'

const Skills = () => {
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

  if (dataComputer.isLoading) {
    return <h1 className='text-center'>Loading...</h1>
  }

  if (dataComputer.isError) {
    return <h1 className='text-center'>Error...</h1>
  }

  return (
    <section className='bg-skills' id='skills'>
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

          <button
            className='dropdown bluish'
            onClick={() => handleChevron('computer')}
          >
            <p className='dropdown-title'>Computer Skills</p>
            <i className='fa fa-chevron-up' id='skills-computer'></i>
          </button>
          {computerVisible === true ? (
            <>
              {dataComputer.data.map((res) => {
                const { id_skills, title, value } = res
                return (
                  <SkillsInfo key={id_skills} title={title} value={value} />
                )
              })}
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
              {dataOther.data.map((res) => {
                const { id_skills, title, value } = res
                return (
                  <SkillsInfo key={id_skills} title={title} value={value} />
                )
              })}
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
              {dataLanguage.data.map((res) => {
                const { id_skills, title, value } = res
                return (
                  <SkillsInfo key={id_skills} title={title} value={value} />
                )
              })}
            </>
          ) : (
            <></>
          )}
        </div>
      </div>
    </section>
  )
}

const SkillsInfo = (props) => {
  return (
    <div className='skills-item'>
      <p>{props.title}</p>
      <div className='progress-bar'>
        <div className='progress-bar-value' style={{ width: props.value }}>
          <p className='text-white text-center mp-0'>{props.value}</p>
        </div>
      </div>
    </div>
  )
}

export default Skills
