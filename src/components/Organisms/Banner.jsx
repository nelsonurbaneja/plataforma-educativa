import React from 'react'
import { Link } from 'react-router-dom'

const Banner = ( {color, imagen, title, subtitle, home, information, poster, courseBanner, especalidad} ) => (
  <div className={`main-banner img-container l-block ${color}`}>
    <div className="ed-grid">
      <div>
        <img 
          src={imagen.src} 
          alt={imagen.alt} 
          className="main-banner__img"
        />
        {
          home
          ?
          <div className="ed-grid m-grid-2">
            <div className="main-banner__data">
              <h1 className="main-banner__title">{title}</h1>
              <p>{subtitle}</p>
              <p>{information}</p>
              <Link to="/cursos" className="button accent-color">Ir a cursos</Link>
            </div>
            <div className="img-container s-ratio-16-9">
              <img src={poster} alt="Curso actual"/>
            </div>
          </div>
          :
            courseBanner
            ?
            <div className="ed-grid m-grid-3">
              <div className="main-banner__data m-cols-2">
                <h1 className="main-banner__title s-mb-0">{title}</h1>
                <p className="s-opacity-7">{subtitle}</p>
                <p>{information}</p>
                {
                  especalidad &&
                  <p>Este curso forma parte de la especilidad <Link to="/especialidad/1">{especalidad}</Link> </p>
                }
              </div>
              <div className="img-container s-ratio-16-9 m-cols-1">
                <img src={poster} alt="Curso actual"/>
              </div>
            </div>
            :
            <div className="main-banner__data s-center">
              <h1 className="main-banner__title">{title}</h1>
              <p>{subtitle}</p>
            </div>
        }
      </div>
    </div>
  </div>
)

export default Banner
