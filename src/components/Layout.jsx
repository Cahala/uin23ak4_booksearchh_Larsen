import React from 'react'


export default function Layout({children}) {

return (
    <>
        <header>
            <h1>Finn boken du leter etter</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        </header>
        <main>
            {children}
        </main>
        <footer></footer>
    </>
);

}
