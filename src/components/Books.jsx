import { Link } from "react-router-dom"

export default function Books({books}) {
    
    return (
    <>
    <ul className="book-list">
      {books.map((book) => (
        <li key={book.key} className="book-title"> {/* Replace 'key' with your actual identifier */}
          <Link to={`/book/${book.key}`}>{book.title}</Link> {/* Navigate to the book detail page */}
        </li>
      ))}
    </ul>
    </>
    )
}