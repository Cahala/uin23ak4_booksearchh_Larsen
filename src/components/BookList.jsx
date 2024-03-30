//Funksjon: Organiserer og viser en liste av BookCard komponenter.

import BookCard from "./BookCard"

export default function BookList({books = []}) {
  return (
    <div className="bookList"> 
      {books.map((book) => (
        <BookCard key={book.key} book={book} />
      ))}
    </div>
  )
}