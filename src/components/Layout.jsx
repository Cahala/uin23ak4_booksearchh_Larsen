import React from 'react'
import SearchResults from './SearchResults'

export default function Layout({children, setSearch, setSearchParams}) {

    return (
    <>
        <header>
            <h1>BIBLIOTEK</h1>
            <h3>Finn ut alt om din neste bok å lese</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            <SearchResults setSearch={setSearch} setSearchParams={setSearchParams}/>   
        </header>
        <main>
            {children}
        </main>
        <footer>Copyright 2024</footer>
    </>
    )
}
