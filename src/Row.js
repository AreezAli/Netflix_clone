import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import "./Row.css";
import YouTube from "react-youtube";
import { FaTimes } from "react-icons/fa";
import NoteContext from "./context";
// import movieTrailer from "movie-trailer";
const Row = ({ title, fetchUrl, isLargeRow, closebtn }) => {
  const data = useContext(NoteContext);
  // const [availble, setAvailble] = useState(true);
  const API_KEY = process.env.REACT_APP_API_KEY;
  const [movies, setMovies] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState("");
  const baseUrl = "https://image.tmdb.org/t/p/original/";
  useEffect(() => {
    async function fetchData() {
      const res = await axios.get(fetchUrl);
      const result = res.data.results.filter((r) => {
        return r.backdrop_path && r.poster_path;
      });
      setMovies(result);
      // setMovies(request.data?.results);
      return res;
    }
    fetchData();
  }, [fetchUrl]);

  const handleClick = (movie) => {
    // console.log(movie.id);
    if (trailerUrl) {
      setTrailerUrl("");
    }
    // if (!availble) {
    //   setAvailble(true);
    // }
    // else {
    //   movieTrailer(movie?.name || "")
    //     .then((url) => {
    //       const urlPramas = new URLSearchParams(new URL(url).search);
    //       console.log(urlPramas.get("v"));
    //     })
    //     .catch((err) => {
    //       console.log(err);
    //     });
    // }
    else {
      const fetch = async () => {
        const id = await axios.get(`
      https://api.themoviedb.org/3/movie/${movie.id}/videos?api_key=${API_KEY}&language=en-US`);
        // setTrailerUrl(id.data.results[0].key);
        // setAvailble(id.data.results.length);
        const data = id.data.results;
        const found = data.find((item) => {
          return item.type === "Trailer";
        });
        setTrailerUrl(found?.key);
      };
      fetch();
    }
  };

  const opts = {
    height: "390px",
    width: "100%",
    playerVars: { autoplay: 1 },
  };
  const closeShow = () => {
    data.setShow(false);
    data.setSearch("");
    setTrailerUrl("");
  };
  // console.log(movies);
  // console.log(isLargeRow);
  return (
    <div className="row">
      <div className="heading">
        <h2>{title}</h2>
        <div
          onClick={() => {
            closeShow();
          }}
          className={closebtn ? "" : "btn"}
        >
          <FaTimes />
        </div>
      </div>

      <div className="row_posters">
        {movies.map((movie, index) => {
          return (
            <img
              key={movie.id}
              onClick={() => {
                handleClick(movie);
              }}
              className={`row_poster ${isLargeRow && "row_posterLarge"}`}
              src={`${baseUrl}${
                isLargeRow ? movie?.poster_path : movie?.backdrop_path
              }`}
              alt={movie.title}
            />
          );
        })}
      </div>
      {/* {!availble && <h1 style={{ textAlign: "center" }}>NOT FOUND</h1>} */}
      <div id="play">
        {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
      </div>
    </div>
  );
};

export default Row;
