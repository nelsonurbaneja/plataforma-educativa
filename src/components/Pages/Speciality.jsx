import React, {useEffect} from 'react'
import { connect } from 'react-redux'
import store from '../../redux/store'
import { getSpeciality } from '../../redux/actionCreators'
import Banner from '../Organisms/Banner'

const Speciality = ({speciality}) => {

  useEffect( () => (
    store.dispatch(getSpeciality(1))
  ))

  return (
    <>
    {
      speciality &&
      <>
        <Banner
          color="dark-color"
          poster={speciality.data.picture}
          imagen={{src: speciality.data.picture, alt: speciality.name}}
          title={speciality.data.name}
          subtitle={speciality.data.subtitle}
          courseBanner
          information={speciality.data.information}
        />
        <main className="ed-grid l-grid-10">
          <div className="l-cols-7">
            <div className="course-features ed-grid l-grid-3 s-border s-pxy-2 l-pxy-4 s-radius s-bg-white l-block l-section s-shadow-bottom">
                <div >
                  <h3 className="t4">¿Qué aprenderás?</h3>
                  <ul>
                    {
                      speciality.data.abilities.map(a => (
                        <li key={a.id}>{a.description}</li>
                      ))
                    }
                  </ul>
                </div>
                <div>
                  <h3 className="t4">Conocimientos previos</h3>
                  <ul>
                    {
                      speciality.data.knowledge.map(k => (
                        <li key={k.id}>{k.description}</li>
                      ))
                    }
                  </ul>
                </div>
                <div>
                  <h3 className="t4">Nivel</h3>
                  <p>{speciality.data.level}</p>
                </div>
              </div>
          <h2>Temario de la especialidad</h2> 
            <div className="s-border s-pxy-2 l-pxy-4 s-radius s-bg-white l-block l-section s-shadow-bottom">
              {
                speciality.data.courses.map(cl => (
                  <div className="l-section" key={cl.id}>
                    <div className="ed-grid m-grid-3">
                      <img src={cl.picture} alt={cl.name}/>
                      <div className="m-cols-2">
                        <h3 className="s-mb-0">{cl.name}</h3>
                        <p>{cl.subtitle}</p>
                        <p>{cl.information}</p>
                      </div>
                    </div>
                  </div>
                ))
              }
            </div>         
          </div>
        </main>
      </>
    }
    </>
  )
}

const mapStateToProps = state => ({
  speciality: state.specialityReducer.speciality
})
export default connect(mapStateToProps, {})(Speciality)
