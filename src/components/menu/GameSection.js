import React from "react";

function GameSection() {
  const iframeStyle = {
    width: "100%", // Utiliza el ancho completo del contenedor
    height: "600px", // Altura fija o ajusta según tus necesidades
    border: "1em", // Quita el borde del iframe
    borderRadius: "0.5em", // Agrega bordes redondeados
    boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.3)", // Agrega una sombra
  };

  return (
    <div className="py-6 container text-center">
      <h1 className="my-4 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-4xl">
        <span className="text-transparent bg-clip-text bg-gradient-to-r to-lime-600 from-lime-900">
          ¿Qué hacemos?
        </span>
      </h1>

      <p className="text-gray-600 text-size-40">
        ¡Hola! ¿Quieres saber más acerca de nuestra empresa?
        <br />
        Hazlo de una forma interactiva con nuestro videojuego!!
      </p>
      <br/>
      <iframe
        src="http://localhost:4000/src/components/menu/Game/game.html"
        title="Videojuego Unity"
        style={iframeStyle} // Aplica los estilos al iframe
      />
    </div>
  );
}

export default GameSection;
