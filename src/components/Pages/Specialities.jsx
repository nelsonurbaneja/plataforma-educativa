import React, {useEffect} from 'react'
import Banner from '../Organisms/Banner'
import { connect } from 'react-redux'
import store from '../../redux/store'
import { getAllSpecialities } from '../../redux/actionCreators'
import Card from '../Organisms/Card'

const Specialities = ({match, specialities}) => {

  useEffect( () => {
    store.dispatch(getAllSpecialities())
  }, [match])

  return (
    <>
    <Banner 
      color="first-color"
      imagen={
        {
          src: "https://pixabay.com/get/57e8d64a4e52aa14f6da8c7dda793678143cdbed5a546c48702773dd9e4fc351b8_1280.jpg",
          alt: "Banner Especialidades"
        }
      }
      title="Especilidades"
      subtitle="Domina una tecnologia con las rutas de aprendizaje que te ofrecemos"
    />
    {
      specialities &&
      <main className="ed-grid s-grid-2 m-grid-4">
        {
          specialities.map( speciality => (
            <Card key={ speciality.id }
              picture={ speciality.picture }
              name={ speciality.name }
              cardID={speciality.id}
              path="especialidades"
            />
          )) 
        }
      </main>
    }
    </>
  )
}

const mapStateToProps = state => ({
  specialities: state.specialityReducer.specialities
})
export default connect(mapStateToProps, {})(Specialities)
