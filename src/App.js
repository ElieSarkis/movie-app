import Home from "./components/Home/home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Favorites from "./components/Favorites/favorites";
import WatchLater from "./components/WatchLater/watch_later";
import ErrorPage from "./components/ErrorPage/error_page";
import Navbar from "./components/Navbar/navbar";
import { useEffect, useState } from "react";
import axios from "axios";

const App = () => {
  const [favoriteMovies, setFavoriteMovies]=useState();
  const [watchLater, setWatchLater] = useState([]);
  const [movieResults, setMovieResults]=useState([]);
  const [pageNum, setPageNum]=useState(1);
  const [totalNumMovies,setTotalNumMovies] = useState(0);

  useEffect(()=>{
    const key="5377341de24ab83ca7d1e45d93b38afe";
    const url=`https://api.themoviedb.org/3/movie/now_playing?api_key=${key}&language=en-US&page=${pageNum}`;
    axios.get(url).then((res)=>{
      console.log("res ", res);
      let movies = res.data.results;
      setTotalNumMovies(res.data.total_results);
      movies.map((el)=>{
        el['is_favorite'] = false;
      });
      setMovieResults(movies);
    }).catch((err)=>{
      console.log("err ", err);
    }) 
  }, [])

  useEffect(()=>{
    const key="5377341de24ab83ca7d1e45d93b38afe";
    const url=`https://api.themoviedb.org/3/movie/now_playing?api_key=${key}&language=en-US&page=${pageNum}`;
    axios.get(url).then((res)=>{
      console.log("res ", res);
      let movies = res.data.results;
      setTotalNumMovies(res.data.total_results);
      setMovieResults(movies);
    }).catch((err)=>{
      console.log("err ", err);
    }) 
  }, [pageNum])

  const updateMovieResults = (row) => {
    const finalResult = [movieResults];
    const elementPos = finalResult[0]?.map((el) => el.id).indexOf(row.id);
    const objectFound = finalResult[0][elementPos];
    objectFound['is_favorite'] = !objectFound['is_favorite'];
    setMovieResults(finalResult[0]);
    const filteredMovies = [];
    finalResult[0].forEach((el)=>{
      if(el.is_favorite === true){
        filteredMovies.push(el);
      }
    })
    getFavoriteMovies(filteredMovies);
   }

  const getFavoriteMovies = (data) => {
    setFavoriteMovies(data);
  }

  const getWatchLaterMovies = (data) => {
    setWatchLater(data);
  }

  // const updatePageNum = () => {
  //   setPageNum()
  // }

  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home updateMovieResults={(data)=>updateMovieResults(data)}
        getFavoriteMovies={(data)=>getFavoriteMovies(data)} movieResults={movieResults} favoriteMovies={favoriteMovies}
        totalNumMovies={totalNumMovies} pageNum={pageNum} setPageNum={setPageNum} />}/>
        <Route path="/favorites" element={<Favorites favoriteMovies={favoriteMovies}
        getWatchLaterMovies={(data)=>getWatchLaterMovies(data)} watchLater={watchLater} />}/>
        <Route path="/watchlater" element={<WatchLater watchLater={watchLater} setWatchLater={setWatchLater} />}/>
        <Route path="*" element={<ErrorPage />}/>
    </Routes>
    </Router>
  );
}

export default App;
