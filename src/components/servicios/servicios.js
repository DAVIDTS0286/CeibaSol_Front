import React from "react";
import VerServicios from "./VerServicios.js"
export default function Servicios() {
  return (
    <div>
      <header className="bg-white">
        <div className="pt-6 flex space-x-2 justify-center ">
          <h1 class="text-5xl font-medium leading-tight text-gray-800 mb-2.5 mt-0">
            SERVICIOS
          </h1>
        </div>
      </header>
      <main>
        <div className="mx-auto max-w-7xl py-2 sm:px-6 lg:px-10">

           
              <div className="flex space-x-2 justify-center">
                <VerServicios />
              </div>
         
       
        </div>
      </main>
    </div>
  );
}
