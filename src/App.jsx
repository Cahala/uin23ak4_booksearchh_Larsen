import { Route, Routes } from 'react-router-dom'
import './App.css'
import { useState, useEffect } from 'react'
import Layout from './components/Layout'
import SearchBar from './components/SearchBar'
import BookList from './components/BookList'
import BookCard from './components/BookCard'  

function App() {
  const [query, setQuery] = useState('')
  const [books, setBooks] = useState([])
  const [searching, setSearching] = useState(false)

  useEffect(() => {
    const fetchBooks = async () => {
      const response = await fetch('https://openlibrary.org/search.json?author=Ian+Fleming&title=James+Bond')
      const data = await response.json()
      setBooks(data.docs)
    };

    if (!query) {
      fetchBooks()
    }
  }, [query])


  useEffect(() => {
    const fetchSearchResults = async () => {
      if (query.length >= 3) {
        setSearching(true)
        const response = await fetch(`https://openlibrary.org/search.json?title=${encodeURIComponent(query)}`)
        const data = await response.json()
        setBooks(data.docs)
      } else {
        setSearching(false)
      }
    };

    fetchSearchResults()
  }, [query])

  return (
    <Layout>
      <SearchBar onSearch={setQuery} />
      <Routes>
        <Route path="/" element={<BookList books={books} />} />
        <Route path="/book/:key" element={<BookCard />} />
      </Routes>
    </Layout>
  );
}

export default App;
