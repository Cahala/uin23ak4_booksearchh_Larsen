import { useState } from "react"

export default function SearchResults({setSearch, setSearchParams}) {

  //Variabel for å holde på søkefeltets verdi
  const [input, setInput] = useState("")
    
  //Funksjon for å håndtere innsending av søkeformularet
  const handleSearchSubmit = (e) => {
    e.preventDefault() // Forhindrer standard oppførsel for formularinnsending
    /// Sjekker om inputverdien er minst 3 tegn lang
    if (input.trim().length >= 3) { 
      setSearch(input.trim()) 
      //Oppdaterer søketilstanden med den trimmete inputverdien
      //KILDE: ChatGPT
    }
  }
//Oppdaterer 'input'-tilstanden med verdien fra søkefeltet hver gang brukeren skriver
  const handleChange = (event) => {
    setInput(event.target.value)
    setSearchParams(event.target.value)
  }

return (
    <form onSubmit={handleSearchSubmit}>
      <label htmlFor="search">Søk her: </label>
      <input type="text" id="search" name="search" placeholder="Hvilken bok ser du etter..." aria-label="søk etter bøker" onChange={handleChange} value={input}></input>
      <input type="submit" id="searchbutton" value="Finn boken"></input>
    </form>
  )//Returnerer et formular med et inputfelt og en knapp for å sende inn søket
  //Value: setter søkefeltets verdi til å være 'input'-tilstanden
  //OnChange: knytter verdien til søkefeltet til 'handleChange'-funksjonen
}
