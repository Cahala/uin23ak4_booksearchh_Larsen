/*Lister opp søkeresultater i "bookcards"*/

import React, { useState, useEffect } from 'react';

export default function JamesBondBook({currentId}){
    const [book, setBooks] = useState()

    const getBook = async() => {
    fetch('https://openlibrary.org/search.json?author=Ian+Fleming&q=James+Bond')
        .then(response => response.json())
        .then(data => setBooks(data))
        .catch(error => console.error(error))
    }

    useEffect(() => {
        getBook()
    },[currentId])

  const getCoverImageUrl = (isbn, size = 'M') => {
    return `https://covers.openlibrary.org/b/isbn/${isbn}-${size}.jpg`;
  };

  return (
    <>
    </>
  );
}