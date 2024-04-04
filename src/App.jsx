import { Routes, Route, useSearchParams} from 'react-router-dom'
import './App.css'
import React, { useState, useEffect } from 'react'
import Books from './components/Books'
import Layout from './components/Layout'
import BookCard from './components/BookCard'

function App() {
  const [books, setBooks] = useState([])
  const [search, setSearch] = useState("James+Bond+(Original+Series)")
  const [searchParams, setSearchParams] = useSearchParams([])

  console.log(searchParams)
  //utfører en side-effekt når 'search'-variabelen endres
  useEffect(()=> {
    // Gjør et API-kall til OpenLibrary for å søke etter bøker basert på søketermen
    fetch(`https://openlibrary.org/search.json?&title=${(search)}`)
    .then (response => response.json()) // Konverterer svaret til JSON
    .then ((data) => {
      setBooks(data.docs) //'books'-state oppdatereres med resultatet
    })
    .catch ((error) => console.error(error)) // Logger eventuelle feil til konsollen

  }, [search]) //effekten kjøres kun når 'search' endres


  return (
    <>
      <Layout setSearch={setSearch} setSearchParams={setSearchParams}>
        <Routes>

          <Route path="/" element={<Books books={books}/>}/>
          <Route path="/book/:id" element={<BookCard />} />
        </Routes>
      </Layout>
  </>
  )
}

export default App

