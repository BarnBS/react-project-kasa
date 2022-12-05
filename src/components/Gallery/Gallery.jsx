import HousingCard from "../Housing-card/Housing-card"
import "./Gallery.css"

import logements from "../../logements.json";

function Gallery() {
    return <section className="Gallery">
        { logements.map(logement => {
            return <HousingCard key={logement.id} title={logement.title} cover={logement.cover}/>
        })}
    </section>
}

export default Gallery