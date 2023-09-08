import React from "react";
import { useState } from "react";
import { IoIosArrowDroprightCircle } from "react-icons/io";
import VerUnServicio from "./PopUps/VerUnServicio.js";
import EditarServicio from "./PopUps/EditarServicio.js";
import EliminarServicio from "./PopUps/EliminarServicio.js";
function ImageGrid(props) {
    const { images, serviceTitle, subServices, serviceId, getServices, isUserAdminAuth } = props;
    const [showServiceState, setShowServiceState] = useState(false);
    const [editServiceState, setEditServiceState] = useState(false);
    const [deleteServiceState, setDeleteServiceState] = useState(false);

    const activateShowServicePopup = () => {
        setShowServiceState(true);
    }
    const activateEditServicePopUp = () => {
        setEditServiceState(true)
    }
    const activateDeleteServicePopup = () => {
        setDeleteServiceState(true)
    }
    const deactivateServicePopup = () => {
        setShowServiceState(false);
        setEditServiceState(false);
        setDeleteServiceState(false);
    }
    return (
        <div className="px-4 py-6 sm:px-0 space-y-8">
            <div className="p-6 bg-white border border-lime-700 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                <h4 className=" mb-2 text-2xl font-bold tracking-tight text-gray-900 flex items-center justify-center">
                    {serviceTitle}
                </h4>
                <div className="container px-5 py-2 mx-auto lg:pt-12 lg:px-32">
                    <div className="flex flex-wrap -m-1 md:-m-2">
                        {images?.map((image, index) => (
                            <div data-aos="zoom-in" className="flex flex-wrap w-1/3">
                                <div className="w-full p-1 md:p-2">
                                    <img src={image} alt={"image" + index} className="block object-cover object-center w-full h-48 rounded-lg" />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="flex flex-wrap w-full p-4">
                    <div role="list" className="space-y-5">
                        {subServices?.map((subservice) => (
                            <li data-aos="fade-right" className="flex space-x-3">
                                <IoIosArrowDroprightCircle className="flex-shrink-0 w-5 h-5 text-lime-700" />
                                <h1 className="text-base font-normal leading-tight text-gray-700">
                                    <strong>{subservice}</strong>
                                </h1>
                            </li>
                        ))}
                    </div>
                </div>
                <center>
                    <div data-aos="fade-up" data-aos-anchor-placement="center-bottom"className="py-8">
                        <button
                            className="ease-out duration-500 text-sm font-semibold leading-none text-white focus:outline-none bg-lime-700 border rounded-[15px] hover:bg-zinc-300 hover:text-zinc-900 py-4 w-40"
                            onClick={activateShowServicePopup}
                        >
                            Ver Servicio
                        </button>
                        {isUserAdminAuth &&
                            <>
                                {" "}
                                <button
                                    className="ease-out duration-500 text-sm font-semibold leading-none text-white focus:outline-none bg-blue-600 border rounded-[15px] hover:bg-zinc-300 hover:text-zinc-900 py-4 w-40"
                                    onClick={activateEditServicePopUp}
                                >
                                    Actualizar Servicio
                                </button>
                                {" "}
                                <button
                                    className="ease-out duration-500 text-sm font-semibold leading-none text-white focus:outline-none bg-red-600 border rounded-[15px] hover:bg-zinc-300 hover:text-zinc-900 py-4 w-40"
                                    onClick={() => activateDeleteServicePopup()}
                                >
                                    Eliminar Servicio
                                </button>
                                {" "}
                            </>
                        }
                    </div>
                </center>
                <div>
                    {showServiceState &&
                        <VerUnServicio serviceId={serviceId} deactivateAlert={deactivateServicePopup} />
                    }
                    {editServiceState &&
                        <EditarServicio serviceId={serviceId} deactivateAlert={deactivateServicePopup} refreshServices={getServices} />
                    }
                    {deleteServiceState &&
                        <EliminarServicio serviceId={serviceId} deactivateAlert={deactivateServicePopup} refreshServices={getServices} />
                    }
                </div>
            </div>
        </div>
    );
}

export default ImageGrid;