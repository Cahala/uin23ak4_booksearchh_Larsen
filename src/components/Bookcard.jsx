
export default function BookCard({books}) {
    
  //Kjører gjennom for å lage liste med bøker
    return (
    <>
    <section className="book-list"> 
      {books.map((book) => (
        <article key={book.key} className="book-title">
        <h3>{book.title}</h3>
        {book.isbn && <img src={`https://covers.openlibrary.org/b/isbn/${book.isbn[0]}-M.jpg`} alt={`Cover of ${book.title}`} />}
          <ul>
            <li>
              <p>Forfatter: {book.author_name?.join(", ")}</p>
              <p>Første publiseringsår: {book.first_publish_year}</p>
              <p>Gjennomsnittlig rangering: {typeof book.ratings_average === 'number' ? book.ratings_average.toFixed(1) : 'Ingen vurdering'}</p>
              {/*Satt inn at rangeringen vises med bare en disimal Kilde: ChatGPT*/}            
            </li>
          </ul>
          <a href={`https://www.amazon.com/s?k=${book?.isbn?.[0] || ""}`} target ="_blank">Kjøp boken fra Amazon</a>
        </article>
      ))}
    </section>
    </>
  )
}


