/*Listevisning av en bok (for både søkeresultater og forsiden)*/
import { SearchResults } from './components/SearchResults.jsx';

export default function BookCard({/*title, category, ingress, id*/}){
    
    return(
        <article>
        <h1>James Bond Books by Ian Fleming</h1>
        <ul>
          {books.map((book, index) => (
            <li key={index}>
              <h3>{book.title}</h3>
              {book.isbn && (
                <img src={getCoverImageUrl(book.isbn[0])} alt={`Cover of ${book.title}`} />
              )}
              <p>{book.firstpublish}</p>
              <p>{book.author_name}</p>
              <p>{book.ratingsaverage}</p>
              <a href= "https://www.goodreads.com/"></a>
              
            </li>
          ))}
        </ul>
      </article>
    )
}