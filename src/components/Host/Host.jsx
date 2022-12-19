import "./Host.css"


//Returns a component with the host's informations
function Host(props) {
    const {host, profile_picture}=props
    return <div className="host">
            <p>{host}</p>
            <img src={profile_picture} alt="The host's face" />
        </div>
}

export default Host