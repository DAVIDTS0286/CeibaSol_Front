import React, { useEffect, useState } from "react";

function GameSection() {
  const iframeStyle = {
    width: "100%",
    height: "600px",
    border: "1em",
    borderRadius: "0.5em",
    boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.3)",
    position: "relative",
  };

  const bubbleStyle = {
    position: "absolute",
    top: "10px",
    left: "10px",
    backgroundColor: "rgba(255, 255, 255, 0.9)",
    padding: "10px",
    borderRadius: "50px", // Borde redondeado para simular una nube
    boxShadow: "0px 0px 5px rgba(0, 0, 0, 0.5)",
    zIndex: "1",
    animation: "fade-out 40s linear", // Animación para que dure 10 segundos
    fontFamily: "Comic Sans MS", // Cambia la fuente a Comic Sans
    
  };

  const [showBubble, setShowBubble] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowBubble(false);
    }, 10000); // Oculta la burbuja después de 10 segundos

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="py-6 container text-center">
      <h1 className="my-4 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-4xl">
        <span className="text-transparent bg-clip-text bg-gradient-to-r to-lime-600 from-lime-900 animate-pulse">
          ¿Qué hacemos?
        </span>
      </h1>

      <p className="text-gray-600 text-size-40">
      Explora un mundo virtual donde la conservación y la diversidad ambiental son tu mayor desafío y tu mayor recompensa. 
      <br />¡Bienvenido al juego que te adentra al mundo dels sostenimiento ambiental!
      </p>
      <br />
      <div style={{ position: "relative" }}>
        {showBubble && (
          <div style={bubbleStyle}>
            🐱‍👤 Para una mejor experiencia, pulsa F11
            <br/>
            🐱‍🏍 Para salir pulsa dos veces esc
          </div>
        )}
        <iframe
          src="https://davidts286.github.io/game/game.html"
          title="Videojuego Unity"
          style={iframeStyle}
        />
      </div>
    </div>
  );
}

export default GameSection;
