import axios from "axios";
import React, { useEffect, useState, useContext } from "react";
import YouTube from "react-youtube";
import request from "./requests";
import "./Banner.css";
import Row from "./Row";
import NoteContext from "./context";
const Banner = () => {
  const [movie, setMovie] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState("");
  // const [imag, setImag] = useState("");
  const data = useContext(NoteContext);
  const API_KEY = process.env.REACT_APP_API_KEY;
  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get(request.fetchTopRated);
      const result = res.data.results.filter((r) => {
        return r.backdrop_path !== undefined;
      });
      // console.log(result);
      setMovie(
        // result.data.results[
        result[Math.floor(Math.random() * res.data.results.length - 1)]
        // result[1]
      );
      // setImag(movie?.backdrop_path);
      // console.log(imag);
    };
    fetchData();
    // data.update();
  }, []);
  // setTimeout(() => {
  // console.log(data.state.banner);
  // }, 5000);
  const handleClick = (movie) => {
    if (trailerUrl) {
      setTrailerUrl("");
    }
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
        const data = id.data.results;
        const found = data.find((item) => {
          return item.type === "Trailer";
        });
        setTrailerUrl(found.key);
        // console.log(found);
      };
      fetch();
    }
  };

  const opts = {
    height: "390px",
    width: "100%",
    playerVars: { autoplay: 1 },
  };
  // const description = (str, n) => {
  //   return str.length > n ? str.substr(0, n - 1) + "..." : str;
  // };
  // console.log(movie);
  return (
    <>
      <header
        className="banner"
        style={{
          backgroundSize: "cover",
          backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
          // backgroundImage: `url("https://image.tmdb.org/t/p/original/${imag}")`,
          backgroundPosition: "center center",
        }}
      >
        <div className="banner_contents">
          <h1 className="banner_title">
            {movie?.title || movie?.name || movie?.orginal_name}
          </h1>
          <div className="banner_buttons">
            <button
              onClick={() => {
                handleClick(movie);
              }}
              className="banner_button"
            >
              Play
            </button>
            <button
              onClick={() => {
                handleClick(movie);
              }}
              className="banner_button"
            >
              My List
            </button>
          </div>
          <h1 className="banner_description">{movie?.overview}</h1>
        </div>
        <div className="banner_fadebottom"></div>
      </header>
      <div className={trailerUrl ? "banner_inc" : "ban"}>
        {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
      </div>
      {data.show && (
        <Row
          title="SHOWING RESULTS"
          fetchUrl={`${request.fetchMovie}query=${data.query}&page=1`}
          closebtn
        />
      )}
    </>
  );
};

export default Banner;
