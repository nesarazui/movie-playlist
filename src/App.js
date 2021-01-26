import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import Home from "./components/Home";
import ConnectedToPlaylist from "./components/Playlist";
import Container from "@material-ui/core/Container";

function App() {
  return (
    <Container maxWidth="lg">
      <div className="App">
        <Router>
          <Navigation />
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/playlist">
            <ConnectedToPlaylist />
          </Route>
        </Router>
      </div>
    </Container>
  );
}

export default App;
