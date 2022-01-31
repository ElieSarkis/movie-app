import { useEffect, useState } from "react";
import MoviesTable from "../MoviesTable/movies_table";
import './home.css';

function Home(prop) {

  const [searchInput, setSearchInput]=useState("");
  const [filteredResults, setFilteredResults]=useState([]);

  const setTextInput = (event) => {
    setSearchInput(event.target.value);
  }

  const filterMoviesData = () => {
    const filteredMovies = prop.movieResults.filter((el) => el.title.toLowerCase().includes(searchInput.toLowerCase()));
    setFilteredResults(filteredMovies);
  }

  useEffect(()=>{
    filterMoviesData();
  }, [searchInput])

    return (
      <div>
      <div className="container-fluid">
      <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"
      onChange={setTextInput} />
      </div>

      <div className="movies-table-container">
      <MoviesTable movieResults={filteredResults.length > 0 ? filteredResults : prop.movieResults}
        updateMovieResults={(row)=>prop.updateMovieResults(row)} />
      </div>
      </div>
    );
  }
  
  export default Home;
  