import React, { useState } from "react";
// import Playlist from "./playlist";
import Home from "./components/home";
import Navbar from "./components/navbar";
import Albums from "./components/albums";
import Search from "./components/search";
import Artists from "./components/artists";
import Episodes from "./components/episodes";
import Playlist from "./components/playlist";
import Podcasts from "./components/podcasts";
const App = () => {
  const [state, setState] = useState("Home");
  return (
    <>
      <div className="flex flex-row justify-center h-full bg-gradient-to-r from-blue-400 to-purple-600">
        <Navbar state={state} setState={setState} />
        <div className="w-48"></div>
        {state === "Home" ? <Home state={state} setState={setState} /> :
          state === "Albums" ? <Albums /> :
            state === "Search" ? <Search /> :
              state === "Artists" ? <Artists /> :
                state === "Episodes" ? <Episodes /> :
                  state === "Playlist" ? <Playlist /> :
                    state === "Podcasts" ? <Podcasts /> :
                      null}
      </div>
    </>
  )
}

export default App;