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
            
            <div className="flex space-x-2 justify-center ">
            <button
              className="ease-out duration-500 text-sm font-semibold leading-none text-white focus:outline-none bg-lime-700 border rounded-[15px] hover:bg-zinc-300 hover:text-zinc-900 py-4 w-40"
              onClick={activateNewServicePopUp}
            >
              Crear un Servicio
              
            </button>{" "}
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