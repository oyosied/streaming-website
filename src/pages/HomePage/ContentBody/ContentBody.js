import React, { useEffect, useContext, useState } from "react";
import { ApiManagerContext } from "../../../utils/store/ApiMangerContext.js";
import { UserContext } from "../../../utils/store/AuthContext.js";
import { Slider } from "./Slider/Slider.js";
import "./ContentBody.css";
import { CenteredCircularProgress } from "../../../utils/components/CircularLoading/CenteredCircularProgress.js";

const ContentBody = () => {
  const { get } = useContext(ApiManagerContext);
  const { token } = useContext(UserContext);
  const [loading, setLoading] = useState(true);
  const [genres, setGenres] = useState(null);
  useEffect(() => {
    const fetchGenres = async () => {
      const genres_response = await get("/content/genres", "", {
        Authorization: token,
      });

      let series_per_genre = [];
      for (const g of genres_response.response.genres) {
        const series_response = await get(`/content/genres/${g["id"]}`, "", {
          Authorization: token,
        });
        g.series = series_response.response.genres;
        if (g.series) series_per_genre.push(g);
      }
      setGenres(series_per_genre);
      setLoading(false);
    };
    fetchGenres();
  }, [token, get, setGenres]);

  return (
    <div>
      {loading ? (
        <CenteredCircularProgress>Loading...</CenteredCircularProgress>
      ) : (
        genres &&
        genres.map((genre) => {
          return <Slider key={genre["name"]} genre={genre}></Slider>;
        })
      )}
    </div>
  );
};

export { ContentBody };
