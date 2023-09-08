import React, { useState } from "react";
import ListaPrincipal from "./listaPrincipal";
import CrearTrabajo from "./ventanasEmergentes/crearTrabajo";


export default function TrabajosRealizados() {
  const [windowEmergente, setWindowEmergente] = useState(false);

  return (
    <div class="relative">
      <header className="bg-white shadow">
        <div className="pt-6 flex space-x-2 justify-center text-center ">
          <h1 class="text-5xl font-medium leading-tight text-gray-800 mb-2.5 mt-0">
            TRABAJOS REALIZADOS
          </h1>
        </div>
        {localStorage.getItem('token') && localStorage.getItem('role') === 'ADMIN' ?
        <div className="flex space-x-2 justify-center ">
          <button
            className="ease-out duration-500 text-sm font-semibold leading-none text-white focus:outline-none bg-lime-700 border rounded-[15px] hover:bg-zinc-300 hover:text-zinc-900 py-4 w-40"
            onClick={() => setWindowEmergente(true)}
          >
            Nuevo Trabajo
            
          </button>{" "}
        </div>
        :<></>}
      </header>

      <main>
        {windowEmergente ? (
          <div data-aos="zoom-in" className="fixed z-10 inset-0 overflow-y-auto bg-gray-900 bg-opacity-50">
            <div className="max-h-24">
              <div className="flex items-center justify-center">
                <div className="my-16 p-4 bg-white w-7/12 mx-auto rounded-lg shadow-lg overflow-hidden">
                  <CrearTrabajo></CrearTrabajo>
                  <div className="flex justify-evenly ">
                  <button
                    class="transition ease-in-out duration-500 bg-white-600 text-red-700 hover:text-white px-4 py-2 w-full rounded hover:bg-red-700 "
                    onClick={() => setWindowEmergente(false)}
                  >
                    Cerrar
                  </button>

                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <></>
        )}
        <div className="mx-auto py-2 sm:px-6 lg:px-10">
          <div className="px-4 py-6 sm:px-0">
            <div className="bg-white-100">
              <div className="">
                <ListaPrincipal></ListaPrincipal>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
