import { useState, useEffect } from 'react';
import { auth, db } from '../config/firebase';
import { collection, getDocs, addDoc } from 'firebase/firestore';
import { Movie } from './Movie';

export const CRUD = () => {
  const [movies, setMovies] = useState([]);
  const [newMovieName, setNewMovieName] = useState("");
  const [newMovieRelease, setNewMovieRelease] = useState(0);
  const [newMovieOscar, setNewMovieOscar] = useState(false);

  const moviesListRef = collection(db , "movies");

  const getMovieList = async () => {
    try {
      const data = await getDocs(moviesListRef);
      const filteredData = data.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id
      }))
      setMovies(filteredData);
    } catch (err) {
      console.error(err);
    }
  }
  
  const onSubmitNewMovie = async () =>{
    try {
      await addDoc(moviesListRef, {
        name: newMovieName,
        release: newMovieRelease,
        oscar: newMovieOscar,
        uid: auth?.currentUser?.uid,
      });
  
      getMovieList();
    } catch (err) {
      console.error(err);
    }
  }

  useEffect(() => {
    getMovieList();
  }, [onSubmitNewMovie]);


  return (
    <div className="crud">
      <div className="input__movie">
        <input placeholder="Movie name..." type="text" onChange={(e) => setNewMovieName(e.target.value)}/>
        <input placeholder='Release' type="number" onChange={(e) => setNewMovieRelease(Number(e.target.value))}/>
        <label htmlFor="oscar">Did the Movie win an Oscar?</label>
        <input checked={newMovieOscar} type="checkbox" id="oscar" onChange={(e) => setNewMovieOscar(e.target.checked)} />
        <button type="Submit" onClick={onSubmitNewMovie}>Submit</button>
      </div>
        <div className="display__movies">
          {movies.map((movie) => (
            <Movie key={movie.id} moviesListRef={moviesListRef} movie={movie} />
          ))}
        </div>
      </div>
  )
}