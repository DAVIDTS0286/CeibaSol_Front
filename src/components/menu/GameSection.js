import React from "react";

function GameSection() {
  return (
    <div className="py-6">
      <h2 className="text-2xl font-bold text-gray-800">Introducción al Videojuego</h2>
      <p className="text-gray-600">
        Aquí puedes agregar una breve descripción o introducción sobre el videojuego que deseas presentar en tu página web.
      </p>
      <iframe
        src="/game.html" // Asegúrate de ajustar la ruta correcta
        //src="/Game/fondoInicio.jpeg" // Asegúrate de ajustar la ruta correcta
        //src="https://github.com/CodyAbode/Dungeon-Blox" // Asegúrate de ajustar la ruta correcta

        width="800"
        height="600"
        title="Videojuego Unity"
      />
    </div>
  );
}

export default GameSection;
