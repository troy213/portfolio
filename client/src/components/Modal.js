import React, { useState, useEffect } from 'react'

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
        <span className='close' onClick={closeModal}>
          &times;
        </span>
        <div className='modal-value'>
          <p>{props.value}</p>
        </div>
      </div>
    </div>
  )
}

export default Modal
