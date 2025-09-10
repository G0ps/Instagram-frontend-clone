import { useEffect, useState } from "react"
import axios from "axios"

function Suggestions()
{

    const [profile , setProfile] = useState(null);
    const [suggestions , setSuggestions] = useState([]);

    const handleFollow = async(id , username) => {
        axios.post("https://instagram-frontend-clone-3.onrender.com/followers" , {"id":id , "username" : username})
        .then(alert("followed"))
        .catch(error => console.log("error : ",error))
    }

    useEffect(() => {

        fetch("https://instagram-frontend-clone-3.onrender.com/profile")
        .then(data => data.json())
        .then(data => setProfile(data))
        .catch(error => console.log("Error : " , error)) 

        fetch("https://instagram-frontend-clone-3.onrender.com/suggestions")
        .then(data => data.json())
        .then(data => setSuggestions(data))
        .catch(error => console.log("error" , error))

    } , [])

    return (
        <>
           {
                (profile)?
                
                    <div className ="suggestions m-4">
                        {suggestionGen(profile)}
                    </div>
                
                :
                <>LOADING</>
           } 
           <div className = "d-flex m-4">
            <p>Suggested for you</p>
            <b className ="ms-auto">see all</b>
           </div>
            <div className="d-flex m-4">
            {
                (suggestions.length > 0) ? 
                (
                    <div className = "suggestions">
                        {suggestions.map(post => 
                            {
                                return (
                                <div className="d-flex" key={post.id}>
                                    {postGen(post)}
                                    <a className="text-primary ms-auto" onClick={() => {handleFollow(post.id , post.username)}}>Follow</a>
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
        </>
    )
}

function suggestionGen(suggestion)
{
    return(
            <div className="d-flex">
                <img className="rounded-circle dp" src={suggestion.profile_pic && suggestion.profile_pic}></img>
                <h5>{suggestion.username && suggestion.username}</h5>
                <p className="ms-auto">Switch</p>
            </div>
    )
}

function postGen(post)
{
    return(
        <>
            <div className="d-flex">
                <img className="rounded-circle dp" src={post.profile_pic}></img>
                <h5>{post.username}</h5>
            </div>
        </>
    )
}


export default Suggestions