import { FaPlus, FaRegEdit, FaTrashAlt } from "react-icons/fa"

function ViewPost(props) {
    return (
        <div className="view-post">
            {/* <FaPlus className="plus-icon"/> */}
            <div className="post-heading">
                <h1>{props.postTitle}</h1>
                <div className="heading-icons">
                    <FaRegEdit className="edit-icon"/>
                    <FaTrashAlt className="delete-icon"/>
                </div>
            </div>
            <div className="post-paragraph">
                <p>{props.postMessage}</p>
            </div>   
        </div>
    )
}

export default ViewPost