import "./Tag.css"

function Tag(props) {
    const {tag} = props
    return <>
        <span className="tag-unit">{tag}</span>
    </>
}

export default Tag