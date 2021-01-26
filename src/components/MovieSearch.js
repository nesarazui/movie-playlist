import React, { useState, useCallback } from "react";
import { debounce } from "lodash";
import axios from "axios";
import { connect } from "react-redux";
import { updateMovieResults } from "../store";
import TextField from "@material-ui/core/TextField";
import SearchIcon from "@material-ui/icons/Search";
import InputAdornment from "@material-ui/core/InputAdornment";

//This component renders the movie search bar, which involves a controlled form, utilizing useState to reflect input value.
//Debouncing is used to limit API calls to OMDB by deferring the call by 1 second upon each keystroke.
//Data received from OMDB is stored in Redux.
//The resulting movie data is rendered in the DisplayMovieThumbnails component.

const MovieSearch = ({ updateMovieResults }) => {
  const [title, setTitle] = useState("");

  const handleChange = (event) => {
    let letter = event.target.value;
    setTitle(letter);
    if (letter.length !== 0) {
      debouncing(letter);
    }
  };

  const debouncing = useCallback(
    debounce((letter) => searchOMDB(letter), 1000),
    []
  );

  const searchOMDB = async (letter) => {
    try {
      const response = await axios.get(
        `https://www.omdbapi.com/?apikey=6befe58e&s=${letter}`
      );
      if (response.data.Error) {
        await updateMovieResults([{ Error: response.data.Error }]);
      } else {
        const movieData = response.data.Search;
        await updateMovieResults(movieData);
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <TextField
      fullWidth
      color="primary"
      label="Search For A Movie"
      type="search"
      variant="outlined"
      value={title}
      onChange={handleChange}
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <SearchIcon />
          </InputAdornment>
        ),
      }}
    />
  );
};

const mapDispatch = (dispatch) => ({
  updateMovieResults: (movieData) => dispatch(updateMovieResults(movieData)),
});

const ConnectedToMovieSearch = connect(null, mapDispatch)(MovieSearch);
export default ConnectedToMovieSearch;
