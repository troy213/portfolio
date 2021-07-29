import React from 'react'
import { connect } from 'react-redux'

const Projects = (props) => {
  const test = () => {
    props.onChangeModalValue('Coming Soon!')
    document.getElementById('modal').style.display = 'block'
  }

  return (
    <section className='bg-projects' id='projects'>
      <div className='container'>
        <div className='projects'>
          <h2 className='text-center bluish'>Projects</h2>
          <p className='text-center'>
            Here, I will put all of my upcoming projects like blogs, computer
            science stuff, and many more!
          </p>
          <hr />
          <div className='projects-card'>
            <div className='projects-card-item' onClick={test}></div>
            <div className='projects-card-item' onClick={test}></div>
            <div className='projects-card-item' onClick={test}></div>
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

export default connect(mapStateToProps, mapDispatchToProps)(Projects)
