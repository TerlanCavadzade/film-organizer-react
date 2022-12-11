import classes from "./List.module.css";
import axios from "axios";
import ListItem from "./MovieListItem";

import { TransitionGroup, CSSTransition } from "react-transition-group";

import { useSelector } from "react-redux";
import { useEffect, useState } from "react";

const List = () => {
  const [data, setData] = useState([]);
  const name = useSelector((state) => state.movieSlice.movieName);

  useEffect(() => {
    axios("https://www.omdbapi.com/", {
      params: { apikey: "d3496eed", s: name }
    }).then((res) => setData(res.data.Search ?? []));
  }, [name]);

  return (
    <TransitionGroup component="ul" className={classes.ul}>
      {data.map((data) => (
        <CSSTransition key={data.imdbID} timeout={1000} classNames="fade">
          <ListItem
            name={data.Title + "(" + data.Year + ")"}
            img={data.Poster}
            id={data.imdbID}
          />
        </CSSTransition>
      ))}
    </TransitionGroup>
  );
};

export default List;
