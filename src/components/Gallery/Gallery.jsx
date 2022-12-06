import HousingCard from "../Housing-card/Housing-card"
import "./Gallery.css"

import logements from "../../logements.json";


//Display a gallery of every avaiblable housing
function Gallery() {
    return <section className="Gallery">
        { logements.map(logement => {
            return <HousingCard key={logement.id} id={logement.id} title={logement.title} cover={logement.cover}/>
        })}
    </section>
}

export default Gallery