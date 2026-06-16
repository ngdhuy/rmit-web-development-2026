// import component
import React from 'react'

// import project component
import Header from './components/Header'
import Footer from './components/Footer'

// import css file
import './App.css'

// define function component with type Rreact.FC
const App : React.FC = () => {
  const message = "Designed by SEstudio"

  // function component must be return HTML tag with root is single tag
  return (
    <>
      <Header title='Welcome to React applcation' />
      <Footer message={message} />
    </>
  )
}

export default App
