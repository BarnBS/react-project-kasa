import { Link } from 'react-router-dom'
 
//Returns Button to navigate to the About page, integrated in navbar
function About() {
    return (
        <nav>
            <Link to="/about">A Propos</Link>
        </nav>
    )
}

export default About