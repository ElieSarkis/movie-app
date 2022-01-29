const WatchLater = (prop) => {
  console.log("watch later ", prop)

  const deleteVideo = (video) => {
    // setWatchLater
    console.log("video ", video);
    const updatedList = prop.watchLater.filter((vid)=> vid.id !== video.id);
    console.log("updated list ", updatedList);
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
          : "There are no filtered movies yet..." }
        </ul>
      </div>
    );
  }
  
  export default WatchLater;
  