import { Routes, Route} from 'react-router-dom'
import './App.css'
import { useState, useEffect } from 'react'
import Books from './components/Books'
import Layout from './components/Layout'
import SearchResults from './components/SearchResults'
import BookCard from './components/BookCard'

function App() {
  const [search, setSearch] = useState("james+bond") //const [query, setQuery] = useState("beth")
  const [books, setBooks] = useState([]) // const [content, setContent] = useState([])


  //const [bookTitle, setbookTitle] = useState(true) //const [currentid, setCurrentid] = useState("")//
 
  useEffect(()=> {
    fetch(`https://openlibrary.org/search.json?&title=${(search)}`)
    .then (response => response.json())
    .then (data => {setBooks(data.docs)
    })
    .catch (error => console.error(error))

  }, [search])


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
          <Route path="/book/:bookKey" element={<BookCard />} />
        </Routes>
      </Layout>
  </>
  )
}

export default App
