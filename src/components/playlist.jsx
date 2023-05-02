import React from "react";
import dataContext from "../assets/context";
import HomeSlider from "./homeSlider";
import { useContext } from "react";
const Playlist = () => {
    const data = useContext(dataContext);
    return (
        <>
            <HomeSlider data={data.playlists.items} label={"Playlist"} />
        </>
    );
};

export default Playlist;