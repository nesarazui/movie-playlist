import ConnectedToMovieSearch from "./MovieSearch";
import ConnectedToDisplayMovieThumbnails from "./DisplayMovieThumbnails";
import Grid from "@material-ui/core/Grid";

//This component renders the two child components: MovieSearch and DisplayMovieThumbnails.
const Home = () => {
  return (
    <div className="container">
      <Grid container>
        <Grid item xs={12}>
          <ConnectedToMovieSearch />
        </Grid>
      </Grid>
      <ConnectedToDisplayMovieThumbnails />
    </div>
  );
};

export default Home;
