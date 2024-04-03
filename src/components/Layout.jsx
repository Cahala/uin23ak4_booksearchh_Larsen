import React from 'react'


export default function Layout({children}) {

return (
    <>
        <header>
            <h1>BIBLIOTEK</h1>
            <h3>Finn ut alt om din neste bok å lese</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        </header>
        <main>
            {children}
        </main>
        <footer></footer>
    </>
)
//Forsøkte å sette "SearchResults" inn i Layout, men hadde problemer med å få det til å fungere.
}
