import star from "./star.png"

//Count the number of colored stars and add to a list each star to iterate on it later
function coloredStars(prop){
    let coloredStarsList = [];
    let stars = Number(prop);
    let star = "colored Star"
    while (stars > 0) {
        coloredStarsList.push(star);
        stars--;
    }
    return coloredStarsList;
}
    
//Count the number of colored stars and add to a list each star to iterate on it later
function notColoredStars(prop){
    let notColoredStarsList = [];
    let stars = Number(prop);
    let noStar = "not Colored Star";
    while (stars < 5) {
        notColoredStarsList.push(noStar);
        stars++;
    }
    return notColoredStarsList;
}

//Returns the rating stars/5
function Rating(props){
    const {rating} = props;

    return <div className="rating">
        {   
            coloredStars(rating).map( coloredStar => {
                return <img key={coloredStars(rating).indexOf(coloredStar) + Math.random()}  src={star} alt="star used for rating" className="star"/>
            })
        }

        {
            notColoredStars(rating).map( notColoredStar => {
                return <img key={notColoredStars(rating).indexOf(notColoredStar) + Math.random()}  src={star} alt="star used for rating" className="star uncoloredStar"/>
            })
        }
    </div>
}

export default Rating