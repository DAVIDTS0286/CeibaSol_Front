import React, { Component } from "react";
import { motion } from "framer-motion";
import { IoIosArrowDroprightCircle } from "react-icons/io";

import CarruselMenu from "./CarruselMenu";

export default class Menu extends Component {
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

                <div
                  data-aos="flip-up"
                  class="flex flex-wrap justify-center bg-lime-700 rounded-lg rounded-[24px]"
                >
                  <div class=" block p-2 ">
                    <h5 class=" mb-2 text-2xl font-bold tracking-tight text-slate-50">
                      ¿ Qué es CeibaSol ?
                    </h5>
                  </div>
                </div>
                <div
                  data-aos="fade-up"
                  class="flex flex-wrap justify-center mt-6"
                >
                  <img
                    src="fondoInicio.jpeg"
                    alt="..."
                    class="transition duration-300 w-9/12 sm:w-6/12 rounded-lg rounded-[24px]"
                  />
                </div>
                <div data-aos="fade-up" class="flex flex-wrap justify-center">
                  <div class="block mt-6 bg-white rounded-lg">
                    <blockquote class="p-4 my-4 border-l-4 border-lime-500 bg-gray-50">
                      <p class="text-center sm:mx-40 italic leading-loose ">
                        <strong>CEIBA SOL S.A.S.</strong> es un grupo de
                        personas trabajando en pro de la sostenibilidad,
                        brindando solución a las problemáticas ambientales por
                        medio de la consultoría.
                        <p>
                          Ofrecemos un amplio catálogo de servicios ambientales
                          dirigidos por un equipo profesional calificado para
                          brindar un trabajo de alta calidad, basado en la
                          responsabilidad, honestidad y compromiso, con el fin
                          de garantizar de manera veraz y transparente el
                          cumplimiento de los requerimientos solicitados por
                          nuestros clientes.
                        </p>
                      </p>
                    </blockquote>
                  </div>
                </div>

                <div
                  data-aos="flip-up"
                  class="flex flex-wrap justify-center bg-lime-700 rounded-lg rounded-[24px]"
                >
                  <div class=" block p-2 ">
                    <h5 class=" mb-2 text-2xl font-bold tracking-tight text-slate-50">
                      Pilares Empresariales
                    </h5>
                  </div>
                </div>
              </div>
            </div>

            <div class="flex flex-wrap justify-center w-full p-4">
              <div role="list" class="space-y-5">
                <li data-aos="fade-right" class="flex space-x-3">
                  <IoIosArrowDroprightCircle class="flex-shrink-0 w-5 h-5 text-lime-700" />
                  <h1 class="text-base font-normal leading-tight text-gray-700">
                    <strong>Transparecia</strong>
                  </h1>
                </li>
                <li data-aos="fade-left" class="flex space-x-3">
                  <IoIosArrowDroprightCircle class="flex-shrink-0 w-5 h-5 text-lime-700 " />
                  <h1 class="text-base font-normal leading-tight text-gray-700 ">
                    <strong>Compromiso</strong>
                  </h1>
                </li>
                <li data-aos="fade-right" class="flex space-x-3">
                  <IoIosArrowDroprightCircle class="flex-shrink-0 w-5 h-5 text-lime-700 " />
                  <h1 class="text-base font-normal leading-tight text-gray-700 ">
                    <strong>Innovación</strong>
                  </h1>
                </li>

                <li data-aos="fade-left" class="flex space-x-3">
                  <IoIosArrowDroprightCircle class="flex-shrink-0 w-5 h-5 text-lime-700 " />
                  <h1 class="text-base font-normal leading-tight text-gray-700 ">
                    <strong>Cumplimiento</strong>
                  </h1>
                </li>
              </div>
            </div>

            <div className="px-4 py-6 sm:px-0">
              {/* bg-lime-100 rounded-lg border-4 border-dashed border-gray-900 */}

              <div
                data-aos="fade-right"
                className="flex space-x-2 justify-center text-center  rounded-lg rounded-[24px]"
              >
                <h1 className="my-4 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-4xl">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r to-lime-600 from-lime-900">
                    Empresas con las que hemos colaborado
                  </span>
                </h1>
              </div>
              <div class="bg-gray-300 rounded-lg rounded-[24px]">
                <CarruselMenu></CarruselMenu>
              </div>
            </div>

            {/* /End replace */}
          </div>
        </main>
      </div>
    );
  }
}
