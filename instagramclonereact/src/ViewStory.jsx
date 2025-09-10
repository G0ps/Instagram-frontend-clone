import { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";

function ViewStory() {
  const navigate = useNavigate();
  const { id, tot } = useParams();
  const [story, setStory] = useState(null);

  // Fetch story on id change
  useEffect(() => {
    fetch(`http://localhost:3000/stories/${id}`)
      .then((res) => res.json())
      .then((data) => setStory(data))
      .catch((error) => console.log("error : ", error));

        const numId = Number(id);
        const numTot = Number(tot);
        if (numId <= 0 || numId > numTot) {
        navigate("/");
        }
  }, [id]);

  return (
    <div className="d-flex justify-content-center align-items-center">
      {story ? (
        <>
          <Link to={`/story/${Number(id) - 1}/${tot}`}>
            <i className="bi bi-arrow-left"></i>
          </Link>
          <img className="vh-100" src={story.image} alt="story" />
          <Link to={`/story/${Number(id) + 1}/${tot}`}>
            <i className="bi bi-arrow-right"></i>
          </Link>
        </>
      ) : (
        <>NOT FOUND</>
      )}
    </div>
  );
}

export default ViewStory;
