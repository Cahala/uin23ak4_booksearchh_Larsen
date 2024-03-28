import { Link } from "react-router-dom";
import SearchResults from "./SearchResults";

export default function Layout({children}) {

    return (
    <>
        <header>
            <nav>
            </nav>
        </header>
        <main>
            <h1>Velkommen til bokappen</h1>
            <h3>James Bond bokserie</h3>
            <SearchResults />
        {children}
        </main>
        <footer></footer>
    </>
    )

}