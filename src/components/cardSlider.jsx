import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Keyboard } from "swiper";
import { AiOutlineStar, AiFillStar } from "react-icons/ai";
import "./styles/index.css";
import "swiper/css";
import "swiper/css/pagination";
const slide = (props) => {
    // localStorage.clear();
    const { data, label } = props;

    if (data.length === 0) return null;
    const [clicked, setClicked] = useState(Array(data.length).fill(false));

    const handleClick = (index) => {
        const newClicked = [...clicked];
        newClicked[index] = !newClicked[index];
        setClicked(newClicked);

        if(label === "Albums" ){
            console.log(data[index].data.name);
            // let localData = data[index].data.name;
        }
        else if(label === "Artists" ){
            console.log(data[index].data.profile.name);
        }
        else if(label === "Episodes" ){
            console.log(data[index].data.contentRating.label);
        }
        else if(label === "Playlist" ){
            console.log(data[index].data.name);
        }
        else if(label === "Podcasts" ){
            console.log(data[index].data.name);
        }

        // if (newClicked[index] === true)
        //     localStorage.setItem(localData, label);
        // else
        //     localStorage.removeItem(data[index].data.name);

    };
    return (
        <>
            {/* {console.log(localStorage)} */}
            <div className="h-full pt-10 pb-10 overflow-visible">
                <Swiper
                    slidesPerView={4}
                    spaceBetween={40}
                    centeredSlides={true}
                    pagination={{
                        clickable: true,
                    }}

                    keyboard={true}
                    modules={[Pagination, Keyboard]}
                    className="rounded-lg p-10 h-[600px]"
                >

                    {data.map((item, index) => {
                        return (
                            <>

                                <SwiperSlide key={index} className="smallSlider cursor-pointer">
                                    <div className="relative h-[500px] w-[300px] mt-5 rounded-lg bg-gray-800 shadow-md"
                                        onClick={() => handleClick(index)}
                                    >
                                        {label === "Albums" || label === "Podcasts" || label === "Episodes" ? <img
                                            src={item.data.coverArt.sources[2].url}
                                            alt={item.name}
                                            className="p-5 rounded-lg"
                                        /> :
                                            label === "Artists" ? <img
                                                src={item.data.visuals.avatarImage.sources[2].url}
                                                alt={item.name}
                                                className="p-5 rounded-lg"
                                            /> :
                                                label === "Playlist" ? <img
                                                    src={item.data.images.items[0].sources[0].url}
                                                    alt={item.name}
                                                    className="p-5 rounded-lg"
                                                /> :
                                                    null
                                        }
                                        <span
                                            className="absolute right-4 top-[65%] text-2xl opacity-5 p-1"
                                        >
                                            {clicked[index] ? <AiFillStar className="inline-block text-yellow-500" /> : <AiOutlineStar className="inline-block  text-yellow-200" />}
                                        </span>
                                        <div className=" relative top-3 opacity-10 p-5 capitalize text-white text-ellipsis ">
                                            <h1 >
                                                {label === "Albums" || label === "Podcasts" || label === "Episodes" ? item.data.name.split('(')[0] ? item.data.name.split('(')[0] : item.data.name
                                                    : label === "Artists" ? item.data.profile.name
                                                        : label === "Playlist" ? item.data.name :
                                                            null
                                                }
                                            </h1>
                                            <h2 className="text-sm pt-2">
                                                {label === "Albums" ? item.data.artists.items[0].profile.name
                                                    : label === "Episodes" ? item.data.contentRating.label
                                                        : label === "Playlist" ? item.data.owner.name
                                                            : label === "Podcasts" ? item.data.publisher.name
                                                                : null}
                                            </h2>
                                            <h3 className="text-sm pt-2">
                                                {label === "Albums" ? item.data.date.year
                                                    : label === "Episodes" ? new Date(item.data.releaseDate.isoString).toLocaleString().split(",")[0]
                                                        : label === "Podcasts" ? item.data.mediaType
                                                            : null}
                                            </h3>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            </>
                        );
                    })}

                </Swiper>
            </div>
        </>
    )

};
export default slide;