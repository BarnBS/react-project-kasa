import star from "./star.png"

function Rating(props){
    const {stars} = props

    let i = 1 + Number(stars);
    while (i>0) {
        return <>
            <img src={star} alt="star used for rating"/>
            {i = i-1}
        </>
    }

}

export default Rating