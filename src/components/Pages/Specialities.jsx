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
          src: "https://dev-res.thumbr.io/libraries/14/04/09/lib/1533172648445_1.jpg",
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
