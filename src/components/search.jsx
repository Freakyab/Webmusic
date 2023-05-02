import React, { useState, useContext, useEffect } from "react";
import dataContext from "../assets/context";
import CardSlider from "./cardSlider";
const Search = () => {
    const [search, setSearch] = useState("");
    const [result, setResult] = useState([]);
    const [update, setUpdate] = useState(false);
    const [index, setIndex] = useState(0);
    const option = ["Albums", "Artists", "Episodes", "Playlist"];
    const data = useContext(dataContext);
    const handleChange = (e) => {
        if (data.length === 0) return;
        console.log(e.target.value);
        if (e.target.value === option[0]) {
            setIndex(0);
            setResult(data.albums.items.filter((item) => {
                if (item.data.name.toLowerCase().includes(search.toLowerCase())) {
                    return data.albums.items;
                }
            }));
        }
        else if (e.target.value === option[1]) {
            setResult(data.artists.items.filter((item) => {
                setIndex(1);
                console.log(item.data.profile.name);
                if (item.data.profile.name.toLowerCase().includes(search.toLowerCase())) return data.artists.items;
            }));
        }
        else if (e.target.value === option[2]) {
            setResult(data.episodes.items.filter((item) => {
                setIndex(2);
                if (item.data.name.toLowerCase().includes(search.toLowerCase())) return data.episodes.items;
            }));
        }
        else if (e.target.value === option[3]) {
            setResult(data.playlists.items.filter((item) => {
                setIndex(3);
                if (item.data.name.toLowerCase().includes(search.toLowerCase())) return data.playlists.items;
            }));
        }

        else {
            return;
        }
    }
    useEffect(() => {
        if (index === 0)
            handleChange({ target: { value: option[0] } });
        else if (index === 1)
            handleChange({ target: { value: option[1] } });
        else if (index === 2)
            handleChange({ target: { value: option[2] } });
        else if (index === 3)
            handleChange({ target: { value: option[3] } });
    }, [update])
    return (
        <>
            <div className="font-cursive h-full w-full overflow-hidden">
                <div className="flex flex-col items-center justify-center p-5 m-3">
                    <h1 className="text-3xl font-bold text-gray-700 mb-5 capitalize">
                        Search
                    </h1>
                    <hr className="text-black border-2 border-black w-1/2 m-auto mb-5" />
                    <input type="text" placeholder="Search" className="border-2 border-gray-200 rounded-md p-2 m-2 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-transparent" onChange={(e) => {
                        setUpdate(!update);
                        setSearch(e.target.value)
                    }} />
                    <select onChange={handleChange} className="border-2 border-gray-200 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-transparent">
                        <option value={option[0]}>Ablum</option>
                        <option value={option[1]}>Artist</option>
                        <option value={option[2]}>Episode</option>
                        <option value={option[3]}>Playlist</option>
                    </select>
                </div>
                {result.length > 0 ?
                    <CardSlider data={result} label={option[index]} /> : <h1> No result found</h1>}

            </div>
        </>
    )
}

export default Search;