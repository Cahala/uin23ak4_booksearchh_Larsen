import { Route, Routes } from 'react-router-dom'
import './App.css'
import React, { useState } from 'react'
import Layout from './components/Layout'
import SearchBar from './components/SearchBar'
import BookCard from './components/BookCard'
import SearchResults from './components/SearchResults'
import Home from './components/Home'

function App() {
  const [query, setQuery] = useState('')


  return (
    <>
    <Layout />
    <Home />

    <Routes>
        <Route path="/search" element={<SearchResults query={query} />} />
    </Routes>
  </>
   
  )
}

export default App
