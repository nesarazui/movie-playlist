import React from "react";
import { connect } from "react-redux";
import PlaylistPlayIcon from "@material-ui/icons/PlaylistPlay";
import { Link } from "react-router-dom";
import Badge from "@material-ui/core/Badge";
import { withStyles } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";

//This component renders the playlist icon along with a styled badge that reflects the current number of playlist items.
//The playlist is accessed via props from the redux playlist state.

const StyledBadge = withStyles(() => ({
  badge: {
    right: -3,
    top: 5,
    border: `2px solid white`,
    padding: "0 4px",
  },
}))(Badge);

const PlaylistPreview = ({ playlist }) => {
  return (
    <div style={{ width: "100%" }}>
      <Link to="/playlist">
        <IconButton aria-label="playlist">
          <StyledBadge badgeContent={playlist.length} color="secondary">
            <PlaylistPlayIcon color="secondary" fontSize="large" />
          </StyledBadge>
        </IconButton>
      </Link>
    </div>
  );
};

const mapState = (state) => ({
  playlist: state.playlist,
});
const ConnectedToPlaylistPreview = connect(mapState)(PlaylistPreview);

export default ConnectedToPlaylistPreview;
