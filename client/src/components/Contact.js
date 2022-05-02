import React, { useState } from 'react'
import { connect } from 'react-redux'
import Modal from './Modal'
import axios from 'axios'
import ReCAPTCHA from 'react-google-recaptcha'

const Contact = (props) => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [isOpen, setIsOpen] = useState(false)
  const [btnDisabled, setBtnDisabled] = useState(false)
  const [captchaValue, setCaptchaValue] = useState('')
  const recaptchaRef = React.createRef()

  const onChange = (value) => {
    setCaptchaValue(value)
  }

  const validateEmail = (email) => {
    const regex =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    return regex.test(String(email).toLowerCase())
  }

  const sendData = (e) => {
    e.preventDefault()
    setBtnDisabled(true)
    const recaptchaValue = recaptchaRef.current.getValue()

    if (recaptchaValue === captchaValue && captchaValue !== '') {
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
            .post('https://tritera-erlangga-api.herokuapp.com/message', {
              name: name,
              email: email,
              message: message,
            })
            .then(() => {
              props.onChangeModalValue('Message has been sent successfully!')
              setBtnDisabled(false)
              setIsOpen(true)
            })
            .catch((err) => {
              props.onChangeModalValue('Something went wrong :(')
              setBtnDisabled(false)
              setIsOpen(true)
              console.log(err)
            })
        } else {
          props.onChangeModalValue('Your E-mail address is invalid')
          setBtnDisabled(false)
          setIsOpen(true)
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
        setBtnDisabled(false)
        setIsOpen(true)
      }
    } else {
      props.onChangeModalValue('Please verify that you are a human')
      setBtnDisabled(false)
      setIsOpen(true)
    }
  }

  return (
    <section className='bg-contact' id='contact'>
      <Modal open={isOpen} onClose={() => setIsOpen(false)} theme={props.theme}>
        <div className='modal-message-container'>
          <p
            className={`modal-message ${
              props.theme === 'dark' && 'modal-dark'
            }`}
          >
            {props.modalValue}
          </p>
        </div>
      </Modal>
      <div className='container'>
        <div className='contact'>
          <h2 className='text-center bluish'>Contact</h2>
          <div className='w-90 max-width-600'>
            <form className='flex-container' onSubmit={sendData}>
              <div className='form-input'>
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
              </div>
              <div className='form-input'>
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
              </div>
              <div className='form-input'>
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
              </div>
              <div className='flex-center'>
                <div>
                  <button
                    className='btn btn-primary btn-contact'
                    type='submit'
                    disabled={btnDisabled ? true : false}
                  >
                    Send
                  </button>
                </div>
                <ReCAPTCHA
                  ref={recaptchaRef}
                  sitekey='6LdjAdEeAAAAAHDrPBFm0kHTZElbG9Qxk5l91HaD'
                  onChange={onChange}
                  className='recaptcha'
                />
              </div>
            </form>
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
