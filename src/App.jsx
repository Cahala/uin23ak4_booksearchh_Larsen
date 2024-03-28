import { useState, useEffect } from 'react'
import './App.css'
import Layout from './components/Layout'
import { Route, Router, Routes } from 'react-router-dom'
import SearchResults from './components/SearchResults'

function App() {
  const [content, setContent] = useState([])
  const [query, setQuery] = useState("James+Bond")
  const [currentKey, setCurrentKey] = useState("")


  const getBooks = async()=>{
    try { const response = await fetch(`https://openlibrary.org/search.json?author=Ian+Fleming&limit=14&q=${query}`)
      const data = await response.json()
      setContent(data.results)
    } catch {
        console.error("Det har skjedd en feil")
      }
    }

  useEffect(()=>{
    getBooks()
    setCurrentKey(localStorage.getItem("BokNavn"))
  },[query]) //For å gi beskjed om at det skal hentes/bygges på nytt 

  console.log("KEY", currentKey)

  return (
    <Router>
      <Layout>
        <Routes> 
            <Route index element={<SearchResults content={content} setQuery={setQuery} setCurrentKey={setCurrentKey} />}></Route>
        </Routes>
      </Layout>
    </Router>  
  )
}

export default App