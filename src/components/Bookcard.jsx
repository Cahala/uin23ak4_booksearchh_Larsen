import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

export default function BookCard() {

  //lagre detaljene om boken som lastes
  const [bookDetails, setBookDetails] = useState(null)
  //hente ut parameteren bookKey fra URL-en, som representerer den unike identifikatoren for boken som skal vises.
  const { bookKey } = useParams()

  //URL for å søke etter boken på Amazon
  const amazonSearchUrl = `https://www.amazon.com/s?k=${bookDetails.isbn ? bookDetails.isbn[0] : bookDetails.title.replace(/\s+/g, '+')}`

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

//Hovedrendering for 'BookCard' komponenten
    return (
      <article className="bookCard">
        <h3>{bookDetails.title}</h3>
        {bookDetails.isbn && <img src={`https://covers.openlibrary.org/b/isbn/${bookDetails.isbn[0]}-S.jpg`} alt={`Cover of ${bookDetails.title}`} />}
        <p>Author: {bookDetails.author_name?.join(", ")}</p>
        <p>First published year: {bookDetails.first_publish_year}</p>
        <p>Average Rating: {bookDetails.ratings_average || 'Ingen vurdering'}</p>
        <a href={amazonSearchUrl} target="_blank" rel="noopener noreferrer">Read more on Amazon</a>//Kilde: ChatGPT
        
      </article>
    )
  }