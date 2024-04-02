import { useEffect, useState } from "react"
import BookCard from "./BookCard"

export default function SearchResults({ query }) {
    const [books, setBooks] = useState([])
    const [loading, setLoading] = useState(false)
  
    useEffect(() => {
      setLoading(true)
      const fetchData = async () => {
        const url = query.length >= 3 
          ? `https://openlibrary.org/search.json?q=${encodeURIComponent(query)}` 
          : 'https://openlibrary.org/search.json?author=Ian+Fleming&title=James+Bond'
        const response = await fetch(url)
        const data = await response.json()
        setBooks(data.docs)
        setLoading(false)
      }

      fetchData()
    }, [query])
  
    if (loading) return <p>Laster inn...</p>
    if (!loading && books.length === 0 && query.length < 3) {
      return <p>Ingen bøker funnet</p>
    }
  
    return (
      <ul>
        {books.map(book => (
          <BookCard key={book.key} book={book} detailed={false}/>
        ))}
      </ul>
    )
  }