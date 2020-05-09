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
            src: "https://pixabay.com/get/51e8d0444e50b108f5d084609629317f163ad6ec564c704c7d2772dd954bcc58_1280.jpg",
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
