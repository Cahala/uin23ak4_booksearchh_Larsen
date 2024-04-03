import { Link } from "react-router-dom"

export default function Books({books}) {
    
  //Kjører gjennom for å lage liste med bøker
    return (
    <>
    <ul className="book-list"> 
      {books.map((book) => (
        <li key={book.key} className="book-title">
          <Link to={`/book/${book.key}`}>{book.title}</Link>
        </li>
      ))}
    </ul>
    </>
    )
}