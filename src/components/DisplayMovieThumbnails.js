import React from "react";
import { connect } from "react-redux";
import { addToPlaylist } from "../store";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import GridListTileBar from "@material-ui/core/GridListTileBar";
import Typography from "@material-ui/core/Typography";

//  This component renders each movie's thumbnail image, title and year for all matching results. These results are retrieved from Redux from the 'searchResults' state.
//  Clicking on any movie will add it to the playlist: this movie data is added to the 'playlist' state in redux.

const DisplayMovieThumbnails = ({ movieResults, addToPlaylist }) => {
  const addingToPlaylist = async (movie) => {
    await addToPlaylist(movie);
  };

  const displayMovieResults = () => {
    if (!movieResults.length) {
      return false;
    }
    if (movieResults[0].Error) {
      return <div>{movieResults[0].Error}</div>;
    }

    if (movieResults.length) {
      return (
        <div>
          <div className="container">
            <Typography variant="h7">
              {movieResults.length} Results Found: Click On A Movie To Add To
              Playlist
            </Typography>
          </div>
          <GridList cols={2}>
            {movieResults.map((movie) => {
              return (
                <GridListTile
                  key={movie.imdbID}
                  cols={1}
                  onClick={() => addingToPlaylist(movie)}
                  style={{ cursor: "pointer", padding: "10px" }}
                >
                  <img src={movie.Poster} alt="thumbnail" />
                  <GridListTileBar
                    title={movie.Title}
                    subtitle={<span>{movie.Year}</span>}
                  />
                </GridListTile>
              );
            })}
          </GridList>
        </div>
      );
    }
  };

  return <div>{displayMovieResults()}</div>;
};

const mapState = (state) => ({
  movieResults: state.searchResults,
});

const mapDispatch = (dispatch) => ({
  addToPlaylist: (movie) => dispatch(addToPlaylist(movie)),
});

const ConnectedToDisplayMovieThumbnails = connect(
  mapState,
  mapDispatch
)(DisplayMovieThumbnails);
export default ConnectedToDisplayMovieThumbnails;
