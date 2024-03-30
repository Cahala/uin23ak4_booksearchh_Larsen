import { useEffect, useState } from "react"
import BookList from "./BookList"

export default function SearchResults({query}) {

  const [books, setBooks] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    if(query.length < 3) {
        setBooks([])
        return
    }

    const fetchData = async () => {
        setLoading(true)
        try {
            const response = await fetch(`https://openlibrary.org/search.json?q=${encodeURIComponent(query)}`)
            const data = await response.json()
            setBooks(data.docs)
        } catch (error) {
            console.error("Feil ved henting av data", error)
            setBooks([])
        } finally {
            setLoading(false)
        }
  }

fetchData()
}, [query])

if(loading) return <p>Laster inn...</p>
if (books.length === 0 && query.length >= 3) return <p>Ingen bøker funnet</p>

return <BookList books={books} />

}