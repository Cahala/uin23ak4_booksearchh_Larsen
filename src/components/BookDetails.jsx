import { useEffect, useState } from "react";
import { Link } from 'react-router-dom'; // Make sure to import Link
// Assuming SearchResults is correctly imported

export default function BookDetails({ bookTitle }) {
  const [item, setItem] = useState({});

  const getDetailed = async () => {
    fetch(`https://openlibrary.org/search.json?&title=${encodeURIComponent(bookTitle)}`)
      .then(response => response.json())
      .then(data => {
        if (data.docs && data.docs.length > 0) { // Corrected spelling of 'length'
          const firstItem = data.docs[0];
          setItem({
            title: firstItem.title,
            image: firstItem.cover_i ? `https://covers.openlibrary.org/b/id/${firstItem.cover_i}-S.jpg` : "https://via.placeholder.com/150",
            author_name: firstItem.author_name,
            first_publish_year: firstItem.first_publish_year,
            ratings_average: firstItem.rating_average,
          });
        }
      })
      .catch(error => console.error(error));
  };

  useEffect(() => {
    if (bookTitle) {
      getDetailed();
    }
  }, [bookTitle]);

  console.log("sjekk", bookTitle);

  return (
    <section>
      <h1>{item?.title}</h1>
      <img src={item?.image} alt={`Cover of ${item.title}`} />
      <p>Author: {item?.author_name}</p>
      <p>First Published: {item?.first_publish_year}</p>
      <p>Average Rating: {item?.ratings_average}</p>
    </section>
  );
}
