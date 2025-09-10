import { useEffect, useState } from "react"

function Posts()
{

    const [posts , setPosts] = useState([]);

    useEffect(() => {
        fetch(`https://instagram-frontend-clone-7.onrender.com/posts`)
        .then(data => data.json())
        .then(data => setPosts(data))
        .catch(error => {
            console.log("error" , error)
        })
    } , [])


    return (
        <div className="d-flex justify-content-center">
            {
                (posts.length > 0) ? 
                (
                    <div>
                        {posts.map(post => 
                            {
                                return (
                                <div className = "my-3" key={post.id}>
                                    {postGen(post)}
                                </div>
                                )
                            }
                        )}
                    </div>
                ):
                (
                    <div>
                        LOADING
                    </div>
                )
            }
        </div>
    )
}

//helper

function postGen(post)
{
    return(
        <>
            <div className="d-flex">
                <img className="rounded-circle dp" src={post.user.profile_pic}></img>
                <h5>{post.user.username}</h5>
            </div>
            <img src={post.image} className ="image"></img>
            <div>
                <i className="bi bi-arrow-through-heart"></i>
                <i className="bi bi-chat"></i>
                <i className="bi bi-share"></i>
            </div>
            <div>
                <b>{post.likes} Likes</b>
            </div>
            <div>
                <p>{post.caption}</p>
            </div>
        </>
    )
}

export default Posts