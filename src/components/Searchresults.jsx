import { useState } from "react"
import { Link } from "react-router-dom" 
import BookCard from "./BookCard"

export default function SearchResults({setSearch, books}) {

  const [input, setInput] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    setSearch(input)
}

const handleChange = (event) => {
  setInput(event.target.value)
}

/*const handleClick = (key) => {
  setbookTitle(key)
  localStorage.setItem("karakterID", id)
}*/

  return (
  <>
    <form onSubmit={handleSubmit}>
        <label htmlFor="search">Søk her:  </label>
        <input type="text" id="search" placeholder="Hvilken bok ser du etter..." aria-label="søk etter bøker"
        onChange={handleChange}></input>
        <input type="submit" value="Søk"></input>
    </form>
    <ul>
      {books?.map(book => 
      <li key={book.key}>
      <BookCard book={book} />
      </li>)}
    </ul>
  </>
  )
} 
/*<p>{book.title}</p>
<Link to ={book.title} onClick={() => handleClick(book.key)}>{book.title}</Link>*/