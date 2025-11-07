import React, { useState } from 'react'

const Object = () => {
    const [movie,setMovie] = useState({
        title : "Equalizer 3",
        ratings : 7,
    });
    const updateOneMovie = () => setMovie({...movie,title:'Wanted',ratings : 9})
  return (
    <section>
        <h1> Movie Name : {movie.title}</h1>
        <p>Rating : {movie.ratings}</p>
        <button onClick={updateOneMovie}>Add Movie</button>
    </section>
  )
}

export default Object