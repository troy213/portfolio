import React from 'react'

const Contact = () => {
  return (
    <section className='bg-contact'>
      <div className='container'>
        <div className='contact'>
          <h2 className='text-center bluish'>Contact</h2>
          <div className='center'>
            <div className='grid-container'>
              <label htmlFor='contact-name'>Name</label>
              <input type='text' id='contact-name' />
              <label htmlFor='contact-email'>Email</label>
              <input type='text' id='contact-email' />
              <label htmlFor='contact-message'>Message</label>
              <textarea
                name='contact-message'
                id='contact-message'
                cols='30'
                rows='10'
              ></textarea>
            </div>
          </div>

          <div className='center'>
            <button className='btn btn-primary btn-contact'>Send</button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
