import { useParams } from "react-router-dom"

export default function BookCard({ books = [] }) {
  let { key } = useParams()
  const book = key ? books.find(book => book.key === key) : null
  const getCoverImageUrl = (isbn) => isbn ? `https://covers.openlibrary.org/b/isbn/${isbn}-S.jpg` : ''
  //https://covers.openlibrary.org/a/olid/OL23919A-s.jpg -- SKRIVE OM ANNEN 
  // Hjelpefunksjon for å hente bilde URL basert på ISBN
  
  if (key && book) {
    return (
      <article className="bookCard">
        <h1>{book.title}</h1>
        {book.isbn && <img src={getCoverImageUrl(book.isbn[0])} alt={`Cover of ${book.title}`} />}
        <p>Forfatter: {book.author_name?.join(", ")}</p>
        <p>Første publiseringsår: {book.first_publish_year}</p>
        {book.ratings_average && <p>Gjennomsnittlig rating: {book.ratings_average}</p>}
        {book.id_goodreads && <a href={`https://www.goodreads.com/book/show/${book.id_goodreads[0]}`} target="_blank" rel="noopener noreferrer">Mer om boka på Goodreads</a>}
      </article> //Fant ikke amazon_id i API, har derfor brukt goodreads istedenfor ELLER søke amazone med ISBN??
    )
  } /*else {
    return (
      <ul className="book-list">
        {books.map(book => (
          <li key={book.key}>{book.title}</li>
        ))}
      </ul>
    )
  }*/
}