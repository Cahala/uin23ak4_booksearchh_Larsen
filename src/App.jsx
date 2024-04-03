import { Route, Routes, useNavigate } from 'react-router-dom'
import './App.css'
import { useState, useEffect } from 'react'
import Books from './components/Books'
import Layout from './components/Layout'
import SearchResults from './components/SearchResults'


function App() {
  const [search, setSearch] = useState("") //const [query, setQuery] = useState("beth")
  const [books, setBooks] = useState([]) // const [content, setContent] = useState([])
  const navigate = useNavigate()
  const [bookTitle, setbookTitle] = useState(true) //const [currentid, setCurrentid] = useState("")//
 
  useEffect(()=> {
    if (search.length >= 3 || search.length === "james+bond") {
    fetch(`https://openlibrary.org/search.json?&title=${(search)}`)
    .then (response => response.json())
    .then (data => {setBooks(data.docs)
      if (search) navigate('/search')
    })
    .catch (error => console.error(error))
   }

  }, [search, navigate])


  /*if (bookTitle) return <p>Laster inn...</p>
  if (!bookTitle && books.length === 0 && search.length => 3) {
    return <p>Ingen bøker funnet</p>
  }*/

  return (
    <>
    <Layout setSearch={setSearch}>
      <Routes>
        <Route index element={<Books books={books} />}/>
        <Route path="/search" element={<SearchResults books={books}/>} />
      </Routes>
    </Layout>
  </>
  )
}

export default App
