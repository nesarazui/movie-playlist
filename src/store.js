import { createStore } from "redux";

//ACTION TYPES
const UPDATE_RESULTS = "UPDATE_RESULTS";
const ADD_TO_PLAYLIST = "ADD_TO_PLAYLIST";
const REMOVE_FROM_PLAYLIST = "REMOVE_FROM_PLAYLIST";

//ACTION CREATORS
export const updateMovieResults = (movieResults) => ({
  type: UPDATE_RESULTS,
  movieResults,
});

export const addToPlaylist = (movie) => ({
  type: ADD_TO_PLAYLIST,
  movie,
});

export const removeFromPlaylist = (movie) => ({
  type: REMOVE_FROM_PLAYLIST,
  movie,
});
//INITIAL STATE
const initialState = {
  searchResults: [],
  playlist: [],
};

//REDUCER
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_RESULTS:
      return { ...state, searchResults: action.movieResults };
    case ADD_TO_PLAYLIST:
      const playlistClone = [...state.playlist, action.movie];
      return { ...state, playlist: playlistClone };
    case REMOVE_FROM_PLAYLIST:
      const playlistCloneToUpdate = [...state.playlist];
      const updatedPlaylist = playlistCloneToUpdate.filter((movie) => {
        if (movie.imdbID === action.movie.imdbID) {
          return false;
        } else {
          return true;
        }
      });
      return { ...state, playlist: updatedPlaylist };
    default:
      return state;
  }
};

export default createStore(reducer);
