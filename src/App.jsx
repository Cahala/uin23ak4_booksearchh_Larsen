import { Route, Routes } from 'react-router-dom'
import './App.css'
import { useState, useEffect } from 'react'
import Layout from './components/Layout'
import Home from './components/Home'
import Books from './components/Books'
import BookDetails from './components/BookDetails'
import BookCard from './components/BookCard'

function App() {
  const [search, setSearch] = useState("james+bond") //const [query, setQuery] = useState("beth")
  const [books, setBooks] = useState([]) // const [content, setContent] = useState([])
  const [bookTitle, setbookTitle] = useState(true) //const [currentid, setCurrentid] = useState("")//
 

  const getBook = async()=>{
    try { 
      const response = await fetch(`https://openlibrary.org/search.json?&title=${encodeURIComponent(search)}`)
      const data = await response.json()
      setBooks(data)
    } catch {
        console.error("Det har skjedd en feil")
      }
  }
   
  useEffect(()=>{
   if (search.length >= 3) {
      getBook()
      setbookTitle(false)
    }
  }, [search]) //For å gi beskjed om at det skal hentes/bygges på nytt 

  if (bookTitle) return <p>Laster inn...</p>
  if (!bookTitle && books.length === 0 && search.length < 3) {
    return <p>Ingen bøker funnet</p>
  }

  return (
    <>
    <Layout>
      <Routes>
        <Route path="/" exact element={Home}/>
        <Route path="books" element={<Books/>} />
        <Route path= ":bookKey" element={BookDetails }/>
        <Route index element={<BookCard />}/>
      </Routes>
    </Layout>
  </>
  )
}

export default App
