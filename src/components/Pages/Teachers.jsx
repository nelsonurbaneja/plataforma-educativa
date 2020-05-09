import React, { useEffect } from 'react'
import Banner from '../Organisms/Banner'
import { getAllTeachers } from '../../redux/actionCreators'
import store from '../../redux/store'
import { connect } from 'react-redux'
import Teacher from '../Organisms/Teacher'

const Teachers = ( {match, teachers} ) => {

  useEffect( () => {
    store.dispatch(getAllTeachers())
  }, [match])

  return (
    <>
      <Banner 
        color="third-color"
        imagen={ 
          {
            src: "https://pixabay.com/get/57e2d54a4c56ac14f6da8c7dda793678143cdbed5a546c48702773dd9f4acc51bf_1280.jpg", 
            alt: "Imagen del banner" 
          } 
        }
        title="Nuestros profesores"
        subtitle="Este plantel docente son expoertos en react"
      />
      {
        teachers && 
        <main className="ed-grid s-grid-2 m-grid-3 lg-grid-4 row-gap">
          {
            teachers.map(teacher => (
              <Teacher key={teacher.id} teacher={teacher}/>
            ))
          }
      </main>
      }
    </>
  )
}

const mapStateToProps = state => ({
  teachers: state.teacherReducer.teachers
})

export default connect(mapStateToProps, {})(Teachers)
