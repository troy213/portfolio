import React from 'react'
import { connect } from 'react-redux'

const SkillsInfo = (props) => {
  const test = () => {
    props.onChangeModalValue(props.desc.split(';'))
    document.getElementById('modal').style.display = 'block'
  }

  return (
    <div className='skills-item'>
      <p>
        {props.title}
        {props.desc ? (
          <>
            &nbsp;
            <i
              className='fa fa-question-circle-o skills-detail bluish'
              onClick={test}
            ></i>
          </>
        ) : (
          <></>
        )}
      </p>
      <div className='progress-bar'>
        {Number(props.value.substr(0, props.value.length - 1)) > 98 ? (
          <div
            className='progress-bar-value-max'
            style={{ width: props.value }}
          >
            <p className='text-white text-center mp-0'>{props.value}</p>
          </div>
        ) : (
          <div className='progress-bar-value' style={{ width: props.value }}>
            <p className='text-white text-center mp-0'>{props.value}</p>
          </div>
        )}
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
