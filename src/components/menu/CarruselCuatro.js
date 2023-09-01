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
    title: "Coca Cola",
    image:
      "https://omniaestudio.es/wp-content/uploads/2020/10/coca-cola-logo-260x260-01-370x370-1.png",
  },

  {
    id: "4",
    title: "Instagram",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/2048px-Instagram_logo_2016.svg.png",
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
