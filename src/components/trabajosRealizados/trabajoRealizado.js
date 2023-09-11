import React, { useState } from "react";
import { IoIosArrowDroprightCircle } from "react-icons/io";

import VerTrabajo from "./ventanasEmergentes/verTrabajo";
import EditarTrabajo from "./ventanasEmergentes/editarTrabajo";
import EliminarTrabajo from "./ventanasEmergentes/eliminarTrabajo";

export default function TrabajosRealizado(props) {
  const { workId, workName, images, descrition } = props;

  const [windowVer, setWindowVer] = useState(false);
  const [windowEditar, setWindowEditar] = useState(false);
  const [windowEliminar, setWindowEliminar] = useState(false);
  return (
    <div className="px-4 py-4 space-y-8">
      <div className="block p-6 bg-gray-200 border border-lime-700 rounded-lg shadow">
        <h4
          data-aos="zoom-out"
          className=" mb-2 text-2xl font-bold tracking-tight text-gray-900 flex justify-center text-center items-center"
        >
          {workName.toUpperCase()}
        </h4>
        <div className="container px-5 py-2 mx-auto lg:pt-12 lg:px-32">
          <div className="flex items-center justify-center flex-wrap -m-1 md:-m-2">
            {images?.map((image, index) => (
              <div data-aos="zoom-in" className="flex flex-wrap w-1/3">
                <div className="w-full p-1 md:p-2">
                  <img
                    src={image}
                    alt={"image" + index}
                    className="block object-cover object-center w-full h-48 rounded-lg"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="flex items-center justify-center flex-wrap w-full p-4">
          <div role="list" className="space-y-5">
            <li data-aos="fade-right" className="flex space-x-3">
              <IoIosArrowDroprightCircle className="flex-shrink-0 w-5 h-5 text-lime-700" />
              <h1 className="text-base font-normal leading-tight text-gray-700">
                {descrition}
              </h1>
            </li>
          </div>
        </div>
        <center>
        <div data-aos="fade-up" data-aos-anchor-placement="center-bottom"className="py-2">
            {localStorage.getItem("token") &&
            localStorage.getItem("role") === "ADMIN" ? (
              <button
                className="ease-out duration-500 text-sm font-semibold leading-none text-white focus:outline-none bg-lime-700 border rounded-[15px] hover:bg-zinc-300 hover:text-zinc-900 py-4 w-40"
                onClick={() => setWindowEditar(true)}
              >
                Editar Trabajo
              </button>
            ) : (
              <></>
            )}
            <button
              className="ease-out duration-500 text-sm font-semibold leading-none text-white focus:outline-none bg-lime-700 border rounded-[15px] hover:bg-zinc-300 hover:text-zinc-900 mx-2 py-4 w-40"
              onClick={() => setWindowVer(true)}
            >
              Ver Trabajo
            </button>
            {localStorage.getItem("token") &&
            localStorage.getItem("role") === "ADMIN" ? (
              <button
                className="ease-out duration-500 text-sm font-semibold leading-none text-white focus:outline-none bg-red-700 border rounded-[15px] hover:bg-zinc-300 hover:text-zinc-900 py-4 w-40"
                onClick={() => setWindowEliminar(true)}
              >
                Eliminar Trabajo
              </button>
            ) : (
              <></>
            )}
          </div>
        </center>
        <div>
          {windowVer ? (
            <div
              data-aos="zoom-in"
              class="fixed z-10 inset-0 overflow-y-auto bg-gray-900 bg-opacity-50"
            >
              <div className="max-h-24">
                <div class="flex items-center justify-center">
                  <div class="my-16 p-4 bg-white w-11/12 sm:w-7/12 md:w-7/12 lg:w-7/12 xl:w-7/12 2xl:w-7/12 h-min mx-auto rounded-lg shadow-lg overflow-hidden overflow-y-auto">
                    <VerTrabajo workId={workId}></VerTrabajo>
                    <button
                      class="transition ease-in-out duration-500 bg-white-600 text-red-700 hover:text-white px-4 py-2 w-full rounded hover:bg-red-700 "
                      onClick={() => setWindowVer(false)}
                    >
                      Cerrar
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <></>
          )}
          {windowEditar ? (
            <div
              data-aos="zoom-in"
              className="fixed z-10 inset-0 bg-gray-900 bg-opacity-50"
            >
              <div className="max-h-24">
                <div className="flex items-center justify-center">
                  <div className="my-16 p-4 bg-white w-11/12 sm:w-7/12 mdw-7/12 lg:w-7/12 xl:w-7/12 2xl:w-7/12 mx-auto rounded-lg shadow-lg">
                    <EditarTrabajo workId={workId}></EditarTrabajo>
                    <button
                      class="transition ease-in-out duration-500 bg-white-600 text-red-700 hover:text-white px-4 py-2 w-full rounded hover:bg-red-700 "
                      onClick={() => setWindowEditar(false)}
                    >
                      Cerrar
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <></>
          )}
          {windowEliminar ? (
            <div
              data-aos="zoom-in"
              class="fixed z-10 inset-0 overflow-y-auto bg-gray-900 bg-opacity-50"
            >
              <div class="fixed inset-0 rounded-lg rounded-[12px] bg-gray-900 bg-opacity-50 flex justify-center">
                <div class="bg-white p-4 mt-16 h-min w-11/12 sm:w-auto md:w-auto lg:w-auto xl:w-auto 2xl:w-auto rounded-lg rounded-[12px] shadow-lg">
                  <EliminarTrabajo
                    workId={workId}
                    nameWork={workName}
                  ></EliminarTrabajo>
                  <div className="flex justify-evenly">
                    <button
                      class="transition ease-in-out duration-500 bg-white-600 text-red-700 hover:text-white px-4 py-2 w-full rounded hover:bg-red-700 "
                      onClick={() => setWindowEliminar(false)}
                    >
                      Cerrar
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <></>
          )}
        </div>
      </div>
    </div>
  );
}
