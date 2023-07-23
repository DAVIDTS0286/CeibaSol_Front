import React, { Component } from "react";
import { motion } from "framer-motion";
import Fotos from "./fotos";
import Carrusel from "./CarruselDos";

export default class Cuerpo extends Component {
  render() {
    return (
    
      <div>
        <header className="bg-white-600">
          <div className="pt-1 flex space-x-2 justify-center ">
            <motion.h1 animate = {{y:30}} class="text-5xl font-medium leading-tight text-gray-800 mb-2.5 mt-0">
              Ceiba{" "}
              <span className=" inline-block py-1 px-2.5 leading-none text-center whitespace-nowrap align-baseline font-bold bg-lime-900 text-white rounded animate-pulse">
                Sol
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
                        src="https://i.imgur.com/b3AJFOU.png"
                        alt="..."
                        class="shadow rounded max-w-full h-auto align-middle border-none"
                      />
                    </motion.div>
                  </div>
                </div>

                <div class="flex flex-wrap justify-center ">
                  <div class=" block  p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                    
                    <h5 class=" mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                      ¿Por que nace CeibaSol?
                    </h5>
                  </div>
                </div>

                <div class="flex flex-wrap justify-center">
                  <div class=" block p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                    <h5 class="font-normal text-gray-700 dark:text-gray-400">
                      Here are the biggest enterprise technology acquisitions of
                      2021 so far, in reverse chronological order.Here are the
                      biggest enterprise technology acquisitions of 2021 so far,
                      in reverse chronological order.Here are the biggest
                      enterprise technology acquisitions of 2021 so far, in
                      reverse chronological order.Here are the biggest
                      enterprise technology acquisitions of 2021 so far, in
                      reverse chronological order.Here are the biggest
                      enterprise technology acquisitions of 2021 so far, in
                      reverse chronological order.
                    </h5>
                  </div>
                </div>
              </div>
            </div>

            <div className="px-4 py-6 sm:px-0">
              {/* bg-lime-100 rounded-lg border-4 border-dashed border-gray-900 */}
              <div className="">
                <div className="flex space-x-2 justify-center">
                  <h1 className="mb-3 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-4xl">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r to-lime-600 from-lime-900">
                      Empresas con las que hemos colaborado
                    </span>
                  </h1>
                </div>

                <div class="flex flex-wrap justify-center">
                  <div class="w-6/12 sm:w-4/12 px-4 my-6">
                    <img
                      src="https://i.imgur.com/2RS1GXK.png"
                      alt="..."
                      class="shadow rounded-lg max-w-full h-auto align-middle border-none"
                    />

                    <Carrusel></Carrusel>
                  </div>
                  <Fotos />
                </div>
              </div>
            </div>

            {/* /End replace */}
          </div>
        </main>
      </div>
    );
  }
}
