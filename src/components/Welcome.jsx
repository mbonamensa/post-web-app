

function Welcome(props) {



    return (
        <div className="welcome">
            <h1>Welcome to the Post Web App</h1>
            <button onClick={props.createFirstPost}>Create new post</button>  
        </div>
    )
}

export default Welcome