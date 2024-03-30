import React, { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'

export default function BookCard({ book }) {
  const { key } = useParams()
  const [bookDetails, setBookDetails] = useState(null)

  useEffect(() => {
    if (key) {
      const fetchBookDetails = async () => {
        const response = await fetch(`https://openlibrary.org${key}.json`)
        const data = await response.json()
        setBookDetails(data)
      }
      fetchBookDetails()
    } else {
      // Hvis ikke i detaljvisning, sett bookDetails basert på prop
      setBookDetails(book)
    }
  }, [key, book])

  // Funksjon for å hente bilde URL basert på ISBN eller cover ID
  const getCoverImageUrl = (coverId) => coverId ? `https://covers.openlibrary.org/b/id/${coverId}-M.jpg` : ''

  // Venter på data
  if (!bookDetails) return <div>Laster inn...</div>

  // Felles komponent for å vise bokinformasjon
  return (
    <article className="bookCard">
      <h1>{key ? bookDetails.title : <Link to={`/book/${book.key}`}>{book.title}</Link>}</h1>
      <img src={getCoverImageUrl(bookDetails.cover_i)} alt={`Cover of ${bookDetails.title}`} />
      <p>Forfatter: {bookDetails.author_name?.join(", ")}</p>
      <p>Første publiseringsår: {bookDetails.first_publish_year}</p>
      {bookDetails.id_goodreads && (
        <a href={`https://www.goodreads.com/book/show/${bookDetails.id_goodreads[0]}`} target="_blank" rel="noopener noreferrer">Mer om boka på Goodreads</a>
      )}
    </article>
  )
}
