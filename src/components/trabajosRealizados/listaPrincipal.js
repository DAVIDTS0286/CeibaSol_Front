import React, { useState, useEffect } from "react";
import TrabajosRealizadosApi from "../../api/TrabajosRealizadosApi";
import TrabajosRealizado from "./trabajoRealizado";

export default function ListaPrincipal() {
  const [trabajos, setTrabajos] = useState([]);

  useEffect(() => {
    TrabajosRealizadosApi.listaWork().then((response) => {
      setTrabajos(response.trabajos);
    });
  }, []);

  return (
    <div>
      {trabajos?.map((prop, key) => (
        <TrabajosRealizado
          key={key}
          workId={prop._id}
          workName={prop.nameWork}
          images={prop.linkImg}
          descrition={prop.description}
        ></TrabajosRealizado>
      ))}
    </div>
  );
}
