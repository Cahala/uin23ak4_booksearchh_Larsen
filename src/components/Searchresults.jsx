import { useState } from "react"

export default function SearchResults({setSearch}) {

  const [input, setInput] = useState("")
    
  const handleSearchSubmit = (e) => {
    e.preventDefault()
    if (input.trim().length >= 3) {
      setSearch(input.trim())
    }
  }

  const handleChange = (event) => {
    setInput(event.target.value)
  }

return (
    <form onSubmit={handleSearchSubmit}>
      <label htmlFor="search">Søk her: </label>
      <input type="text" id="search" name="search" placeholder="Hvilken bok ser du etter..." aria-label="søk etter bøker" onChange={handleChange} value={input}></input>
      <input type="submit" id="searchbutton" value="Søk"></input>
    </form>
  )
}
