import { FaRegEdit, FaTrashAlt } from "react-icons/fa"

function ViewSinglePost(props) {

    return (
        <div className="view-single-post">
            <div className="post-heading">
                <h1>{props.postTitle}</h1>
                <div className="heading-icons">
                    <a href="#"><button className="btn-empty" onClick={props.editPost}>
                        <FaRegEdit className="edit-icon"/>
                    </button></a>
                    <button className="btn-empty" onClick={props.deletePost}>
                        <FaTrashAlt className="delete-icon"/>
                    </button>
                </div>
            </div>
            <div className="post-paragraph">
                <p>{props.postMessage}</p>
            </div>   
        </div>
    )
}

export default ViewSinglePost