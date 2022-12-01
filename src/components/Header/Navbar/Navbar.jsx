import { Link } from 'react-router-dom'
 
function Navbar() {
    return (
        <nav>
            <Link to="/">Accueil</Link>
            <Link to="/about">A Propos</Link>
        </nav>
    )
}

export default Navbar