import React from "react";
import dataContext from "../assets/context";
import HomeSlider from "./homeSlider";
import { useContext } from "react";
const Albums = () => {
    const data = useContext(dataContext);
    return (
        <>
            <HomeSlider data={data.episodes.items} label={"Episodes"} />
        </>
    );
};

export default Albums;