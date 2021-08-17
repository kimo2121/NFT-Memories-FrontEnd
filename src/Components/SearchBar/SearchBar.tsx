import React from "react";
import {
  alpha,
  makeStyles,
  Theme,
  createStyles,
} from "@material-ui/core/styles";
import InputBase from "@material-ui/core/InputBase";
import SearchIcon from "@material-ui/icons/Search";
import { CollectionsBookmarkSharp } from "@material-ui/icons";

interface IProps {
  collectionFilter?: any;
  onChangeHandler?: any;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    grow: {
      flexGrow: 1,
    },
    search: {
      display: "flex",
      alignItems: "center",
      border: "1px solid #9F9F9F",
      position: "relative",
      borderRadius: "8px",
      backgroundColor: "#F9F9FB",
      padding: "1vh 0",

      "&:hover": {
        backgroundColor: "#D0D0DD",
      },
      marginRight: theme.spacing(2),
      marginLeft: 0,
      //   width: "20vw",
      [theme.breakpoints.up("sm")]: {
        margin: "0 auto",
        width: "27.79vw",
      },
    },
    searchIcon: {
      padding: theme.spacing(0, 0, 0, 2),
      height: "100%",
      color: "#9F9F9F",
      position: "relative",
      pointerEvents: "none",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    inputRoot: {
      color: "inherit",
    },
    inputInput: {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(0)}px)`,
      transition: theme.transitions.create("width"),
      width: "100%",
      [theme.breakpoints.up("md")]: {
        width: "20ch",
      },
    },
    sectionDesktop: {
      display: "none",
      [theme.breakpoints.up("md")]: {
        display: "flex",
      },
    },
    sectionMobile: {
      display: "flex",
      [theme.breakpoints.up("md")]: {
        display: "none",
      },
    },
  })
);

const PrimarySearchAppBar: React.FC<IProps> = ({
  onChangeHandler,
  collectionFilter,
}) => {
  const classes = useStyles();
  return (
    <div className={classes.grow}>
      <div
        className={classes.search}
        style={
          collectionFilter && {
            width: "280px",
            marginTop: "23px",
            // margin: "0 auto",
          }
        }
      >
        <div className={classes.searchIcon}>
          <SearchIcon />
        </div>
        <InputBase
          onChange={collectionFilter && onChangeHandler}
          placeholder={collectionFilter ? "Filter" : "Search…"}
          classes={{
            root: classes.inputRoot,
            input: classes.inputInput,
          }}
          inputProps={{ "aria-label": "search" }}
        />
      </div>
      <div className={classes.grow} />
    </div>
  );
};
export default PrimarySearchAppBar;
