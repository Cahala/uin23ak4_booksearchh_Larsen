import React, { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'

export default function BookCard({ book, detailed = false}) {
 
  const { key } = useParams()
  const [detailedBook, setDetailedBook] = useState(null)
  
  useEffect(() => {
    if (detailed && key) {
      const fetchBookDetails = async () => {
        const response = await fetch(`https://openlibrary.org${key}.json`)
        const data = await response.json()
        setDetailedBook(data)
      };
  
      fetchBookDetails()
    }
  }, [key, detailed])

  // Funksjon for å hente bilde URL basert på ISBN eller cover ID
  const getCoverImageUrl = (coverId) => coverId ? `https://covers.openlibrary.org/b/id/${coverId}-M.jpg` : ''
   
  if (detailed && detailedBook) {
    return (
      <div>
        <h1>{detailedBook.title}</h1>
        <img src={getCoverImageUrl(detailedBook.cover_i)} alt={`Cover of ${detailedBook.title}`} />
        {/* Ytterligere detaljer om boken */}
      </div>
    )
  }

  if (!detailedBook) return <div>Laster inn...</div>;

  return (
    <article className="bookCard">
      <h1>{detailed ? detailedBook.title : <Link to={`/book/${book.key}`}>{book.title}</Link>}</h1>
      <img src={getCoverImageUrl()} alt={`Cover of ${detailedBook.title}`} />
      <p>Forfatter: {detailedBook.author_name?.join(", ")}</p>
      {detailed && (
        <>
          <p>Første publiseringsår: {detailedBook.first_publish_year}</p>
          {detailedBook.ratings_average && (
            <p>Gjennomsnittlig rating: {detailedBook.ratings_average}</p>
          )}
          {detailedBook.id_goodreads && (
            <a href={`https://www.goodreads.com/book/show/${detailedBook.id_goodreads[0]}`} target="_blank" rel="noopener noreferrer">Mer om boka på Goodreads</a>
          )}
        </>
      )}
    </article>
  );
}
