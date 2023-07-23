import React from "react";

export default function trabajosRealizados() {
  return (
    <div>
        <header className="bg-white shadow">
          <div className="pt-6 flex space-x-2 justify-center ">
            <h1 class="text-5xl font-medium leading-tight text-gray-800 mb-2.5 mt-0">
              TRABAJOS REALIZADOS
              
            </h1>
          </div>
        </header>
        <main>
          <div className="mx-auto max-w-7xl py-2 sm:px-6 lg:px-10">
            {/* Replace with your content */}
            <div className="px-4 py-6 sm:px-0">
            <div className="bg-white-100 rounded-lg border-4 border-dashed border-gray-900">
                <div className="flex space-x-2 justify-center">
                 <h1>ESPACIO DE TRABAJO</h1>
                </div>
              
              </div>
            </div>
            {/* /End replace */}
          </div>
        </main>
      </div>
  );
}
