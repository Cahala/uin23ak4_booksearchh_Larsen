import { Link } from "react-router-dom"

export default function Layout({children}) {

    return (
    <>
        <header>
            <nav>

            </nav>
        </header>
        <main>
          {children}
        </main>
        <footer></footer>
    </>
    )
}
