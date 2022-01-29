const WatchLater = (prop) => {
  console.log("watch later ", prop)
    return (
      <div>
         <ul className="list-container">
          {prop.watchLater?.length > 0 ?
          prop.watchLater?.map((el)=>{
            return <div className='list-sub-container'><button type="button" className="btn btn-info"
            >Watch</button>
            <li className="list">{el.title}</li> </div>
          }) 
          : "There are no filtered movies yet..." }
        </ul>
      </div>
    );
  }
  
  export default WatchLater;
  