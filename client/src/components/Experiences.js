import React, { useState } from 'react'
import useFetch from '../hooks/useFetch'
import expBlob from '../assets/experiences.svg'

const educations =
  'https://tritera-erlangga-api.herokuapp.com/experiences/Educations'
const careers = 'https://tritera-erlangga-api.herokuapp.com/experiences/Careers'

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

  return (
    <section className='bg-experiences' id='experiences'>
      <div className='container'>
        <div className='img-center'>
          <img
            src={expBlob}
            alt='experiences-blob'
            className='secondary-blob'
          />
        </div>

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
            {dataEducations.isLoading ? (
              <Skeleton />
            ) : dataEducations.isError ? (
              <p>Error fetching from the server...</p>
            ) : (
              dataEducations.data.map((value) => {
                const {
                  id_exp,
                  title,
                  year,
                  desc_title,
                  description,
                  location,
                } = value
                return (
                  <ExpInfo
                    key={id_exp}
                    title={title}
                    year={year}
                    descTitle={desc_title}
                    description={description}
                    location={location}
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
            {dataCareers.isLoading ? (
              <Skeleton />
            ) : dataCareers.isError ? (
              <p>Error fetching from the server...</p>
            ) : (
              dataCareers.data.map((value) => {
                const {
                  id_exp,
                  title,
                  year,
                  desc_title,
                  description,
                  location,
                } = value
                return (
                  <ExpInfo
                    key={id_exp}
                    title={title}
                    year={year}
                    descTitle={desc_title}
                    description={description}
                    location={location}
                  />
                )
              })
            )}
          </>
        ) : (
          <></>
        )}
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
      <div className='experiences-desc'>
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

const Skeleton = () => {
  return (
    <div className='experiences-info'>
      <div className='experiences-main exp-skeleton-main'>
        <div className='experiences-main-title exp-skeleton-main-title'></div>
      </div>
      <div className='experiences-desc exp-skeleton-desc'>
        <div className='text-justify exp-skeleton-desc-text'></div>
        <div className='text-justify exp-skeleton-desc-text'></div>
        <div className='text-justify exp-skeleton-desc-text'></div>
      </div>
    </div>
  )
}

export default Experiences
