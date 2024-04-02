import { Link } from 'react-router-dom';  

export default function Home({books}) {
  return (
    <>
    <ul className="category-list">
      {books && books.map((book) => book.key && book.title && (
      <li key={book.key}>
        <Link to={`/books/${encodeURIComponent(book.title)}`} onClick={() => handleClick(book.key)}>
        {book.title}</Link>
      </li>
      ))}
    </ul>
    </>
  )
}

//Skriver ut en statisk liste med boktittlene jamesbond
/*     <section className="boklist">
{books?.map(book => 
<article key={book.key}>
<h3>{book.title}</h3>
</article>)}
</section> */
