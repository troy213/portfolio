import React from 'react'

const Experiences = () => {
  return (
    <section className='bg-experiences'>
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
          <button className='dropdown bluish'>
            <p className='dropdown-title'>
              <i className='fa fa-book'>&nbsp;</i>Educations
            </p>
            <i className='fa fa-chevron-down'></i>
          </button>
          <div className='experiences-info'>
            <div className='experiences-main'>
              <p className='experiences-main-title'>Niomic</p>
              <p className='experiences-main-year'>
                <em>2019 - current</em>
              </p>
            </div>
            <div>
              <p className='experiences-desc-title'>Online Coding Bootcamp</p>
              <p className='text-justify'>
                The lesson mainly focuses on web programming, even though I
                already have the basics of web programming on campus, I need to
                keep learning and practice more, and surely, many things that I
                didn't learn on campus found here like AWS, GCP, Golang,
                Chatbot, and I always believe learning from many sources are the
                best way to improve your knowledge..
              </p>
              <p className='experiences-desc-location'>
                <em>
                  <i className='fa fa-map-marker'></i> Online
                </em>
              </p>
            </div>
          </div>
          <div className='experiences-info'>
            <div className='experiences-main'>
              <p className='experiences-main-title'>Budiluhur University</p>
              <p className='experiences-main-year'>
                <em>Sep 2014 - Mar 2018</em>
              </p>
            </div>
            <div>
              <p className='experiences-desc-title'>
                Bachelor (S1) - Computer Science
              </p>
              <p className='text-justify'>
                My study was mainly focused on Java-based programming, and my
                first program was a simple encryption desktop application using
                a Caesar cipher algorithm. Using the same principle, I learned
                how to implement AES-256 encryption for database security in my
                thesis.
              </p>
              <p className='experiences-desc-location'>
                <em>
                  <i className='fa fa-map-marker'></i> South Jakarta
                </em>
              </p>
            </div>
          </div>
          <div className='experiences-info'>
            <div className='experiences-main'>
              <p className='experiences-main-title'>SMAN 9 Tangerang Selatan</p>
              <p className='experiences-main-year'>
                <em>2010 - 2013</em>
              </p>
            </div>
            <div>
              <p className='experiences-desc-title'>Science Major</p>
              <p className='text-justify'>
                I built my first PC and learned how to make a blog using CMS
                when i was in Junior High School. Since then, I have loved a
                computer-based lesson.
              </p>
              <p className='experiences-desc-location'>
                <em>
                  <i className='fa fa-map-marker'></i> South Tangerang
                </em>
              </p>
            </div>
          </div>
          <button className='dropdown bluish'>
            <p className='dropdown-title'>
              <i className='fa fa-briefcase'>&nbsp;</i>Career
            </p>
            <i className='fa fa-chevron-down'></i>
          </button>
          <div className='experiences-info'>
            <div className='experiences-main'>
              <p className='experiences-main-title'>ICT</p>
              <p className='experiences-main-year'>
                <em>2014 - current</em>
              </p>
            </div>
            <div>
              <p className='experiences-desc-title'>Office Administrator</p>
              <p className='text-justify'>
                Working on one of the biggest diecast online auctioneers based
                on social media in Indonesia. I work as an Office Administrator
                who responsible for data distribution, store paperwork,
                documents, computer-based information and submit monthly final
                sales reports.
              </p>
              <p className='experiences-desc-location'>
                <em>
                  <i className='fa fa-map-marker'></i> South Tangerang
                </em>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experiences
