import React from "react";

import BannerAbout from "../../components/Banner_About_Page/Banner_About";
import UnwrapBtn from "../../components/Unwrap-btn/Unwrap-btn";

import "./About.css"


// Return the About page with Banner and each wrapped division
function About () {

    return <main className="About">

        <BannerAbout/>

        <section className="Unwrap-section">
            <div className="Unwrap-div">
                <UnwrapBtn title="Fiabilité" description="Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes."/>
            </div>
            <div className="Unwrap-div">
                <UnwrapBtn title="Respect" description="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."/>
            </div>
            <div className="Unwrap-div">
                <UnwrapBtn title="Service" description="Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question."/>
            </div>
            <div className="Unwrap-div">
                <UnwrapBtn title="Securité" description="La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."/>
            </div>
        </section>
    </main>
}

export default About