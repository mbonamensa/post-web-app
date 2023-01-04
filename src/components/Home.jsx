import {  useEffect, useState } from "react"
import { nanoid } from "nanoid"
import Post from "./Post"
import ViewSinglePost from "./ViewSinglePost"
import CreateAndEditPost from "./CreateAndEditPost"
import { FaArrowLeft } from "react-icons/fa"


function Home() {
    // State Hooks
    const [textData, setTextData] = useState({
        title: "",
        message: "",
        id: nanoid()
    })
    const [feed, setFeed] = useState(() => JSON.parse(localStorage.getItem("feed")) || [])
    const [editing, setEditing] = useState(false)
    const [singlePost, setSinglePost] = useState(false)
    const [singlePostView, setSinglePostView] = useState(feed)
    const [overlay, setOverlay] = useState(false)


    // Effect Hooks
    useEffect(() => {
        localStorage.setItem("feed", JSON.stringify(feed))
    }, [feed])


    // Functions
    function handleChange(event) {
        setTextData(prevText => {
            return {
                ...prevText,
                [event.target.name] : event.target.value
            }
        })
    }

    function postFeed() {
        if(textData.message && textData.title) {
            setFeed(prevFeed => {
                return [...prevFeed, textData]
            })
        }

        setTextData(prevData => {
            return {
                ...prevData,
                title: "",
                message: "",
                id: nanoid()
            }
        })
    }

    function viewSinglePost(id) {
        setSinglePostView(feed)
        const newFeed = [...feed]
        newFeed.map(feedPost => {
            return feedPost.id === id ?
                setSinglePostView(prevFeed => prevFeed.filter(post => {
                    return post.id === id
                }))
            : feedPost
        })

       setSinglePost(true)
       setOverlay(true)
    }

    function editPost(id) {
        const newFeed = [...feed]
        newFeed.map(feedPost => {
            return feedPost.id === id ?
            setTextData(prevData => {
                return {
                    ...prevData,
                    title: feedPost.title,
                    message: feedPost.message,
                    id: feedPost.id
                }
            }) 
            : feedPost
        })
        setEditing(true)
        setOverlay(false)
    }

    function savePost(id) {
        setFeed(prevFeed => prevFeed.map(feedPost => {
            return feedPost.id === id ?
                {
                    ...feedPost,
                    title: textData.title,
                    message: textData.message,
                } :
            feedPost
        }))

        setTextData(prevData => {
            return {
                ...prevData,
                title: "",
                message: "",
                id: nanoid()
            }
        })

        setEditing(false)
    }

    function deletePost(id) {
        console.log(`${id} deleted!`)
        setFeed(prevFeed => prevFeed.filter(post => post.id !== id))
        setOverlay(false)
    }
    
    function backToFeed() {
        setOverlay(false)
    }

    const feedElements = feed.map(feedPost => {
        return <Post 
            key={feedPost.id} 
            postTitle={feedPost.title} 
            postMessage={feedPost.message} 
            editPost={() => editPost(feedPost.id)} 
            deletePost={() => deletePost(feedPost.id)}
            viewSinglePost={() => viewSinglePost(feedPost.id)}
            singlePost={singlePost}
        />
    })

    const singlePostElements = singlePostView.map(postFeed => {
        return <ViewSinglePost 
            key={postFeed.id} 
            postTitle={postFeed.title} 
            postMessage={postFeed.message} 
            editPost={() => editPost(postFeed.id)} 
            deletePost={() => deletePost(postFeed.id)}
        />
    })
    
    // Component Render
    return (
        <>
            
            <CreateAndEditPost handleChange={handleChange} textData={textData} postFeed={postFeed} editing={editing} savePost={() => savePost(textData.id)}/>
            <div className="feed-container">     
                {feed.length === 0 ? 
                    <h3>&#x1F440; Want to add a post?</h3>  
                    :  
                    <h3>Your feed looks awesome &#128525;</h3>
                    }
                {feedElements}
            </div> 
            

            {overlay && <div className="overlay">
                <button className="back-btn" onClick={backToFeed}><FaArrowLeft />back</button>
                {singlePost && singlePostElements} 
            </div> }    

        </>
    )



}

export default Home