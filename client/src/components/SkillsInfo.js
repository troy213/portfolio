import React, { useState } from 'react'
import Modal from './Modal'
import { connect } from 'react-redux'

const SkillsInfo = (props) => {
  const [isOpen, setIsOpen] = useState(false)
  const test = () => {
    props.onChangeModalValue(props.desc.split(';'))
    setIsOpen(true)
  }

  return (
    <div className='skills-item'>
      <Modal open={isOpen} onClose={() => setIsOpen(false)} theme={props.theme}>
        <div
          className={`modal-value ${props.theme === 'dark' && 'modal-dark'}`}
        >
          {typeof props.modalValue === 'object' && (
            <div>
              <p className='modal-title text-center'>What I've Learned</p>
              <ul>
                {props.modalValue.map((value, index) => {
                  return <li key={index}>{value}</li>
                })}
              </ul>
            </div>
          )}
        </div>
      </Modal>
      <p>
        {props.title}
        {props.desc && (
          <>
            &nbsp;
            <i
              className='fa fa-question-circle-o skills-detail bluish'
              onClick={test}
            ></i>
          </>
        )}
      </p>
      <div className='progress-bar'>
        <div className='progress-bar-value' style={{ width: props.value }}>
          <p className='text-white text-center mp-0'>{props.value}</p>
        </div>
      </div>
    </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(SkillsInfo)
