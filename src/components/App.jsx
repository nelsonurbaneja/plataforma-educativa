import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './Pages/Home'
import Protected from './Routes/Protected'
import Public from './Routes/Public'
import Specialities from './Pages/Specialities'
import Speciality from './Pages/Speciality'
import Courses from './Pages/Courses'
import Course from './Pages/Course'
import Teachers from './Pages/Teachers'
import Clase from './Pages/Clase'
import Login from './Pages/Login'
import Register from './Pages/Register'
import Page404 from './Pages/Page404'
import Header from './Organisms/Header'

const App = () => (
  <Router>
    <Header />
    <Switch>
      <Protected path="/" exact component={Home}/>
      <Protected path="/especialidades" exact component={Specialities}/>
      <Protected path="/especialidades/:id" component={Speciality}/>
      <Protected path="/cursos" exact component={Courses}/>
      <Protected path="/cursos/:id" component={Course}/>
      <Protected path="/profesores" exact component={Teachers}/>
      <Protected path="/clase/:id" exact component={Clase}/>

      <Public path="/login" exact component={Login}/>
      <Public path="/registro" exact component={Register}/>

      <Route component={Page404} />

    </Switch>
  </Router>
)

export default App
