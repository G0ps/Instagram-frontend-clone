import { useNavigate } from "react-router-dom"
function SideBar(){

    const navigate = useNavigate();

    return (
        <>
            <div className="d-flex flex-column gap-3 position-fixed">
                <img className="logo-text" src="../public/assets/instagramTextTitle.jpeg" alt="TEXT" />
                <div className="d-flex flex-column">
                    <button className="menu-btn" onClick={() => navigate("/")}>
                        <i className="bi bi-house"></i> Home
                    </button>
                    <button className="menu-btn" onClick={() => navigate("/search")}>
                        <i className="bi bi-search"></i> Search
                    </button>
                    <button className="menu-btn" onClick={() => navigate("/explore")}>
                        <i className="bi bi-binoculars"></i> Explore
                    </button>
                    <button className="menu-btn" onClick={() => navigate("/reels")}>
                        <i className="bi bi-camera-reels"></i> Reels
                    </button>
                    <button className="menu-btn" onClick={() => navigate("/messages")}>
                        <i className="bi bi-chat"></i> Messages
                    </button>
                    <button className="menu-btn" onClick={() => navigate("/notifications")}>
                        <i className="bi bi-bell"></i> Notifications
                    </button>
                    <button className="menu-btn" onClick={() => navigate("/create")}>
                        <i className="bi bi-file-plus"></i> Create
                    </button>
                    <div className="menu-btn" onClick={() => navigate("/profile")}>
                        <i className="bi bi-person"></i> Profile
                    </div>
                    </div>

            </div>
            <div className="position-fixed bottom-0 d-flex flex-column mb-3">
                <div className="menu-btn"><i className="bi bi-threads"></i>Threads</div>
                <div className="menu-btn"><i className="bi bi-three-dots"></i>More</div>
            </div>
        </>
    )
}

export default SideBar