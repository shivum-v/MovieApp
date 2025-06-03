import './App.css';
import MovieCard from './components/movieCard';

function App() {
  return (
    <>
      <MovieCard movie={{title: "Batman", release_date: "2022"}}/>
      <MovieCard movie={{title: "Home Alone", release_date: "2013"}}/>
    </>
  )
}

export default App
