import {useState} from "react";

import leftBtn from "./left-slide.png";
import rightBtn from "./right-slide.png";
import "./Carrousel.css";

//Carrousel d'images
function Carrousel (props) {

    const {images} = props
    const [counter, setCounter] = useState(0);

    let classNameLeft = "slideBtn";
    let classNameRight = "slideBtn right"

    if (counter === 0){
        classNameLeft = "slideBtn hide"
    }

    if (counter === images.length-1){
        classNameRight = "slideBtn right hide"
    }

    //Incrémente le counter pour changer d'image au carrousel parmis la liste d'images
    function increment() {
        if (counter < images.length-1){
            setCounter(counter + 1);
        }
    }

    //Décrémente le counter pour changer d'image au carrousel parmis la liste d'images
    function decrement() {
        if (counter > 0){
            return setCounter(counter - 1);
        }
    }

    return(<>
        <>
            <img onClick = {decrement} className={classNameLeft} src={leftBtn} alt="Button to slide to the left" />
        </>
        <div className="carrousel">
            <img className="imageCarrousel" key={images.indexOf(images[counter])} src={images[counter]} alt="" /> 
            <p className="pageNumber">{images.indexOf(images[counter])+1}/{images.length}</p>
        </div>
        <>
            <img onClick={increment} className={classNameRight} src={rightBtn} alt="Button to slide to the right" />
        </>
    </>
    )
}

export default Carrousel