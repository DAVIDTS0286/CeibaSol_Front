import React from "react";
import TrabajosRealizadosApi from "../../../api/TrabajosRealizadosApi";

export default function EliminarTrabajo(props) {
  const { workId, nameWork } = props;

  const logOut = () => {
    try {
      localStorage.removeItem("userName");
      localStorage.removeItem("role");
      localStorage.removeItem("token");
      window.location.href = "/login";
    } catch (e) {
      // an error
    }
  };

  const handleDeleteWork = () => {
    TrabajosRealizadosApi.deleteWork(workId)
      .then((res) => {
        alert("Trabajo Realizado Eliminado con Éxito");
        window.location.href = "/trabajosRealizados";
      })
      .catch((res) => {
        alert("Lo sentimos... Algo salió mal :c\n");
        if (res.response.data.message === "Token inválido") {
          alert("La Sesion expiro");
          logOut();
        }
      });
  };

  return (
    <div class="max-w-sm p-6 bg-white rounded-lg  ">
      <div
        data-aos="flip-up"
        className="flex flex-wrap justify-center bg-lime-700 rounded-lg rounded-[24px] mb-8"
      >
        <div className=" block p-2 text-center">
          <h5 className=" mb-2 text-2xl font-bold tracking-tight text-slate-50">
            {nameWork}
          </h5>
        </div>
      </div>

      <p class="mb-3 font-normal text-gray-700 dark:text-gray-400 flex justify-center">
        <strong> ¿Seguro que deseas eliminar?</strong>
      </p>
      <center>
        <div className="flex justify-evenly">
          <button
            className="ease-out duration-500 text-sm font-semibold leading-none text-white focus:outline-none bg-emerald-700 border rounded-[15px] hover:bg-zinc-300 hover:text-zinc-900 py-4 w-16"
            onClick={() => handleDeleteWork()}
          >
            Si
          </button>{" "}
        </div>
      </center>
    </div>
  );
}
