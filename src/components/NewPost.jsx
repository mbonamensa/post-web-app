

function NewPost(props) {
    // const edit = props.editing
    // console.log(edit)
    return (
        <div className="write-post">
            <h1>Add New Post</h1>
            <div className="post-inputs">
                <input onChange={props.handleChange} type="text" name="title" value={props.textData.title} placeholder="Title..." required/>
                <textarea onChange={props.handleChange} name="message" id="message" value={props.textData.message} placeholder="Write somethin..." required/>
                <button 
                    onClick={props.editing ? props.savePost : props.postFeed} 
                    className={props.textData.message  && props.textData.title ? "" : "button-disabled"}
                >{props.editing ? "Save Post" : "Post"}</button>
                
            </div>
        </div>
    )
}
export default NewPost