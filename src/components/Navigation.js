import React from "react";
import { Link } from "react-router-dom";
import ConnectedToPlaylistPreview from "./PlaylistPreview";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import HomeIcon from "@material-ui/icons/Home";
import Typography from "@material-ui/core/Typography";

//This component renders the navigation bar that remains persistent across both of the existing routes ('/' and '/playlist')
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  title: {
    display: "block",
    flexGrow: 1,
  },
  playlist: {
    position: "relative",
  },
}));

const Navigation = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Link to="/">
            <HomeIcon color="secondary" fontSize="large" />
          </Link>
          <Typography variant="h6" className={classes.title} noWrap>
            The Movie Store
          </Typography>
          <div className={classes.playlist}>
            <ConnectedToPlaylistPreview />
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navigation;
