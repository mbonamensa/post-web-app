import WritePost from "./WritePost"
import { FaPlus, FaRegEdit, FaTrashAlt } from "react-icons/fa"
import ViewPost from "./ViewPost"

function Feed(props) {

    const onePost = props.onePost
    // console.log(onePost)
    return(
        <>
        <div className="feed">
            <div className="post-heading">
                <h1 onClick={props.viewSinglePost}>{props.postTitle}</h1>
                <div className="heading-icons">
                    <button onClick={props.editPost}>
                        <FaRegEdit className="edit-icon"/>
                    </button>
                    <button onClick={props.deletePost}>
                        <FaTrashAlt className="delete-icon"/>
                    </button>
                </div>
            </div>
            <div className="post-paragraph">
                <p>{props.postMessage.slice(0, 200)}...</p>
                <a href="#">View more...</a>
            </div>
            <hr />
        </div>

        {onePost && <ViewPost postTitle={props.postTitle} postMessage={props.postMessage}/>}

        </>
    )
}

export default Feed