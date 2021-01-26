import { connect } from "react-redux";
import { removeFromPlaylist } from "../store";
import ConfirmationFooter from "./ConfirmationFooter";
import DeleteIcon from "@material-ui/icons/Delete";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";

//This compoonent renders all items in playlist, the data for which is brought in from the redux playlist state. There is the option to remove any item from the playlist.
const Playlist = ({ playlist, removeFromPlaylist }) => {
  const playlistNum = playlist.length;
  const removeItem = async (movie) => {
    await removeFromPlaylist(movie);
  };

  const checkout = () => {
    alert("Playing Movies");
  };

  const displayPlaylist = () => {
    return playlist.map((item) => {
      return (
        <Grid item>
          <div key={item.imdbID} className="container">
            <div>
              <img
                style={{ width: "100%", maxWidth: "300px" }}
                src={item.Poster}
                alt="thumbnail"
              ></img>
            </div>

            <Button
              variant="contained"
              color="secondary"
              startIcon={<DeleteIcon />}
              onClick={() => {
                removeItem(item);
              }}
            >
              Remove
            </Button>
          </div>
        </Grid>
      );
    });
  };

  return (
    <Grid
      container
      spacing={0}
      align="center"
      justify="center"
      direction="column"
    >
      {playlist.length ? (
        <Grid item>
          <Grid item>
            <div className="container">
              <Typography variant="h7">
                You have {playlistNum}
                {playlistNum > 1 ? " movies" : " movie"} in your playlist
              </Typography>
            </div>
          </Grid>
          {displayPlaylist()}
        </Grid>
      ) : (
        <Grid item>
          <div className="container">
            <Typography variant="h7">
              There Are No Items In Your Playlist
            </Typography>
          </div>
        </Grid>
      )}
      {playlistNum > 0 ? (
        <div id="buttonStyle">
          <Button variant="contained" color="primary" onClick={checkout}>
            Play All Movies
          </Button>
        </div>
      ) : null}
      <Typography variant="h7">
        <ConfirmationFooter />
      </Typography>
    </Grid>
  );
};

const mapState = (state) => ({
  playlist: state.playlist,
});

const mapDispatch = (dispatch) => ({
  removeFromPlaylist: (movie) => dispatch(removeFromPlaylist(movie)),
});
const ConnectedToPlaylist = connect(mapState, mapDispatch)(Playlist);
export default ConnectedToPlaylist;
