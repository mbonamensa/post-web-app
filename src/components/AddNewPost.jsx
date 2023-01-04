

function AddNewPost(props) {
    return (
        <div className="write-post">
            <h1>Post App</h1>
            <div className="post-inputs">
                <input onChange={props.handleChange} type="text" name="title" value={props.textData.title} placeholder="Title..." required/>
                <textarea onChange={props.handleChange} name="message" id="message" value={props.textData.message} placeholder="Write something..." required/>
                <button 
                    onClick={props.editing ? props.savePost : props.postFeed} 
                    className={props.textData.message  && props.textData.title ? "" : "button-disabled"}
                >{props.editing ? "Save Post" : "Post"}</button>
                
            </div>
        </div>
    )
}
export default AddNewPost