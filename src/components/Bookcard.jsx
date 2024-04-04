import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

export default function BookCard() {

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

  }