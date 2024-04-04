
export default function BookCard({books}) {
    
  //Kjører gjennom for å lage liste med bøker
    return (
    <>
    <ul className="book-list"> 
      {books.map((book) => (
        <li key={book.key} className="book-title">
        <h3>{book.title}</h3>
        {book.isbn && <img src={`https://covers.openlibrary.org/b/isbn/${book.isbn[0]}-S.jpg`} alt={`Cover of ${book.title}`} />}
        <p>Author: {book.author_name?.join(", ")}</p>
        <p>First published year: {book.first_publish_year}</p>
        <p>Average Rating: {book.ratings_average || 'Ingen vurdering'}</p>
        <a href={`https://www.amazon.com/s?k=${book?.isbn?.[0] || ""}`} target ="_blank">Buy on Amazon</a>
        </li>
      ))}
    </ul>
    </>
  );
}