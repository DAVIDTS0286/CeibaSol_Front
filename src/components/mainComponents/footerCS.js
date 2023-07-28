import { FiClock, FiMail, FiPhone } from "react-icons/fi";
import { FaHome } from "react-icons/fa";

export default function FooterCS() {
  return (
    <>
      <div className="min-h-full ">
        <footer class="text-center lg:text-left bg-gray-300 text-gray-900 border-2 border-t-gray-400">
          <div class="mx-2 py-2 text-center md:text-left">
            <div class="grid grid-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 2xl:grid-cols-4 gap-12 ">
             
              <div class="lg:w-48 xl:w-48 2xl:w-48">
                <div className="flex justify-center">
                <img className="h-24 w-24" src="https://i.imgur.com/b3AJFOU.png" alt="logo"/>
                </div>
                
                <div>
              
                <h6 class="uppercase font-semibold flex justify-center">
                  
                  Ceiba Sol S.A.S
                </h6>
                
                </div>

                <div className="italic flex justify-center">
                <p>Cosultora ambiental</p>
                </div>
              </div>
             
              <div class=""></div>
              <div class="">
                <h6 class="uppercase font-semibold mb-4 flex justify-center md:justify-start">
                  Servicios
                </h6>
                <p class="mb-2">
                  <a href="#!" class="text-gray-600">
                    servicio 1
                  </a>
                </p>
                <p class="mb-2">
                  <a href="#!" class="text-gray-600">
                    servicio 2
                  </a>
                </p>
                <p class="mb-2">
                  <a href="#!" class="text-gray-600">
                    servicio 3
                  </a>
                </p>
                <p>
                  <a href="#!" class="text-gray-600">
                    servicio 4
                  </a>
                </p>
              </div>
              <div class="">
                <h6 class="uppercase font-semibold mb-4 flex justify-center md:justify-start">
                  CONTACTOS
                </h6>
                <p class="flex items-center justify-center md:justify-start mb-2">
                  <FaHome className="mr-2" />
                  Direccion
                </p>
                <p class="flex items-center justify-center md:justify-start mb-2">
                  <FiMail className="mr-2" />
                  Correo
                </p>
                <p class="flex items-center justify-center md:justify-start mb-2">
                  <FiPhone className="mr-2" />
                  Telefono
                </p>
                <p class="flex items-center justify-center md:justify-start">
                  <FiClock className="mr-2" />
                  Horarios de atencion
                </p>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
