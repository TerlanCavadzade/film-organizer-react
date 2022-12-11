import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import classes from "./CollectionWithId.module.css";

const Collection = () => {
  const params = useParams();
  const movieCollection = useSelector(
    (state) => state.collectionSlice.movieCollection
  );
  const findedCollection = movieCollection.find(
    (collection) => collection.id === params.id
  );

  const listClickHandler = (id) => {
    window.open(`https://www.imdb.com/title/${id}`);
  };

  return (
    <div className={classes.container}>
      <h2>{findedCollection.collectionName.toUpperCase()}</h2>
      <ul>
        {findedCollection.movieList.map((movie) => (
          <li key={movie.id} onClick={() => listClickHandler(movie.id)}>
            {movie.name}
          </li>
        ))}
      </ul>
      <Link to="/collection">Back To Collections</Link>
    </div>
  );
};

export default Collection;
