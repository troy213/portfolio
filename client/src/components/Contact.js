import React, { useState } from 'react'
import axios from 'axios'

const Contact = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  const sendData = (e) => {
    if (name && email && message) {
      axios
        .post('/message', {
          name: name,
          email: email,
          message: message,
        })
        .catch((err) => console.log(err))
    } else {
      e.preventDefault()
      alert('Please fill the blank!')
    }
  }

  return (
    <section className='bg-contact' id='contact'>
      <div className='container'>
        <div className='contact'>
          <h2 className='text-center bluish'>Contact</h2>
          <div className='center'>
            <div className='grid-container'>
              <label htmlFor='contact-name'>
                <i className='fa fa-user'>&nbsp;</i>Name
              </label>
              <input
                type='text'
                className='contact-input'
                name='name'
                id='contact-name'
                onChange={(e) => setName(e.target.value)}
                value={name}
                required
              />
              <label htmlFor='contact-email'>
                <i className='fa fa-envelope'>&nbsp;</i>Email
              </label>
              <input
                type='email'
                className='contact-input'
                name='email'
                id='contact-email'
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                required
              />
              <label htmlFor='contact-message'>
                <i className='fa fa-comment'>&nbsp;</i>Message
              </label>
              <textarea
                name='message'
                className='contact-input'
                id='contact-message'
                cols='30'
                rows='10'
                onChange={(e) => setMessage(e.target.value)}
                value={message}
                required
              ></textarea>
              <button
                className='btn btn-primary btn-contact'
                onClick={sendData}
              >
                Send
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
