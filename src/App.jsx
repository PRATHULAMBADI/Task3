import { useState } from 'react'
import Heading from './Components/Heading'
import Footer from './Components/Footer'
import Content from './Components/Content'

function App() {
  const [count, setCount] = useState()

  return (
    <>
    <Heading/>
    <Content/>
    <Footer/>
    </>
  )
}

export default App
