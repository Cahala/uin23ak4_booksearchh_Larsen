import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

export default function BookCard({books}) {
    
  //lagre detaljene om boken som lastes
  const [bookDetails, setBookDetails] = useState(null)
  
  //hente ut parameteren bookKey fra URL-en, som representerer den unike identifikatoren for boken som skal vises.
  const { bookKey } = useParams()

  //henter bokdata fra Open Library API basert på bookKey. Den oppdaterer tilstanden bookDetails med 
  //responsdata eller et tomt objekt hvis det oppstår en feil. Denne effekten kjøres på nytt hver gang bookKey endres.
  useEffect(() => {
    fetch(`https://openlibrary.org/works/${bookKey}.json`)
        .then(response => response.json())
        .then(data => {
          setBookDetails(data)
        })
        .catch(error => {
          console.error(error)
          setBookDetails({})
        })
  }, [bookKey])

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
        {/*Fant ikke amazon_id i API så valgte å bruke ISBN i stedenfor*/}
        </article>
      ))}
    </section>
    </>
  )
}


