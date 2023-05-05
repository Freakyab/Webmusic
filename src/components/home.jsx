import React, { useContext, useState } from "react";
import dataContext from "../assets/context";
const Home = (props) => {
    const {  setState,name } = props;
    const data = useContext(dataContext);
    const [display, setDisplay] = useState(false);
    return (
        <>
            <div className=" w-full h-[100vh]">
                <div className="flex flex-col justify-center content-center m-5 p-5 text-5xl font-semibold w-fit">
                    <h1>Hello {name},</h1>
                </div>
                <hr className="text-black border-2 border-black" />
                <h2 className="p-5 m-5 text-3xl ">
                    For your Day,</h2>
                <div className="grid grid-cols-7 gap-5 m-5 p-5 text-2xl">
                    <button className="w-40 h-[300px] ml-8 mt-10 shadow-md rounded-md hover:scale-105 transition duration-1000 ease-out"
                        onClick={() => setState("Albums")}
                    >
                        {display ? <img src={data.albums.items[7].data.coverArt.sources[0].url} alt="album" className="rounded-md object-fit w-full h-full transition duration-1000 ease-out"
                        /> : "albums"}

                    </button>
                    <button className="w-40 h-[300px] ml-8 mt-10 shadow-md rounded-md hover:scale-105 transition duration-1000 ease-out"
                        onClick={() => setState("Artists")}
                        >
                        {display ? <img src={data.artists.items[5].data.visuals.avatarImage.sources[2].url} alt="album" className="rounded-md object-fit w-full h-full transition duration-1000 ease-out"
                        /> : "artists"}
                    </button>
                    <button className="w-40 h-[300px] ml-8 mt-10 shadow-md rounded-md hover:scale-105 transition duration-1000 ease-out"
                        onClick={() => setState("Episodes")}
                    >
                        {display ? <img src={data.albums.items[0].data.coverArt.sources[0].url} alt="album" className=" transition duration-1000 ease-out"
                        /> : "episodes"}
                    </button>
                    <button className="w-40 h-[300px] ml-8 mt-10 shadow-md rounded-md hover:scale-105 transition duration-1000 ease-out"
                        onClick={() => setState("Playlist")}
                        >
                        {display ? <img src={data.albums.items[0].data.coverArt.sources[0].url} alt="album" className=" transition duration-1000 ease-out"
                        /> : "playlist"}
                    </button>
                    <button className="w-40 h-[300px] ml-8 mt-10 shadow-md rounded-md hover:scale-105 transition duration-1000 ease-out"
                        onClick={() => setState("Podcasts")}
                    >
                        {display ? <img src={data.albums.items[0].data.coverArt.sources[0].url} alt="album" className=" transition duration-1000 ease-out"
                        /> : "podcasts"}
                    </button>
                </div>
            </div>
        </>
    );
};

export default Home;