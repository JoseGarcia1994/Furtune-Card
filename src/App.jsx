import './App.css'
import Author from './components/Author'
import FortuneMessage from './components/FortuneMessage'
import phrases from "./data/phrases.json"
import { useState } from 'react'

function App() {

  const img = ["url(/fondo1.png)", "url(/fondo2.png)",  "url(/fondo3.png)",  "url(/fondo4.png)",]

  const [ imgIndex, setImgIndex] = useState( 0 )
  const [ index, setIndex ] = useState( 0 )

  const ChangeUser = () => {

    setIndex(Math.floor(Math.random() * phrases.length))    

    setImgIndex(Math.floor(Math.random() * img.length))
    
  }

  return (
    <div className="app"  style={{ backgroundImage: img[imgIndex] }}>
      <div className='app__container'>
        <div className='app__container-title'>
          <h1 className='app__title'>Galletas de la Fortuna.</h1>
        </div>
        
        <div className='app__container-info'>
          <FortuneMessage
          phrase={ phrases[index] }
          />
          
          <button
          className='app__button' 
          onClick={ ChangeUser }>
          Try Your Luck
          </button>
        </div>
        <div>
          <Author 
          phrase={ phrases[index] }
          />
        </div>
      </div>
      
    </div>
  )
}

export default App
