import { useState } from "react"

export default function SearchBar({onSearch}) {
  const [input, setInput] = useState("")

  const handleSubmit = (e) => {
      e.preventDefault()
      if(input.length >= 3) {
      onSearch(input)
  }
}

  return (
    <form onSubmit={handleSubmit}>
        <label htmlFor="search">Søk her:  </label>
        <input type="text" value={input} onChange={(e) => setInput(e.target.value)} placeholder="Hvilken bok ser du etter..." ></input>
        <input type="submit" value="Søk"></input>
    </form>
  )

}