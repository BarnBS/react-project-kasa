function HousingTitle(props) {

const {title, location} = props;

return <>
    <h1 className="title">{title}</h1>
    <p className="location">{location}</p>
</>
}

export default HousingTitle