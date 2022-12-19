import star from "./star.png"

import "./Rating.css"

//Returns the rating stars/5
function Rating(props){
    const {rating} = props;
    let coloredStarsList = [];
    let notColoredStarsList = [];

    //Count the number of colored stars and add to a list each star to iterate on it later
    function coloredStars(){
        let stars = Number(rating);
        let i = "colored Star"
        while (stars > 0) {
            coloredStarsList.push(i);
            stars--;
        }
        return coloredStarsList;
    }
    
    //Count the number of colored stars and add to a list each star to iterate on it later
    function notColoredStars(){
        let stars = Number(rating);
        let i = "not Colored Star";
        while (stars < 5) {
            notColoredStarsList.push(i);
            stars++;
        }
        return notColoredStarsList;
    }

    return <div className="rating">
        {   
            coloredStars().map( coloredStar => {
                return <img key={coloredStars().indexOf(coloredStar)}  src={star} alt="star used for rating" className="star"/>
            })
        }

        {
            notColoredStars().map( notColoredStar => {
                return <img key={notColoredStars().indexOf(notColoredStar) + Math.random}  src={star} alt="star used for rating" className="star uncoloredStar"/>
            })
        }
    </div>
}

export default Rating