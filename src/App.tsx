import { useState } from 'react'
import GitHubSearchPage from './github_search_page'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <GitHubSearchPage />
    </>
  )
}

export default App
