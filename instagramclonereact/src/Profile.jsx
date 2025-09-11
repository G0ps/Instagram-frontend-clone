import axios from "axios"
import { useEffect, useState } from "react"

function Profile() {
    const [profile, setProfile] = useState(null);
    const [followers, setFollowers] = useState([]);

    // Fetch profile and followers
    useEffect(() => {
        axios.get("https://instagram-frontend-clone-7.onrender.com/profile")
            .then(res => setProfile(res.data))
            .catch(err => console.log("Profile fetch error:", err));

        fetchFollowers();
    }, []);

    const fetchFollowers = () => {
        axios.get("https://instagram-frontend-clone-7.onrender.com/followers")
            .then(res => setFollowers(res.data))
            .catch(err => console.log("Followers fetch error:", err));
    };

    function handleOnChange(e) {
        const { name, value } = e.target;
        setProfile(prev => ({
            ...prev,
            [name]: value
        }));
    }

    const handleUpdate = async () => {
        axios.put("https://instagram-frontend-clone-7.onrender.com/profile", profile)
            .then(() => console.log("Profile updated"))
            .catch(err => console.log("Update error:", err));
    };

    const handleUnfollow = async (id) => {
        axios.delete(`https://instagram-frontend-clone-7.onrender.com/followers/${id}`)
            .then(() => {
                alert("Unfollowed");
                fetchFollowers(); // ✅ refresh list after unfollow
            })
            .catch(err => console.log("Unfollow error:", err));
    };

    return (
        <div className="m-5">
            <div>
                {profile && (
                    <>
                        <div>
                            <img src={profile.profile_pic} alt="" className="profile rounded-circle" />
                            <h5>{profile.username}</h5>
                        </div>

                        <input
                            type="text"
                            name="username"
                            value={profile.username}
                            className="form-control my-4"
                            onChange={handleOnChange}
                        />
                        <input
                            type="text"
                            name="profile_pic"
                            value={profile.profile_pic}
                            className="form-control"
                            onChange={handleOnChange}
                        />
                        <button className="btn btn-primary my-4" onClick={handleUpdate}>Update</button>
                    </>
                )}
            </div>

            <h2>Followers : </h2>
            {followers.length > 0 ? (
                followers.map(follower => (
                    <div key={follower.id} className="d-flex">
                        {follower.username}
                        <button
                            className="btn btn-secondary ms-auto my-2"
                            onClick={() => handleUnfollow(follower.id)}
                        >
                            Unfollow
                        </button>
                    </div>
                ))
            ) : (
                <div>Loading followers...</div>
            )}
        </div>
    );
}

export default Profile;
