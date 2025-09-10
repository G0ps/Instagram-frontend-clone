import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Stories() {
  const [stories, setStories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("http://localhost:3000/stories")
      .then((res) => res.json())
      .then((data) => setStories(data))
      .catch(() => setError("Failed to load stories"))
      .finally(() => setLoading(false));
  }, []);

  const tot = stories.length; // ✅ compute once from state

  return (
    <div className="story d-flex overflow-auto story_lane">
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>{error}</p>
      ) : (
        <>
          {stories.map((story) => (
            <div
              key={story.id}
              className="text-center mx-2"
              onClick={() => navigate(`/story/${story.id}/${tot}`)} // ✅ safe navigation
            >
              <div className="gradient_border">
                <img
                  className="story-dp rounded-circle"
                  src={story.user.profile_pic}
                  alt={`${story.user.username}'s profile`}
                  width="40"
                  height="40"
                />
              </div>
              <p className="text-truncate" style={{ width: "60px" }}>
                {story.user.username}
              </p>
            </div>
          ))}
        </>
      )}
    </div>
  );
}

export default Stories;
