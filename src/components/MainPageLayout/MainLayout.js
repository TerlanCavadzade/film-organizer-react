import Collection from "../CollectionBox/Collection";
import List from "../MovieList/List";
import SearchBox from "../SearchBox/SearchBox";
import classes from "./MainLayout.module.css";

const MainLayout = () => {
  return (
    <div className={classes.container}>
      <div className={classes.leftSide}>
        <SearchBox />
        <List />
      </div>
      <div className={classes.rightSide}>
        <Collection />
      </div>
    </div>
  );
};

export default MainLayout;
