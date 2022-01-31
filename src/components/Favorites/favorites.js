import './favorites.css';

const Favorites = (prop) => {
  const favoriteMovies = prop.favoriteMovies;
  const watch_later = [...prop?.watchLater];

  const addToWatchLater = (el) => {
    const isAlreadyPicked = watch_later.some((movie)=>movie.id === el.id);
    if(isAlreadyPicked===false)
    watch_later.push(el);
    prop.getWatchLaterMovies(watch_later);
  }

    return (
      <div>
        <ul className="list-container">
          {favoriteMovies?.length > 0 ?
          favoriteMovies?.map((el)=>{
            return <div className='list-sub-container'><button type="button" className={`btn btn-info`}
            onClick={()=>addToWatchLater(el)}>Watch</button>
            <li className="list">{el.title}</li> </div>
          }) 
          : "There are no filtered movies yet..." }
        </ul>
      </div>
    );
  }
  
  export default Favorites;
  