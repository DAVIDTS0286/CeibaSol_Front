import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { IoIosArrowDroprightCircle } from "react-icons/io";
import ServiceApi from "../../../api/Service";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

function ImageGrid(props) {
    const { serviceId, deactivateAlert } = props;
    const [service, setService] = useState([]);
    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        console.log(serviceId)
        ServiceApi.getService(serviceId)
        .then((response) => {
            setService(response.servicio);
        })
    }, [serviceId]);
    useEffect(() => {
      const interval = setInterval(() => {
        setActiveIndex((prevIndex) => (prevIndex + 1) % service.linkImg.length);
      }, 3000);
      return () => clearInterval(interval);
    }, [service]);
    return (
        <div data-aos="zoom-in-down" className="fixed z-10 inset-0 overflow-y-auto bg-gray-900 bg-opacity-50">
            <div className=" my-16 max-h-24">
                <div className="flex items-center justify-center">
                    <div className="bg-white w-7/12 mx-auto rounded-lg shadow-lg overflow-hidden">
                        <div className="container mx-auto p-4">
                            <div
                                data-aos="flip-up"
                                className="flex flex-wrap justify-center bg-lime-700 rounded-lg rounded-[24px]"
                            >
                                <div className=" block p-2 ">
                                    <h5 className=" mb-2 text-2xl font-bold tracking-tight text-slate-50">
                                        {service.nameService}
                                    </h5>
                                </div>
                            </div>
                            <div>
                                <div className=" rounded-lg rounded-[12px] flex space-x-2 justify-center">
                                    <div class="flex flex-wrap justify-center ">
                                        <div class="w-1/6 md:w-7/12 lg:w-7/12 xl:w-7/12 2xl:w-7/12 my-6 rounded-lg">
                                            <Carousel slideInterval={1000} showThumbs={false} selectedItem={activeIndex} onChange={setActiveIndex}>
                                                {service.linkImg?.map((prop, index) => (
                                                    <div key={index}>
                                                        <img src={prop} alt={"Imagen " + index} className="block object-cover object-center rounded-lg w-2/3 h-72"/>
                                                    </div>
                                                ))}
                                            </Carousel>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="overflow-y-auto h-36 flex flex-wrap w-full p-4">
                                <div role="list" class="space-y-5">
                                    {service.subService?.map((subservice) => (
                                        <li data-aos="fade-right" class="flex space-x-3">
                                            <IoIosArrowDroprightCircle class="flex-shrink-0 w-5 h-5 text-lime-700" />
                                            <h1 class="text-base font-normal leading-tight text-gray-700">
                                                <strong>{subservice}</strong>
                                            </h1>
                                        </li>
                                    ))}
                                </div>
                            </div>
                            <center>
                                <button
                                    className="ease-out duration-500 text-sm font-semibold leading-none text-white focus:outline-none bg-lime-700 border rounded-[15px] hover:bg-zinc-300 hover:text-zinc-900 py-4 w-40"
                                    onClick={deactivateAlert}
                                >
                                    Cerrar
                                </button>
                            </center>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ImageGrid;