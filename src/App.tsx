import { useState } from 'react'
import './App.css'

// page
import ApiResponseParserPage from './features/presentation/api_response_parser'

function App() {

  const promises = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Hello world!')
    }, 2000)
  })

  promises.then(result => {
    console.log(result);
  }).catch(error => {
    console.error(error)
  })

  const [count, setCount] = useState(0)

  return (
    <>
      <ApiResponseParserPage />
    </>
  )
}

export default App
