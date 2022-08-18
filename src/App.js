import "./App.css";
import Row from "./Row";
import Banner from "./Banner";
import Navbar from "./Navbar";
import request from "./requests";
import NoteState from "./NoteState";
function App() {
  return (
    <NoteState>
      <div className="App">
        <Navbar />
        <Banner />
        <Row
          title="NETFLIX ORIGINALS"
          fetchUrl={request.fetchNetflixOriginal}
          isLargeRow
        />
        <Row title="TRENDING NOW" fetchUrl={request.fetchTopRated} />
        <Row title="POPULAR MOVIES" fetchUrl={request.fetchPopular} />
        <Row title="HORROR MOVIES" fetchUrl={request.fetchHorrorMovies} />
        <Row title="ACTION MOVIES" fetchUrl={request.fetchActionMovies} />
        <Row title="ROMANTIC MOVIES" fetchUrl={request.fetchRomanceMovies} />
        <Row title="COMEDY MOVIES" fetchUrl={request.fetchComedyMovies} />
      </div>
    </NoteState>
  );
}

export default App;
