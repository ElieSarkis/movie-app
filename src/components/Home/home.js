import axios from "axios";
import { useEffect, useState } from "react";
import MoviesTable from "../MoviesTable/movies_table";
import './home.css';

function Home(prop) {

  const [searchInput, setSearchInput]=useState("");
  // const [movieResults, setMovieResults]=useState([]);
  const [filteredResults, setFilteredResults]=useState([]);

  useEffect(()=>{
    // console.log("MOVIE RES ", prop.favoriteMovies)
    // const key="5377341de24ab83ca7d1e45d93b38afe";
    // const url=`https://api.themoviedb.org/3/movie/now_playing?api_key=${key}&language=en-US&page=${pageNum}`;
    // axios.get(url).then((res)=>{
    //   console.log("res ", res);
    //   let movies = res.data.results;
    //   movies.map((el)=>{
    //     el['is_favorite'] = false;
    //   });
    //   setMovieResults(movies);
    //   console.log("movies ", movies);
    // }).catch((err)=>{
    //   console.log("err ", err);
    // }) 
  }, [])

  const setTextInput = (event) => {
    setSearchInput(event.target.value);
  }

  const filterMoviesData = () => {
    const filteredMovies = prop.movieResults.filter((el) => el.title.toLowerCase().includes(searchInput.toLowerCase()));
    setFilteredResults(filteredMovies);
  }

  // const updateMovieResults = (row) => {
  //  const finalResult = [...prop.movieResults];
  //  const elementPos = finalResult.map(el => el.id).indexOf(row.id);
  //  const objectFound = finalResult[elementPos];
  //  objectFound['is_favorite'] = !objectFound['is_favorite'];
  //  setMovieResults(finalResult);

  //  const filteredMovies = [];
  //  finalResult.forEach((el)=>{
  //    if(el.is_favorite === true){
  //      filteredMovies.push(el);
  //    }
  //  })
  //  prop.getFavoriteMovies(filteredMovies);
  // }

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
        updateMovieResults={(row)=>prop.updateMovieResults(row)} totalNumMovies={prop.totalNumMovies} pageNum={prop.pageNum} setPageNum={prop.setPageNum}  />
      </div>
      </div>
    );
  }
  
  export default Home;
  