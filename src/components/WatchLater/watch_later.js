const WatchLater = (prop) => {
    const deleteVideo = (video) => {
    const updatedList = prop.watchLater.filter((vid)=> vid.id !== video.id);
    prop.setWatchLater(updatedList);
  }

    return (
      <div>
         <ul className="list-container">
          {prop.watchLater?.length > 0 ?
          prop.watchLater?.map((el)=>{
            return <div className='list-sub-container'>
            <button type="button" className="btn btn-danger" onClick={()=>deleteVideo(el)}
            >Delete</button>
            <li className="list">{el.title}</li> </div>
          }) 
          : "There are no added movies yet..." }
        </ul>
      </div>
    );
  }
  
  export default WatchLater;
  