import React, {useEffect} from 'react'
import { connect } from 'react-redux'
import store from '../../redux/store'
import { getCourse } from '../../redux/actionCreators'
import Banner from '../Organisms/Banner'

const Course = ({ match, course }) => {

  useEffect(() => {
    store.dispatch(getCourse(1))
  }, [match])

  return (
    <>
      {
        course &&
        <>
        <Banner 
          color="dark-color"
          poster={course.picture}
          imagen={{src: course.picture, alt: course.name}}
          title={course.name}
          subtitle={course.subtitle}
          courseBanner
          information={course.information}
          especalidad={course.data.specialities[0].name}
        />
        <main className="ed-grid l-grid-10">
          <div className="l-cols-7">

            <div className="course-features ed-grid l-grid-3 s-border s-pxy-2 l-pxy-4 s-radius s-bg-white l-block l-section s-shadow-bottom">
              <div>
                <h3 className="t4">¿Qué aprenderás?</h3>
                <ul dangerouslySetInnerHTML={{__html: course.you_learn}} />
              </div>
              <div>
                <h3 className="t4">Conocimientos previos</h3>
                <ul dangerouslySetInnerHTML={{__html: course.requirements}} />
              </div>
              <div>
                <h3 className="t4">Nivel</h3>
                <ul dangerouslySetInnerHTML={{__html: course.level}} />
              </div>
            </div>
            <h2>Temario del curso</h2>
            <div className="s-border s-pxy-2 l-pxy-4 s-radius s-bg-white l-block l-section s-shadow-bottom">
              {
                course.data.classes.map(cl => (
                  <div className="l-section" key={cl.class.id}>
                    <h3 className="s-mb-0">{cl.class.title}</h3>
                    <p>{cl.class.description}</p>
                    <ul>
                      {
                        cl.subjects.map(s => (
                          <li>{s.subject.title}</li>
                        ))
                      }
                    </ul>
                  </div>
                ))
              }
            </div>
          </div>
          <div className="l-cols-3">
            <h2 className="t3">Profesor</h2>
            <p>Beto Quiroja</p>
          </div>
        </main>
        </>
      }
    </>
  )
}

const mapStateToProps = state => ({
  course: state.courseReducer.course
})
export default connect(mapStateToProps, {})(Course)
