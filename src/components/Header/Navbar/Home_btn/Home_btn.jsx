import { Link } from 'react-router-dom'
 

//Returns Button to navigate to the home page, integrated in navbar
function Home() {
    return (
        <nav>
            <Link to="/">Accueil</Link>
        </nav>
    )
}

export default Home