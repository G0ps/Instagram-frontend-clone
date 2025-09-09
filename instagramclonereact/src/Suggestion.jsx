import { useEffect, useState } from "react"

function Suggestions()
{

    const [profile , setProfile] = useState(null);
    const [suggestions , setSuggestions] = useState([]);

    useEffect(() => {

        fetch("http://localhost:3000/profile")
        .then(data => data.json())
        .then(data => setProfile(data))
        .catch(error => console.log("Error : " , error)) 

        fetch("http://localhost:3000/suggestions")
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
                                    <small className="text-primary ms-auto">Follow</small>
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
                <small className="ms-auto">Switch</small>
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