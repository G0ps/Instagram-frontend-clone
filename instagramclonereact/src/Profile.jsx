import axios from "axios"
import { useEffect, useState } from "react"

function Profile()
{

    const [profile , setProfile] = useState(null);
    const [followers , setFollowers] = useState([]);
    const [Unfollowed , setUnFollowed] = useState(0);

    useEffect(()=>{
        axios.get('http://localhost:3000/profile')
        .then(data => {setProfile(data.data)})
        .catch(error => {console.log(error , " : error")})

        axios.get("http://localhost:3000/followers")
        .then(data => setFollowers(data.data))
        .then(setUnFollowed(!Unfollowed))
        .catch(error => {console.log(error , " : error")})
    } , [Unfollowed])

    function handleOnChange(e){
        const {name , value} = e.target

        setProfile(prev => ({
            ...prev,
            [name] : value
        }))
    }

    const handleUpdate = async() => {
        axios.put("http://localhost:3000/profile" , profile)
        .then(console.log("updated"))
        .error(error => {console.log(error , " : error")})
    }
    const handleUnfollow = async(id) => {
        axios.delete(`http://localhost:3000/followers/${id}`)
        .then(alert("Unfollowed"))
        .error(error => console.log("error : " , error))
    }

    return (
        <div className="m-5">
            <div>{profile && 
                (<>
                    <div>
                        <img src={profile.profile_pic} alt="" className="profile rounded-circle" />
                        <h5>{profile.username}</h5>
                    </div>

                    <input type="text"
                     name="username"
                     value={profile.username}
                     className = "form-control my-4"
                     onChange={handleOnChange}
                     />
                    <input type="text"
                           name = "profile_pic"
                           value = {profile.profile_pic} 
                           className = "form-control"
                           onChange={handleOnChange}
                    />
                    <button className="btn btn-primary my-4" onClick={handleUpdate}>Update</button>
                </>
                )
                }</div>

            <h2>Followers : </h2>
            {followers.length > 0 ? (
                followers.map(follower => (
                    <div key={followers.id} className="d-flex">
                        {follower.username}
                        <button className="btn btn-secondary ms-auto my-2" onClick={() =>{handleUnfollow(follower.id)}}>Unfollow</button>
                    </div>
                ))
            ):
            (
                <div>Loading followers...</div>
            )}
        </div>
    )
}

export default Profile