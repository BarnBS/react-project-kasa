// import core
import React from "react";
import { useParams } from "react-router-dom";

// import components
import Error404 from "../Error404/Error404";
import Carrousel from "../../components/Carrousel/Carrousel";
import HousingTitle from "../../components/Housing-title/Housing-title";
import Tag from "../../components/Tag/Tag";
import Host from "../../components/Host/Host";
import Rating from "../../components/Rating/Rating";
import UnwrapBtn from "../../components/Unwrap-btn/Unwrap-btn";

// import data
import logements from "../../logements.json"

// css
import "./Housing-Sheet.css"

//Returns a list of every housing id
function listHousingIds() {
    let urlList = [];
    for (let i=0; i<logements.length; i++) {
        urlList.push(logements[i].id);
    }
    return urlList;
}

//Returns each tag using the Tags component with a mapping method
function tagTemplate(index) {
    return <div className="tags">
    {
        logements[index].tags.map( tag => {
            return <Tag tag={tag} key={Math.random()}/>
        })
    }
    </div>
}

//Returns template for host and rating components
function hostAndRatingTemplate(index){
    return <div className="host-and-ratings">
        <Host host = {logements[index].host.name} profile_picture = {logements[index].host.picture}/>
        <Rating rating = {logements[index].rating}/>
    </div>
}

//Returns template for the "unwrap" buttons
function unwrapButtonsTemplate(index){
    return <div className="unwrap-btns">
            <UnwrapBtn title="Description" description={logements[index].description}/>
            <UnwrapBtn title="Equipements" description={logements[index].equipments.map(equipement => {
                return <span key={Math.random()}>
                        {equipement} <br/>
                    </span>
            })}/>
    </div>
}

//Returns the template for the housing sheet
function housingTemplate(index) {
    return <>
            {/*Preload des images du carrousel*/}
            <section className="preload">
            {logements[index].pictures.map(image => {
                return <img src={image} key={Math.random()} alt=""/>
            })}
        </section>
        
        <section className="Housing-Sheet">
                <Carrousel images={logements[index].pictures}/>
                <HousingTitle title = {logements[index].title} location = {logements[index].location}/> 
                {tagTemplate(index)}
                {hostAndRatingTemplate(index)}
                {unwrapButtonsTemplate(index)}
        </section>
    </>
}


//Returns a page-component that display every component of a housing
function Housing_Sheet () {

    let urlParameter = useParams(); //Get the id of the housing from the url
    
    //If the id in the url doesn't match an id from the list of Ids then return Error404, else display the housing corresponding the id
    if (listHousingIds().find(idFromList => idFromList === urlParameter.id)) {
        for (let i=0; i < logements.length; i++) {
            if (logements[i].id === urlParameter.id) {      
                return housingTemplate(i);
            }
        }     
    }
    else {
        return <>
            <Error404/>
        </>
    }
}


export default Housing_Sheet;