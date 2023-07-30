import React, { Component } from "react";
import { motion } from "framer-motion";

import Carrusel from "./CarruselCuatro";

export default class Cuerpo extends Component {
  render() {
    return (
      <div className="">
        <header className="bg-white-600 ">
          <div className="pt-1 flex space-x-2 justify-center ">
            <motion.h1
              animate={{ y: 20 }}
              transition={{ delay: 0.5 }}
              class="text-5xl font-medium leading-tight text-gray-800 mb-2.5 mt-0"
            >
              CEIBA{" "}
              <span className=" inline-block py-1 px-2.5 leading-none text-center whitespace-nowrap align-baseline font-bold bg-lime-900 text-white rounded animate-pulse">
                SOL
              </span>
            </motion.h1>
          </div>
        </header>
        <main>
          <div className="mx-auto max-w-7xl py-2 sm:px-6 lg:px-10 ">
            {/* Replace with your content */}
            <div className="px-4 py-6 sm:px-0">
              {/* bg-lime-100 rounded-lg border-4 border-dashed border-gray-900 */}
              <div className="">
                <div class="flex flex-wrap justify-center">
                  <div class="w-6/12 sm:w-4/12 px-4 ">
                    <motion.div
                      initial={{ opacity: 0, scale: 0.5 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5 }}
                    >
                      <img
                        src="arbol-ceiba-icono-sinfondo.png"
                        alt="..."
                        class="transition duration-300 t max-w-full h-auto align-middle border-none"
                      />
                    </motion.div>
                  </div>
                </div>

                <div class="flex flex-wrap justify-center ">
                  <div class=" block p-6 bg-white rounded-lg ">
                    <h5 class=" mb-2 text-2xl font-bold tracking-tight text-gray-900 ">
                      ¿Que es CeibaSol?
                    </h5>
                  </div>
                </div>

                <div class="flex flex-wrap justify-center">
                  <div class="block p-6 bg-white rounded-lg">
                    <p class="text-center mx-40 italic leading-loose ">
                      <strong>CEIBA SOL S.A.S.</strong> es un grupo de
                      personas trabajando en pro de la sostenibilidad, brindando
                      resolución a las problemáticas ambientales por medio de la
                      consultoria.<p>Ofecemos un amplio catalogo de servicios
                      ambientales dirigidos por un equipo profesional calificado
                      para brindar un trabajo de alta calidad, basado en la
                      responsabilidad, honestidad y compromiso, con el fin de
                      garantizar de manera veraz y transparente el cumplimiento
                      de los requerimientos solicitados por nuestros clientes.</p> 
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="px-4 py-6 sm:px-0">
              {/* bg-lime-100 rounded-lg border-4 border-dashed border-gray-900 */}
              <div className="">
                <div className="flex space-x-2 justify-center ">
                  <h1 className="mb-3 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-4xl">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r to-lime-600 from-lime-900">
                      Empresas con las que hemos colaborado
                    </span>
                  </h1>
                </div>

                <Carrusel></Carrusel>
              </div>
            </div>

            {/* /End replace */}
          </div>
        </main>
      </div>
    );
  }
}
