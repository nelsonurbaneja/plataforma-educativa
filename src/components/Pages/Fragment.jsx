import React, {useEffect} from 'react'
import Vimeo from '@u-wave/react-vimeo';
import store from '../../redux/store'
import { getCourse, getFragment } from '../../redux/actionCreators'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const Fragment = ({frangment, course}) => {

  useEffect(() => {
    store.dispatch(getCourse(1))
    store.dispatch(getFragment(123))
  },[])

  return (
    <div className="class-page-container background dark-color s-pxy-4">
      {
        (frangment && course) &&
        <div className="ed-grid l-grid-12">
          <div className="l-cols-8">
            <div className="">
              <Vimeo
                video={frangment.video}
                width={780}
              />
            </div>
            <h1 className="t3 color light-color s-mb-0">{frangment.name}</h1>
            <span className="color light-color">{course.name}</span>
          </div>
          <div className="l-cols-4">
            <div>
              <h2 className="t3 color light-color">Temario del curso</h2>
              {
                course.data.classes.map(cl => (
                  <div className="l-section" key={cl.class.id}>
                    <h3 className="s-mb-0 color light-color">{cl.class.title}</h3>
                    <ul className="data-list">
                      {
                        cl.subjects.map(s => (
                          <li key={s.subject.id}><Link to={`/clase/${s.subject.id}`} className="color light-color">{s.subject.title}</Link></li>
                        ))
                      }
                    </ul>
                  </div>
                ))
              }
            </div>
          </div>
        </div>
      }
    </div>
  )
}

const mapStateToProps = state => ({
  frangment: state.frangmentReducer.frangment,
  course: state.courseReducer.course
})
export default connect(mapStateToProps, {})(Fragment)
