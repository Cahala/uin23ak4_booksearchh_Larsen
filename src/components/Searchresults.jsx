/*Lister opp søkeresultater i "bookcards"*/
import { useState } from "react"
import { Link } from "react-router-dom"

export default function SearchResults({content, setQuery, setCurrentKey}) {

  const [search, setSearch] = useState("")

  const handleChange = (event) => setSearch(event.target.value)


  const handleSubmit = (e) => {
      e.preventDefault() //Denne vil hindre nettsiden å refreshe seg når man trykke submit
      setQuery(search)
  }

  const handleClick = (key) => {
      setCurrentKey(key)
      localStorage.setItem("boknøkkel", key)
  }

  return (
  <>
      <h1>Bøker</h1>
      <form onSubmit={handleSubmit}>
          <label htmlFor="search">Søk etter bøker:</label>
          <input type="text" id="search" placeholder="Skriv her..." onChange={handleChange}></input>
          <input type="submit" value="Søk"></input>
      </form>
      <ul className="book-list">
          {content.map((item) => <li key={item.key}>
          <Link to ={item.name} onClick={() => handleClick(item.key)}>{item.name}</Link></li>)}
      </ul>
  </>
  )
}