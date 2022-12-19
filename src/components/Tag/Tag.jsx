import "./Tag.css"

//Returns tags for each housing
function Tag(props) {
    const {tag} = props
    return <>
        <span className="tag-unit">{tag}</span>
    </>
}

export default Tag