export default function BookCard({ book }) {
  // Funksjon for å hente bilde URL basert på ISBN
  const getCoverImageUrl = (isbn) => isbn ? `https://covers.openlibrary.org/b/isbn/${isbn}-M.jpg` : ''

  const isbn = book.isbn ? book.isbn[0] : ''

  const hasGoodreadsId = book.id_goodreads ? true : false;


  return (
    <article className="bookCard">
      <h1>{book.title}</h1>
      {isbn && (
        <img src={getCoverImageUrl(isbn)} alt={`Cover of ${book.title}`} />
      )}
      <p>Forfatter: {book.author_name?.join(", ")}</p>
      <p>Første publiseringsår: {book.first_publish_year}</p>
      {book.ratings_average && (
        <p>Gjennomsnittlig rating: {book.ratings_average}</p>
      )}
      {hasGoodreadsId && (
        <a href={`https://www.goodreads.com/book/show/${book.id_goodreads[0]}`} target="_blank" rel="noopener noreferrer">Mer om boka på Goodreads</a>
      )}
    </article>
  )

}