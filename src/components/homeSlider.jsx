import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "./styles/index.css";
import "swiper/css";
import "swiper/css/pagination";
import CardSlider from "./cardSlider";
import { Pagination, Autoplay } from "swiper";
const HomeSlider = (props) => {
    const { data, label } = props;
    return (
        <>
            <div className="  text-black font-cursive h-full w-full overflow-hidden">
                <h1 className="flex flex-col justify-center font-semibold content-center m-auto p-5 w-fit text-5xl">
                    {label}</h1>
                <hr className="text-black border-2 border-black w-1/2 m-auto" />
                <div className=" w-full flex justify-center p-10">
                    <Swiper
                        spaceBetween={30}
                        centeredSlides={true}
                        pagination={{
                            dynamicBullets: true,
                        }}
                        autoplay={{
                            delay: 2500,
                            disableOnInteraction: false,
                        }}
                        modules={[Autoplay, Pagination]}
                        className="w-[800px] h-[500px] rounded-lg shadow-2xl shadow-black "
                    >
                        {data.map((item, index) => {
                            return (
                                <SwiperSlide key={index}>
                                    {label === "Albums" || label === "Podcasts" || label === "Episodes" ? <img
                                        src={item.data.coverArt.sources[2].url}
                                        alt={item.name}
                                        className="rounded-lg object-fill w-full h-full origin-center transform hover:scale-110 transition duration-500 ease-in-out"
                                    />
                                        : label === "Artists" ? <img
                                            src={item.data.visuals.avatarImage.sources[2].url}
                                            alt={item.name}
                                            className="rounded-lg object-fill w-full h-full origin-center transform hover:scale-110 transition duration-500 ease-in-out "
                                        />
                                            :
                                                label === "Playlist" ? <img
                                                    src={item.data.images.items[0].sources[0].url}
                                                    alt={item.name}
                                                    className="rounded-lg object-fill w-full h-full origin-center transform hover:scale-110 transition duration-500 ease-in-out"
                                                /> :
                                                   
                                                null
                                    }
                                    <div className="absolute bottom-0 left-0 w-full h-3/2 bg-gradient-to-t from-black to-transparent rounded-lg ">
                                        <h1 className="text-white text-2xl font-bold p-5">
                                            {label === "Albums" || label === "Podcasts" || label === "Episodes" ?
                                                item.data.name
                                                : label === "Artists" ?
                                                    item.data.profile.name
                                                    :  null}


                                        </h1>
                                        <h2 className="text-white text-xl font-bold p-5 pt-0">

                                            {label === "Albums" ? item.data.artists.items.map(
                                                (artist, index) => {
                                                    return (
                                                        <span key={index}>{artist.profile.name} </span>
                                                    );
                                                }
                                            )
                                                : label === "Episodes" ? Math.round(item.data.duration.totalMilliseconds / (1000 * 60)) + " minutes long"
                                                    : label === "Podcasts" ? item.data.publisher.name
                                                        :null
                                            }</h2>
                                        <h3 className="text-white text-xl font-bold p-5 pt-0">
                                            {label === "Albums" ? item.data.date.year
                                                : null}
                                        </h3>
                                    </div>

                                </SwiperSlide>
                            );
                        })}
                    </Swiper>
                </div>
                <h2 className="flex flex-col justify-center font-semibold content-center m-auto p-5 mt-5  w-fit text-5xl">
                    {label} for you
                </h2>
                <hr className="text-black border-2 border-black w-1/2 m-auto" />
                <CardSlider data={data} label={label} />
            </div>
        </>
    )
};

export default HomeSlider;