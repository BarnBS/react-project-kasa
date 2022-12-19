import Home from './Home_btn/Home_btn'
import About from './About_bnt/About_btn'

//returns navbar to be integrated to the header
function Navbar() {
    return (
        <nav>
            <Home/>
            <About/>
        </nav>
    )
}

export default Navbar