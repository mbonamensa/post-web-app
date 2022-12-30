import {  useEffect, useState } from "react"
import { nanoid } from "nanoid"
import Feed from "./Feed"
import ViewPost from "./ViewPost"
import Welcome from "./Welcome"
import NewPost from "./NewPost"


function WritePost() {
    // State Hooks
    const [textData, setTextData] = useState({
        title: "",
        message: "",
        id: nanoid()
    })
    const [feed, setFeed] = useState(() => JSON.parse(localStorage.getItem("feed")) || [])
    const [firstPost, setFirstPost] = useState(false)
    const [editing, setEditing] = useState(false)
    const [onePost, setOnePost] = useState(false)

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
// console.log(textData.title)

    function createFirstPost() {
        setFirstPost(true)
        console.log("new post!")
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
                message: ""
            }
        })
    }

    function viewSinglePost(id) {
        console.log(`${id} about to be viewed!`)
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
    }

    function savePost(id, newTitle, newMessage) {
        setFeed(prevFeed => prevFeed.map(feedPost => {
            return feedPost.id === id ?
            setTextData(prevData => {
                return {
                    ...prevData,
                    title: newTitle,
                    message: newMessage
                }
            }) :
            prevFeed
        }))
    }

    // console.log(editing)
    console.log(feed)
    function deletePost(id) {
        console.log(`${id} deleted!`)
        setFeed(prevFeed => prevFeed.filter(post => post.id !== id))
    }

    const feedElements = feed.map(feedPost => {
        return <Feed 
            key={feedPost.id} 
            postTitle={feedPost.title} 
            postMessage={feedPost.message} 
            editPost={() => editPost(feedPost.id)} 
            deletePost={() => deletePost(feedPost.id)}
            viewSinglePost={() => viewSinglePost(feedPost.id)}
            onePost={onePost}
        />
    })
    
    // Component Render
    return (
        <>

            {feed.length === 0 ?
            (firstPost ?  <NewPost handleChange={handleChange} textData={textData} postFeed={postFeed} editing={editing} savePost={savePost}/> : <Welcome createFirstPost={createFirstPost}/>)
                :
                (<div>
                    {feed.length > 0 && <NewPost handleChange={handleChange} textData={textData} postFeed={postFeed} editing={editing} savePost={() => savePost(textData.id, textData.title, textData.message)}/>}
                    {feedElements}
                </div> )
            }         

            {/* <ViewPost postTitle={}/> */}

        </>
    )



}

export default WritePost