import BookCard from "./Bookcard";

export default function BookList({ books }) {
    return (
      <div>
        {books.map((book, index) => (
          <BookCard
            key={index}
            title={book.title}
            isbn={book.isbn}
            firstpublish={book.firstpublish}
            author_name={book.author_name}
            ratingsaverage={book.ratingsaverage}
          />
        ))}
      </div>
    );
  }
  