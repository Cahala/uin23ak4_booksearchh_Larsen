import React from 'react'
import { Link } from 'react-router-dom'


export default function Layout({children, setSearch}) {
    //const [query, setQuery] = useState('')

    
  const handleSearchSubmit = (e, inputValue) => {
    e.preventDefault()
    if (inputValue.length >= 3) {
        setSearch(inputValue)
    }
}

return (
    <>
        <header>
            <h1>Finn boken du leter etter</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            <nav>
                <Link to="/"><button>Tilbake til forsiden</button></Link>
                <form onSubmit={(e) => handleSearchSubmit(e, e.target.search.value)}>
                    <label htmlFor="search">Søk her: </label>
                    <input type="text" id="search" name="search" placeholder="Hvilken bok ser du etter..." aria-label="søk etter bøker"></input>
                    <input type="submit" id="searchbotton" value="Søk"></input>
                </form>
            </nav>
        </header>
        <main>
            {children}
        </main>
        <footer></footer>
    </>
);
}

