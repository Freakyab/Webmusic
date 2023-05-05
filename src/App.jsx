import { useState, useRef, useEffect } from "react";
import Home from "./components/home";
import Navbar from "./components/navbar";
import Albums from "./components/albums";
import Search from "./components/search";
import Artists from "./components/artists";
import Episodes from "./components/episodes";
import Playlist from "./components/playlist";
import Podcasts from "./components/podcasts";
const App = ({ token }) => {
  const isRun = useRef(false);
  const [data, setData] = useState(null);
  const [state, setState] = useState("Home");

  useEffect(() => {
    if (isRun.current) return;

    isRun.current = true;
    const config = {
      method: "GET",
      headers: {
        authorization: `Bearer ${token}`,
      },
    };
      fetch("https://freaky-api.vercel.app/Spotify", config).then((res) => {
        if (res.status === 200) {
          res.json().then((data) => {
            setData(data.name);
          });
        } else {
          console.log(res);
        }
      }
      );
  }, []);

  return (
    <>
      <div className="flex flex-row justify-center h-full bg-gradient-to-r from-blue-400 to-purple-600">
        <Navbar state={state} setState={setState} />
        <div className="w-48"></div>
        {state === "Home" ? <Home state={state} setState={setState} name={data} /> :
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