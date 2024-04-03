import { useState } from "react"

export default function SearchResults({setSearch, books}) {

  const [input, setInput] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    setSearch(input)
}

const handleChange = (event) => {
  setInput(event.target.value)
}

  return (
  <>
    <form onSubmit={handleSubmit}>
        <label htmlFor="search">Søk her:  </label>
        <input type="text" id="search" placeholder="Hvilken bok ser du etter..." aria-label="søk etter bøker"
        onChange={handleChange}></input>
        <input type="submit" value="Søk"></input>
    </form>
  </>
  )
}