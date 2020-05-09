import React, {useEffect} from 'react'
import Banner from '../Organisms/Banner'
import { connect } from 'react-redux'
import store from '../../redux/store'
import { getAllPosts } from '../../redux/actionCreators'
import Publication from '../Organisms/Publication'

const Home = ({ match, posts}) => {

  useEffect(() => {
    store.dispatch(getAllPosts())
  }, [match])

  return (
    <>
    <Banner 
      color="dark-color"
      imagen="https://pixabay.com/get/5ee2d5404352b108f5d084609629317f163ad6ec564c704c7d267bd69f4ac459_1280.jpg"
      title="Bienvenido a la mejor plataforma en español de educacion online"
      subtitle="Preparate para una experiencia unica, donde te llenaras de mucho conocimiento"
      information="Programar no se trata de código, se trata de lógica. Este curso te enseña la lógica que te permitirá dominar cualquier lenguaje."
      poster="https://edteam-media.s3.amazonaws.com/blogs/original/d8379b31-8c01-485f-bd4d-49d77611d813.jpg"
      home
    />
    {
      posts &&
      <main className="ed-grid m-grid-3">
        <div className="l-section m-cols-2">
          <h2>Ultimas publicaciones</h2>
          <div>
            {
              posts.map(post => (
                <Publication key={post.id}
                  title={post.title}
                  author={post.author}
                  fecha={post.fecha}
                  content={post.content}
                />
              ))
            }
          </div>
        </div>
        <div className="l-section m-cols-1">
          <h3>Lista de categorías</h3>
          <ul className="feature-list">
            <li><span> React js</span></li>
            <li><span> Vue js</span></li>
            <li><span> Angular</span></li>
            <li><span> JavaScript</span></li>
            <li><span> Responsie web desing</span></li>
          </ul>
        </div>
      </main>
    }
  </>
  )
}

const mapStateToProps = state => ({
  posts: state.postReducer.posts
})
export default connect(mapStateToProps, {})(Home)
