function SideBar(){
    return (
        <>
            <div className="d-flex flex-column gap-3 position-fixed">
                <img className="logo-text" src="./src/assets/instagramText.png" alt="TEXT" />
                <div><i className="bi bi-building"></i>Home</div>
                <div><i className="bi bi-search"></i>Search</div>
                <div><i className="bi bi-binoculars"></i>Explore</div>
                <div><i className="bi bi-camera-reels-fill"></i>Reels</div>
                <div><i className="bi bi-chat-fill"></i>Messages</div>
                <div><i className="bi bi-bell-fill"></i>Notifications</div>
                <div><i className="bi bi-building"></i>Create</div>
                <div><i className="bi bi-building"></i>Profile</div>
            </div>
            <div className="position-fixed bottom-0 d-flex flex-column gap-3 mb-3">
                <div><i className="bi bi-building"></i>Threads</div>
                <div><i className="bi bi-building"></i>More</div>
            </div>
        </>
    )
}

export default SideBar