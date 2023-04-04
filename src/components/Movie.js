import { useEffect, useState } from 'react';
import { deleteDoc, doc, updateDoc } from 'firebase/firestore';
import { db } from '../config/firebase';

export const Movie = ({ moviesListRef, movie }) => {

  const [updatedName, setUpdatedName] = useState("")

  const deleteMovie = async () =>{
    const movieDoc = doc(db, "movies", movie.id);
    await deleteDoc(movieDoc);
  }
  
  const updateMovie = async () =>{
    const movieDoc = doc(db, "movies", movie.id);
    await updateDoc(movieDoc, {
      name: updatedName
    });
  };

  return (
      <div className="movie">
        <h1 style={{color: movie.oscar? "green": "red"}}>{movie.name}</h1>
        <p>{movie.release}</p>

        <button onClick={deleteMovie}>Delete Movie</button>

        <input placeholder='Set New Title...' onChange={(e) => setUpdatedName(e.target.value)} type="text" />
        <button type='submit' onClick={updateMovie}>Submit</button>
      </div>
  )
}
