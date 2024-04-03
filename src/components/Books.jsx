import { Outlet, Link } from "react-router-dom"

export default function Books({books}) {
    
    return (
    <>
        <Outlet />
        <ul className="book-list">
            {books.map((book, index) => (
           <li key={index} className="book-title">
            <Link to={`/book/${book.key}`} className="book-link">{book.title}</Link>
            </li>   
            ))}
        </ul>
    </>
    )
}   