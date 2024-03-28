export default function BookCard({ title, isbn, firstpublish, author_name, ratingsaverage, id_goodreads }) {
  // Funksjon for å hente bilde URL basert på ISBN
  const getCoverImageUrl = (isbn) => `https://covers.openlibrary.org/b/isbn/${isbn}-M.jpg`;

  return (
    <article key={isbn}>
      <h1>{title}</h1>
      {isbn && (
        <img src={getCoverImageUrl(isbn)} alt={`Cover of ${title}`} />
      )}
      <p>{firstpublish}</p>
      <p>{author_name}</p>
      <p>{ratingsaverage}</p>
      {id_goodreads && (
        <a href={`https://www.goodreads.com/book/show/${id_goodreads}`} target="_blank" rel="noopener noreferrer">Read more on Goodreads</a>
      )}
    </article>
  );
}
