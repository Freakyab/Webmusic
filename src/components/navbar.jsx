import React from "react";

const Navbar = (props) => {
    const { setState } = props;
    return (
        <div className="fixed left-0 h-[100vh] w-40  flex flex-col justify-center items-center bg-blue-950 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10  border-gray-100 shadow-lg shadow-black">
            <a href="#home" className="text-white w-20 p-3 flex justify-center rounded-md mx-4 hover:text-gray-300 transition-all duration-300 hover:shadow-xl shadow-black"
                onClick={() => { setState("Home") }}
            >Home</a>
            <a href="#search" className="text-white w-20 p-3 flex justify-center rounded-md mx-4 hover:text-gray-300 transition-all duration-300 hover:shadow-xl shadow-black"
                onClick={() => { setState("Search") }}
            >Search</a>
            <a href="#playlist" className="text-white w-20 p-3 flex justify-center rounded-md mx-4 hover:text-gray-300 transition-all duration-300 hover:shadow-xl shadow-black"
                onClick={() => { setState("Playlist") }}
            >
                Playlist</a>
            <a href="#fav" className="text-white w-20 p-3 flex justify-center rounded-md mx-4 hover:text-gray-300 transition-all duration-300 hover:shadow-xl shadow-black"
            >Fav</a>
        </div>
    );
};

export default Navbar;
