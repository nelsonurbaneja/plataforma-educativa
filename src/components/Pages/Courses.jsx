import React, {useEffect} from 'react'
import Banner from '../Organisms/Banner'
import { connect } from 'react-redux'
import store from '../../redux/store'
import { getAllCourses } from '../../redux/actionCreators'
import Card from '../Organisms/Card'

const Courses = ( {match, courses} ) => {

  useEffect( () => {
    store.dispatch(getAllCourses())
  }, [match])

  return (
    <>
      <Banner
        color="dark-color"
        imagen={
          {
            src: "https://concepto.de/wp-content/uploads/2014/08/programacion-2-e1551291144973.jpg",
            alt: "Banner Cursos"
          }
        }
        title="Nuestros Cursos"
        subtitle="Comienza desde cero hoy mismo en tu comina a dominar la tecnologia"
      />
    {
      courses && 
      <main className="ed-grid s-grid-2 m-grid-4">
        {
          courses.map( course => (
            <Card key={ course.id }
              picture={ course.picture }
              name={ course.name }
              cardID={course.id}
              path="cursos"
            />
          )) 
        }
      </main>
    }
    </>
  )
}

const mapStateToProps = state => ({
  courses: state.courseReducer.courses
})
export default connect(mapStateToProps, {})(Courses)
