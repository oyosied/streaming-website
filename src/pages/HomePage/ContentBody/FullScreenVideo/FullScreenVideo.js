import React, { useState, useEffect, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Player } from "video-react";
import "video-react/dist/video-react.css";
import { ApiManagerContext } from "../../../../utils/store/ApiMangerContext";
import { UserContext } from "../../../../utils/store/AuthContext";
import "./FullScreenVideo.css";
import { CenteredCircularProgress } from "../../../../utils/components/CircularLoading/CenteredCircularProgress.js";

const FullScreenVideo = () => {
  const { seriesId, episodeId } = useParams();
  const [episodeData, setEpisodeData] = useState(null);
  const { get } = useContext(ApiManagerContext);
  const { token } = useContext(UserContext);
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch the episode data based on the seriesId and episodeId
    const fetch_series_episodes = async () => {
      const response = await get(`/content/series/${seriesId}/seasons`, "", {
        Authorization: token,
      });

      const episodes = response.response.seasons_and_episodes.flatMap(
        (season) => season.episodes
      );
      const episode = episodes[0];
      setEpisodeData(episode);
    };
    fetch_series_episodes();
  }, [seriesId, episodeId, get, token]);

  const handleGoBack = () => {
    navigate(-1); // navigate back to the previous page
  };

  if (!episodeData) {
    return <CenteredCircularProgress />;
  }

  return (
    <div className="full-screen-video">
      <button className="back-button" onClick={handleGoBack}>
        &#8249;--
      </button>
      <div className="centered-video">
        <Player
          playsInline
          disablePictureInPicture
          fluid={false}
          width="100%"
          height="100%"
          className="centered-player"
        >
          <source src={episodeData.episode_url} />
        </Player>
      </div>
    </div>
  );
};

export { FullScreenVideo };
