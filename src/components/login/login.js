import React, { useState } from "react";
import { HiOutlineX } from "react-icons/hi";
import { BsFillInfoCircleFill } from "react-icons/bs";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { motion } from "framer-motion";
import LoginApi from "../../api/LoginApi";

export default function Login() {
  const [activar, setActivar] = useState(false);
  const [viewPassword, setViewPassword] = useState(true);
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [mensajeError, setMensajeError] = useState("");

  const logIn = () => {
    const data = {
      userName,
      password,
    };

    LoginApi.signIn(data)
      .then((res) => {
        localStorage.setItem("userName", res.busqueda.userName);
        localStorage.setItem("role", res.busqueda.role);
        localStorage.setItem("token", res.token);
        window.location.href = "/";
      })
      .catch((res) => {
        setMensajeError(res.response.data.err);
        setActivar(true);
      });
  };

  return (
    <div class="h-full bg-gradient-to-tl from-lime-300 to-slate-900 w-full py-16 px-4">
      <div class="flex flex-col items-center justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          class="bg-white shadow rounded rounded-[14px] border-2 border-neutral-400 lg:w-1/3 md:w-1/2 w-full p-10 "
        >
          <div class="flex flex-col items-center justify-center mb-12">
            <img
              className="hover:animate-pulse object-contain h-40 w-40 rounded-full border-8 border-slate-100 bg-slate-100"
              src="arbol-ceiba-icono-sinfondo.png"
              alt="CeibaSol Logo"
            />
            <p
              tabindex="0"
              class="focus:outline-none text-2xl font-extrabold leading-6 text-gray-800 pt-6"
            >
              Login (Administrador)
            </p>
          </div>

          <div>
            <div>
              <label
                id="email"
                class="text-sm font-medium leading-none text-gray-800"
              >
                Usuario
              </label>
              <input
                aria-labelledby="email"
                type="text"
                class={
                  activar
                    ? "bg-gray-200 border-2 rounded border-red-700 text-xs font-medium leading-none text-gray-800 py-3 w-full pl-3 mt-2"
                    : "bg-gray-200 border rounded text-xs font-medium leading-none text-gray-800 py-3 w-full pl-3 mt-2"
                }
                onChange={(e) => setUserName(e.target.value)}
              />
            </div>
            <div class="mt-6  w-full">
              <label
                for="pass"
                class="text-sm font-medium leading-none text-gray-800"
              >
                Contraseña
              </label>
              <div class="relative flex items-center justify-center">
                <input
                  id="pass"
                  type={viewPassword ? "password" : "text"}
                  class={
                    activar
                      ? "bg-gray-200 border-2 rounded border-red-700 text-xs font-medium leading-none text-gray-800 py-3 w-full pl-3 mt-2"
                      : "bg-gray-200 border rounded text-xs font-medium leading-none text-gray-800 py-3 w-full pl-3 mt-2"
                  }
                  onChange={(e) => setPassword(e.target.value)}
                />
                <div
                  class="absolute right-0 mt-2 mr-3 cursor-pointer"
                  onClick={() => setViewPassword(!viewPassword)}
                >
                  {viewPassword ? <AiOutlineEye /> : <AiOutlineEyeInvisible />}
                </div>
              </div>
            </div>
            <div class="py-8">
              <button
                class="ease-out duration-500 text-sm font-semibold leading-none text-white focus:outline-none bg-lime-700 border rounded-[24px] hover:bg-zinc-300 hover:text-zinc-900 py-4 w-full"
                onClick={() => logIn()}
              >
                Inicio de Sesion
              </button>
            </div>
            {/* RENDERIZADO CONDICIONAL */}
            {activar ? (
              <motion.div
                id="alert-border-2"
                class=" flex p-4 mb-4 text-red-800 border-t-4 border-red-300 bg-red-50 dark:text-red-400 dark:bg-gray-800 dark:border-red-800"
                role="alert"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
              >
                <div>
                  <BsFillInfoCircleFill />
                </div>
                <div class="ml-3 text-sm font-medium">
                  <strong>Acceso incorrecto</strong>
                  {" -> " + mensajeError}
                </div>
                <button
                  type="button"
                  class="ml-auto -mx-1.5 -my-1.5 bg-red-50 text-red-500 rounded-lg focus:ring-2 focus:ring-red-400 p-1.5 hover:bg-red-200 inline-flex h-8 w-8 dark:bg-gray-800 dark:text-red-400 dark:hover:bg-gray-700"
                  data-dismiss-target="#alert-border-2"
                  aria-label="Close"
                  onClick={(e) => setActivar(false)}
                >
                  <span class="sr-only">Dismiss</span>
                  <HiOutlineX />
                </button>
              </motion.div>
            ) : (
              ""
            )}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
