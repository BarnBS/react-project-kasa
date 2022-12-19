import React from "react";
import { Link } from 'react-router-dom'

//returns Error404 page and redirection link to home page
function Error404 () {

    return <>
    <section className="Error404">
        <h1>404</h1>
        <p> Oups ! La page que </p>
        <p> vous demandez n'existe pas.</p>
        <Link to="/">Retourner sur la page d'accueil</Link>
    </section>
    </>
}

export default Error404