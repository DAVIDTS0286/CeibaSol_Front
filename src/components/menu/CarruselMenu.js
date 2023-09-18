import "./CarruselMenu.css";

const images = [
  {
    id: "1",
    title: "Argos",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/Logo_Cementos_Argos.png/800px-Logo_Cementos_Argos.png",
  },
  {
    id: "2",
    title: "Fuente de vida el oasis",
    image: "https://i.imgur.com/ez4XtJT.png",
  },
  {
    id: "3",
    title: "Holcim",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Holcim_logo.svg/320px-Holcim_logo.svg.png",
  },

  {
    id: "4",
    title: "Alcaldia de Busbanza",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/Escudo_de_Busbanz%C3%A1.svg/1200px-Escudo_de_Busbanz%C3%A1.svg.png",
  },

  {
    id: "5",
    title: "Colegio Juan Jose Samanieg",
    image:
      "https://matematicasjjs.files.wordpress.com/2013/11/escudo.jpg",
  },

 
];

function CarruselMenu() {
  return (
    <div class="slider">
	<div class="slide-track">
		<div class="slide">
			<img src= "https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/Logo_Cementos_Argos.png/800px-Logo_Cementos_Argos.png" height="100" width="250" alt="" />
		</div>
		<div class="slide">
			<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Holcim_logo.svg/320px-Holcim_logo.svg.png" height="100" width="250" alt="" />
		</div>
		<div class="slide">
			<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/Escudo_de_Busbanz%C3%A1.svg/1200px-Escudo_de_Busbanz%C3%A1.svg.png" height="100" width="250" alt="" />
		</div>
		<div class="slide">
			<img src="https://matematicasjjs.files.wordpress.com/2013/11/escudo.jpg" height="100" width="250" alt="" />
		</div>
	</div>
    </div>


  );
}

export default CarruselMenu;
