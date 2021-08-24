import React, { useState } from 'react'
import { connect } from 'react-redux'
import axios from 'axios'

const Contact = (props) => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  const validateEmail = (email) => {
    const regex =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    return regex.test(String(email).toLowerCase())
  }

  const sendData = () => {
    if (name && email && message) {
      document.querySelectorAll('.contact-input').forEach((value) => {
        if (value.value === '') {
          value.className = 'contact-input danger'
        } else {
          value.className = 'contact-input'
        }
      })

      if (validateEmail(email)) {
        axios
          .post('https://api.triteraerlangga.com/message', {
            name: name,
            email: email,
            message: message,
          })
          .then(() => {
            props.onChangeModalValue('Message has been sent successfully!')
            document.getElementById('modal').style.display = 'block'
          })
          .catch(() => {
            props.onChangeModalValue('Something went wrong :(')
            document.getElementById('modal').style.display = 'block'
          })
      } else {
        props.onChangeModalValue('Your E-mail address is invalid')
        document.getElementById('modal').style.display = 'block'
      }
    } else {
      document.querySelectorAll('.contact-input').forEach((value) => {
        if (value.value === '') {
          value.className = 'contact-input danger'
        } else {
          value.className = 'contact-input'
        }
      })
      props.onChangeModalValue('Please fill the blank')
      document.getElementById('modal').style.display = 'block'
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
                maxLength='50'
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
                maxLength='50'
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
                maxLength='1023'
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

const mapStateToProps = (state) => {
  return state
}

const mapDispatchToProps = (dispatch) => {
  return {
    onChangeModalValue: (value) => {
      const action = { type: 'CHANGE_MODAL_VALUE', payload: value }
      dispatch(action)
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Contact)
