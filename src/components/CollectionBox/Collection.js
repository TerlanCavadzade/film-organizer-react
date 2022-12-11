import { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCollection } from "../../store/CollectionSlice";
import uuid from "uuid";

import { TransitionGroup, CSSTransition } from "react-transition-group";

import Button from "../Ui/Button";
import classes from "./Collection.module.css";
import CollectionListItem from "./CollectionListItem";
import { clearList } from "../../store/MovieSlice";

const Collection = () => {
  const [value, setValue] = useState("");

  const movieList = useSelector((state) => state.movieSlice.movieList);
  const dispatch = useDispatch();

  const collectionId = useRef(uuid());
  const formSubmitHandler = (e) => {
    e.preventDefault();

    const data = {
      id: collectionId.current,
      collectionName: value,
      movieList
    };

    dispatch(addToCollection(data));
    dispatch(clearList());
    setValue("");
  };

  const inputChangeHandler = (e) => {
    setValue(e.target.value);
  };

  console.log(movieList);

  return (
    <form onSubmit={formSubmitHandler} className={classes.container}>
      <input
        value={value}
        onChange={inputChangeHandler}
        type="text"
        placeholder="Collection Name"
      />
      <TransitionGroup className={classes.ul}>
        {movieList.map((movie) => (
          <CSSTransition classNames="fade" key={movie.id} timeout={500}>
            <CollectionListItem name={movie.name} id={movie.id} />
          </CSSTransition>
        ))}
      </TransitionGroup>
      <Button disabled={!value}>Save Collection</Button>
    </form>
  );
};

export default Collection;
