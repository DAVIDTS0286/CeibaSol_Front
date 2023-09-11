import { FiClock, FiMail, FiPhone } from "react-icons/fi";
import { FaHome, FaWhatsapp } from "react-icons/fa";
import { AiOutlineFacebook, AiOutlineInstagram } from "react-icons/ai";
import {HiArrowRight} from "react-icons/hi";
import { useState, useEffect } from "react";
import ServiceApi from "../../api/Service";

export default function FooterCS() {
  const [services, setServices] = useState([]);

  useEffect(() => {
    getServices();
  }, []);

  const getServices = () => {
    ServiceApi.listServices().then((response) => {
      setServices(response.servicios);
    });
  };
  return (
    <>
      <div className="min-h-full">
        <footer class="text-center lg:text-left bg-gray-300 text-gray-900 border-t-2 border-gray-400">
          <div class="mx-2 py-2 text-center md:text-left">
            <div class="grid grid-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-4 2xl:grid-cols-4 gap-8 ">
              <div class="lg:w-48 xl:w-48 2xl:w-80">
                <div className="flex justify-center">
                  <img
                    className="h-24 w-24 sm:h-1/2 sm:w-1/2 md:h-2/3 md:w-2/3 lg:h-2/3 lg:w-2/3 xl:h-2/3 xl:w-2/3 2xl:h-2/3 2xl:w-2/3"
                    src="arbol-ceiba-icono-sinfondo.png"
                    alt="logo"
                  />
                </div>

                <div>
                  <h6 class="uppercase font-semibold flex justify-center">
                    Ceiba Sol S.A.S
                  </h6>
                </div>

                <div className="italic flex justify-center">
                  <p>Consultora ambiental</p>
                </div>
              </div>

              <div class="text-sm">
                
                <h6 class="font-semibold mb-4 flex justify-center md:justify-start text-lime-800 text-2xl">
                  <strong></strong>
                  Servicios
                </h6>

                {services?.map((prop, key) => (
                  
                  <p class="mb-2">
                    
                    <a href="/servicios" class="text-gray-600">
                      <p class="flex items-center justify-center md:justify-start mb-2">
                    
                      <HiArrowRight className="mr-2" />
                      {(prop.nameService)}
                      </p>
                    </a>
                  </p>
                ))}
 
              </div>

              <div class="text-sm 2xl:w-80">
                
                <h6 class="font-semibold mb-4 flex justify-center md:justify-start text-lime-800 text-2xl">
                  <strong></strong>
                  Contactos
                </h6>
                <p class="flex items-center justify-center md:justify-start mb-2">
                  <FaHome className="mr-2" />
                  Calle 23 # 9 A - 56, Sogamoso, Boyacá
                </p>
                <p class="flex items-center justify-center md:justify-start mb-2">
                  <FiMail className="mr-2" />
                  ceibasolsas@gmail.com
                </p>
                <p class="flex items-center justify-center md:justify-start mb-2">
                  <FiPhone className="mr-2" />
                  310 274 1994
                </p>
                <p class="flex items-center justify-center md:justify-start">
                  <FiClock className="mr-2" />
                  Lunes a Viernes (8 am - 5 pm)
                </p>
              </div>

              <div class="text-sm 2xl:w-80">
                
                <h6 class="font-semibold mb-4 flex justify-center md:justify-start text-lime-800 text-2xl">
                  <strong></strong>
                  Redes sociales
                </h6>
                <a
                  class="flex items-center justify-center md:justify-start mb-2"
                  href="https://www.facebook.com/profile.php?id=100090879139349"
                  TARGET="blank"
                  rel="noreferrer"
                >
                  <AiOutlineFacebook
                    style={{ marginRight: "10" }}
                    class="w-6 h-6 mb-2 "
                  ></AiOutlineFacebook>
                </a>

                <a
                  class="flex items-center justify-center md:justify-start mb-2"
                  href="https://www.instagram.com/ceiba_sol/"
                  TARGET="blank"
                  rel="noreferrer"
                >
                  <AiOutlineInstagram
                    style={{ marginRight: "10" }}
                    class="w-6 h-6 mb-2 "
                  ></AiOutlineInstagram>
                </a>
                <a
                  class="flex items-center justify-center md:justify-start mb-2"
                  href="https://api.whatsapp.com/send?phone=573102741994&text=Hola,%20quiero%20hacer%20una%20consulta"
                  TARGET="blank"
                  rel="noreferrer"
                >
                  <FaWhatsapp
                    style={{ marginRight: "10" }}
                    class="w-6 h-6 mb-2 "
                  ></FaWhatsapp>
                </a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
