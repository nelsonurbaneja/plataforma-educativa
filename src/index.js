import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App'
import './styles/styles.scss'
import { Provider } from 'react-redux'
import store from './redux/store'

import { getAllSpecialities } from './redux/actionCreators'

store.dispatch(getAllSpecialities())

const root =  document.getElementById('root')
ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>,  root
)
