

function AddNewPost(props) {
    return (
        <div className="write-post">
            <h1>Post App</h1>
            <div className="post-inputs">
                <input onChange={props.handleChange} type="text" name="title" value={props.postData.title} placeholder="Title..." required/>
                <textarea onChange={props.handleChange} name="message" id="message" value={props.postData.message} placeholder="Write something..." required/>
                <button 
                    onClick={props.editing ? props.savePost : props.addPost} 
                    className={props.postData.message  && props.postData.title ? "" : "button-disabled"}
                >{props.editing ? "Save Post" : "Post"}</button>
                
            </div>
        </div>
    )
}
export default AddNewPost