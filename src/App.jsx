import { Routes, Route} from 'react-router-dom'
import './App.css'
import React, { useState, useEffect } from 'react'
import Books from './components/Books'
import Layout from './components/Layout'
import SearchResults from './components/SearchResults'
import BookCard from './components/BookCard'

function App() {
  const [books, setBooks] = useState([])
  const [search, setSearch] = useState("James+Bond+(Original+Series)")

  useEffect(()=> {
    fetch(`https://openlibrary.org/search.json?&title=${(search)}`)
    .then (response => response.json())
    .then ((data) => {setBooks(data.docs)
    })
    .catch ((error) => console.error(error))

  }, [search])


 /*if (books === null) {
  return <p>Laster inn...</p>
 } else if (books.length === 0 && search.length <= 3) {
    return <p>Ingen bøker funnet</p>
  }*/

  return (
    <>
      <Layout setSearch={setSearch}>
      <SearchResults setSearch={setSearch}/>
        <Routes>
          <Route path="/" element={<Books books={books}/>}/>
          <Route path="/book/:bookKey" element={<BookCard />} />
        </Routes>
      </Layout>
  </>
  )
}

export default App

