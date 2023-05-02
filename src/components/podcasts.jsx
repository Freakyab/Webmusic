import React from "react";
import dataContext from "../assets/context";
import HomeSlider from "./homeSlider";
import { useContext } from "react";
const Podcasts = () => {
    const data = useContext(dataContext);
    return (
        <>
            <HomeSlider data={data.podcasts.items} label={"Podcasts"} />
        </>
    );
};

export default Podcasts;