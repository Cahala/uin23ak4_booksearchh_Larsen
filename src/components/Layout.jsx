import React from 'react'
import Home from './Home'
import SearchBar from './SearchBar'
import { Link } from 'react-router-dom'


export default function Layout({children}) {

    return (
    <>
        <header>
                <nav>
                <ul>
                <li><Link to="/">Home</Link></li>
                
                </ul>
                    <SearchBar onSearch={(input) => setQuery(input)} />
                </nav>    
        </header>
        <main>
            {children}
        </main>
        <footer></footer>
    </>
    )
}
