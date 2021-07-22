import React, { useState } from 'react'
import useFetch from '../hooks/useFetch'

const educations = '/experiences/Educations'
const careers = '/experiences/Careers'

const Experiences = () => {
  const [educationsVisible, setEducationsVisible] = useState(true)
  const [careersVisible, setCareersVisible] = useState(true)

  const dataEducations = useFetch(educations)
  const dataCareers = useFetch(careers)

  const handleChevron = (value) => {
    if (value === 'educations') {
      setEducationsVisible(!educationsVisible)
      const expEduChevron = document.getElementById('exp-educations-chevron')
      if (educationsVisible) {
        expEduChevron.className = 'fa fa-chevron-down'
      } else {
        expEduChevron.className = 'fa fa-chevron-up'
      }
    } else if (value === 'careers') {
      setCareersVisible(!careersVisible)
      const expCarChevron = document.getElementById('exp-careers-chevron')
      if (careersVisible) {
        expCarChevron.className = 'fa fa-chevron-down'
      } else {
        expCarChevron.className = 'fa fa-chevron-up'
      }
    }
  }

  if (dataEducations.isLoading) {
    return <h1 className='text-center'>Loading...</h1>
  }
  if (dataEducations.isError) {
    return <h1 className='text-center'>Error...</h1>
  }

  return (
    <section className='bg-experiences' id='experiences'>
      <div className='container'>
        <div className='experiences'>
          <h2 className='text-center bluish'>Experiences</h2>
          <p className='text-center'>
            <em>
              "The single most powerful asset we all have is our mind. if it is
              trained well, it can create enormous wealth in what seems to be an
              instant."
              <br />
              Robert T. Kiyosaki - Rich Dad Poor Dad
            </em>
          </p>
          <hr />
          <button
            className='dropdown bluish'
            onClick={() => handleChevron('educations')}
          >
            <p className='dropdown-title'>
              <i className='fa fa-book'>&nbsp;</i>Educations
            </p>
            <i className='fa fa-chevron-up' id='exp-educations-chevron'></i>
          </button>
          {educationsVisible === true ? (
            <>
              {dataEducations.data.map((value) => {
                const {
                  id_exp,
                  title,
                  year,
                  descTitle,
                  description,
                  location,
                } = value
                return (
                  <ExpInfo
                    key={id_exp}
                    title={title}
                    year={year}
                    descTitle={descTitle}
                    description={description}
                    location={location}
                  />
                )
              })}
            </>
          ) : (
            <></>
          )}
          <button
            className='dropdown bluish'
            onClick={() => handleChevron('careers')}
          >
            <p className='dropdown-title'>
              <i className='fa fa-briefcase'>&nbsp;</i>
              Careers
            </p>
            <i className='fa fa-chevron-up' id='exp-careers-chevron'></i>
          </button>
          {careersVisible === true ? (
            <>
              {dataCareers.data.map((value) => {
                const {
                  id_exp,
                  title,
                  year,
                  descTitle,
                  description,
                  location,
                } = value
                return (
                  <ExpInfo
                    key={id_exp}
                    title={title}
                    year={year}
                    descTitle={descTitle}
                    description={description}
                    location={location}
                  />
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

const ExpInfo = (props) => {
  return (
    <div className='experiences-info'>
      <div className='experiences-main'>
        <p className='experiences-main-title'>{props.title}</p>
        <p className='experiences-main-year'>
          <em>{props.year}</em>
        </p>
      </div>
      <div>
        <p className='experiences-desc-title'>{props.descTitle}</p>
        <p className='text-justify'>{props.description}</p>
        <p className='experiences-desc-location'>
          <em>
            <i className='fa fa-map-marker'>&nbsp;</i>
            {props.location}
          </em>
        </p>
      </div>
    </div>
  )
}

export default Experiences
