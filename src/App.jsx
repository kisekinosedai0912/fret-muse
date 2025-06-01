import { useState } from 'react'
import Nav from './components/Nav.jsx'
import Main from './MainBody.jsx'
import './assets/css/App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Nav />
      <Main />
    </>
  )
}

export default App
