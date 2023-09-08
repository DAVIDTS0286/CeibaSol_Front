import { Carousel } from "flowbite-react";

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

function CarruselCuatro() {
  return (
    <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
      <Carousel slideInterval={500} indicators={false}>
        {images.map((image) => (
          <div key={image.id} className="w-48 sm:w-56 xl:w-60 2xl:w-64">
            <img src={image.image} alt={image.title} />
          </div>
        ))}
      </Carousel>
    </div>
  );
}

export default CarruselCuatro;
