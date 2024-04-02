import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import SearchResults from './SearchResults'


export default function Layout({children}) {
    const [query, setQuery] = useState('')

    return (
    <>
        <header>
            <h1>Finn boken du leter etter</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et 
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip 
            ex ea commodo consequat.</p>
            <nav>
                <Link to="/"><button>Home</button></Link>
                <SearchResults onSearch={(input) => setQuery(input)} />
            </nav>
        </header>
        <main>
            {children}
        </main>
        <footer></footer>
    </>
    )
}
