import WritePost from "./Home"
import { FaPlus, FaRegEdit, FaTrashAlt } from "react-icons/fa"
import ViewPost from "./ViewSinglePost"

function Post(props) {

    return(
        <>
        <div className="post">
            <div className="post-heading">
                <button className="btn-empty" onClick={props.viewSinglePost}>
                    <h1>{props.postTitle}</h1>
                </button>
                <div className="heading-icons">
                <a href="#"><button className="btn-empty" onClick={props.editPost}>
                        <FaRegEdit className="edit-icon"/>
                    </button></a>
                    <button className="btn-empty" onClick={props.deletePost}>
                        <FaTrashAlt className="delete-icon"/>
                    </button>
                </div>
            </div>
            {props.postMessage.length > 200 ? 
                (<div className="post-paragraph"> 
                    <p>{ `${props.postMessage.slice(0, 200)}...`}</p>
                    <button className="btn-empty" onClick={props.viewSinglePost}><p>View entire post...</p></button>  
                </div>) :
               ( <div className="post-paragraph"> 
                <p>{props.postMessage}</p>
                </div>)
            }
            

            <hr />
        </div>
           

        </>
    )
}

export default Post