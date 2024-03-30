import React, { useState, useEffect } from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import BookList from './components/BookList'
import BookCard from './components/BookCard'
import SearchBar from './components/SearchBar'
import Layout from './components/Layout'

function App() {
  const [query, setQuery] = useState('')
  const [books, setBooks] = useState([])
  const [isSearchResult, setIsSearchResult] = useState(false)


  useEffect(() => {
    const fetchBooks = async () => {
      let url
      if (query.length >= 3) {
        url = `https://openlibrary.org/search.json?title=${encodeURIComponent(query)}`
        setIsSearchResult(true)
      } else {
        url = 'https://openlibrary.org/search.json?author=Ian+Fleming&title=James+Bond'
        setIsSearchResult(false)
      }
      const response = await fetch(url)
      const data = await response.json()
      setBooks(data.docs)
    };
  
    fetchBooks()
  }, [query])

  return (
    <Layout>
      <SearchBar onSearch={(input) => setQuery(input)} />
      <Routes>
        <Route path="/" element={<BookList books={books} />} />
        <Route path="/book/:key" element={<BookCard detailed={true} />} />
      </Routes>
    </Layout>
  )
}

export default App;
