import React from "react";
import { FaHome } from "react-icons/fa";
import { FiClock, FiMail, FiPhone } from "react-icons/fi";

export default function Contactos() {
  return (
    <div>
      <header className="bg-white shadow">
        <div className="pt-6 flex space-x-2 justify-center ">
          <h1 class="text-5xl font-medium leading-tight text-gray-800 mb-2.5 mt-0">
            CONTACTOS
          </h1>
        </div>
      </header>
      <main>

        {/* Replace with your content */}
        <div className="px-4 py-6 sm:px-0">
          <div className="bg-white-100 rounded-lg border-4 border-dashed border-gray-900">
            <div className="flex space-x-2 justify-center">
            </div>

            Lorem ipsum dolor sit amet consectetur adipiscing elit, proin tristique molestie ante sodales quis quam blandit, suscipit donec dignissim mus ligula nam. Sociis vestibulum tempor habitasse potenti platea rutrum fusce ornare eget himenaeos porta libero conubia tellus ullamcorper, et vulputate cum velit sagittis magna justo enim orci metus in faucibus congue primis. Nostra per platea convallis netus varius orci cursus eu velit, auctor tempus sem nascetur curabitur metus potenti litora, etiam class semper proin morbi lacinia volutpat nunc.

            Etiam feugiat elementum vestibulum tellus sodales condimentum urna, rhoncus sed penatibus magna maecenas varius, metus platea facilisis sagittis pellentesque hac. Semper mollis viverra metus varius lacus massa iaculis erat, commodo gravida consequat sodales dis curae. Neque eleifend lacinia himenaeos ultricies est cras nisl auctor, mauris aliquet rhoncus a non vulputate habitant hendrerit, metus potenti tristique orci aliquam natoque tortor facilisi, nisi id sed platea nunc gravida conubia.




            <div class="grid grid-cols-2 gap-4 items-center">

              <div className="border border-gray-200  flex space-x-2 justify-center">

                <iframe title="hola" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63519.663296554856!2d-72.96614849428158!3d5.716169144911916!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e6a4674de99eae1%3A0x85f7d804dcaad1a6!2sParque%20El%20Laguito!5e0!3m2!1ses!2sco!4v1675704068375!5m2!1ses!2sco" width="600" height="450" style={{ border: '0' }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>



              </div>
              <div class="grid grid-cols-2 gap-4 items-center ">

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
        </div>
        {/* /End replace */}

      </main>
    </div>
  );
}
