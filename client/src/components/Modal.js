import React from 'react'
import ReactDOM from 'react-dom'

const Modal = ({ open, children, onClose, theme }) => {
  const handleModal = (e) => {
    if (e.target.id === 'modal') {
      onClose()
    }
  }

  if (!open) {
    return null
  }

  return ReactDOM.createPortal(
    <div className='modal' id='modal' onClick={handleModal}>
      <div className={`modal-container ${theme === 'dark' && 'modal-dark'}`}>
        <span className='modal-close' onClick={onClose}>
          &times;
        </span>
        {children}
      </div>
    </div>,
    document.getElementById('portal')
  )
}

export default Modal
