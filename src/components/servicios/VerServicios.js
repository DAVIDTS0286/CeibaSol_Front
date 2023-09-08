import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import ServiceApi from "../../api/Service";
import NuevoServicio from "./PopUps/NuevoServicio.js";
import SimpleService from "./SimpleService.js";

function ImageGrid() {
    const [services, setServices] = useState([]);
    const [newServiceState, setNewServiceState] = useState(false);
    const [isUserAdminAuth, setIsUerAdminAuth] = useState(false);

    useEffect(() => {
        getServices();
        setIsUerAdminAuth(localStorage.getItem('token') && localStorage.getItem('role') === 'ADMIN')
    }, []);

    const getServices = () => {
        ServiceApi.listServices()
            .then((response) => {
                setServices(response.servicios);
            })
    }
    const activateNewServicePopUp = () => {
        setNewServiceState(true);
    }

    const deactivateServicePopup = () => {
        setNewServiceState(false);
    }
    return (
        <div>
            {isUserAdminAuth &&
                <div className="px-4 py-6 sm:px-0 space-y-8">
                    <div className="p-6 bg-white border border-lime-700 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                        <center>
                            <div className="py-8">
                                <button
                                    className="ease-out duration-500 text-sm font-semibold leading-none text-white focus:outline-none bg-lime-700 border rounded-[15px] hover:bg-zinc-300 hover:text-zinc-900 py-4 w-40"
                                    onClick={activateNewServicePopUp}
                                >
                                    Crear un Servicio
                                </button>
                                {" "}
                            </div>
                        </center>
                    </div>
                </div>
            }
            {services?.map((prop, key) => (
                <SimpleService
                    key={key}
                    images={prop.linkImg}
                    serviceTitle={prop.nameService}
                    subServices={prop.subService}
                    serviceId={prop._id}
                    getServices={getServices}
                    isUserAdminAuth={isUserAdminAuth}
                />
            ))}
            <div>
                {newServiceState &&
                    <NuevoServicio deactivateAlert={deactivateServicePopup} refreshServices={getServices} />
                }
            </div>
        </div>
    );
}

export default ImageGrid;