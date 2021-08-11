import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'

const Modal = (props) => {
  const [modal, setModal] = useState(null)

  useEffect(() => {
    setModal(document.getElementById('modal'))
  }, [])

  const handleModal = (e) => {
    if (e.target === modal) {
      closeModal()
    }
  }

  const closeModal = () => {
    modal.style.display = 'none'
  }

  return (
    <div className='modal' id='modal' onClick={handleModal}>
      <div className='modal-content'>
        <span className='close text-black' onClick={closeModal}>
          &times;
        </span>
        <div className='modal-value text-black'>
          {typeof props.modalValue === 'object' ? (
            <div>
              <h3 className='text-center'>What I've Learned</h3>
              <ul>
                {props.modalValue.map((value, index) => {
                  return <li key={index}>{value}</li>
                })}
              </ul>
            </div>
          ) : (
            <p>{props.modalValue}</p>
          )}
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = (state) => {
  return state
}

const mapDispatchToProps = (dispatch) => {
  return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(Modal)
