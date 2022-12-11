import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import classes from "./CollectionList.module.css";

const CollectionList = () => {
  const movieCollection = useSelector(
    (state) => state.collectionSlice.movieCollection
  );

  return (
    <div className={classes.container}>
      <h2>All Collections</h2>
      <ul className={classes.linkContainer}>
        {movieCollection.map((collection) => (
          <li key={collection.id}>
            <Link to={collection.id}>{collection.collectionName}</Link>
          </li>
        ))}
      </ul>
      {movieCollection.length === 0 && (
        <p>Not Any Collections Found. Add Collections</p>
      )}
    </div>
  );
};

export default CollectionList;
