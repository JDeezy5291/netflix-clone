import './App.css';
import Row from './Row'
import Banner from './Banner'
import requests from './requests'

function App() { 
  return (
    <div className="App">
<<<<<<< HEAD
      {/* nav */}
      {/* banner */}
      <Banner />
      <Row 
      title="Netflix Originals" 
      fetchUrl={requests.fetchNetflixOriginals}
      isLargeRow 
      />
=======
      <h1>Title here</h1>
      <Row title="Netflix Originals" fetchUrl={requests.fetchNetflixOriginals} />
>>>>>>> 2881193b372305b474883688347b16d718c7884d
      <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
      <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
      <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
      <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
      <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} />
    </div>
  );
}

export default App;
