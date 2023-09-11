import React, { useState } from "react";
import { MdOutlineMarkEmailRead } from "react-icons/md";
import { AiOutlineLoading } from "react-icons/ai";
import { BsHouse, BsTelephone, BsClockHistory } from "react-icons/bs";
import { CiMail } from "react-icons/ci";

import ContactoApi from "../../api/ContactoApi";

export default function Contactos() {
  const [nombre, setNombre] = useState("");
  const [correo, setCorreo] = useState("");
  const [telefono, setTelefono] = useState("");
  const [asunto, setAsunto] = useState("");
  const [mensaje, setMensaje] = useState("");
  const [windowEmergente, setWindowEmergente] = useState(false);
  const [windowEmergente2, setWindowEmergente2] = useState(false);
  const [mensajeEmergente, setMensajeEmergente] = useState("");
  const [loading, setLoading] = useState(false);

  const cleanFields = () => {
    setNombre("");
    setCorreo("");
    setTelefono("");
    setAsunto("");
    setMensaje("");
  };

  const enviarCorreo = () => {
    if (
      nombre === "" ||
      correo === "" ||
      telefono === "" ||
      asunto === "" ||
      mensaje === ""
    ) {
      setMensajeEmergente("HAY CAMPOS VACIOS");
      setWindowEmergente2(true);
    } else {
      setLoading(true);
      const data = {
        nombre,
        correo,
        telefono,
        asunto,
        mensaje,
      };

      ContactoApi.enviarCorreo(data)

        .then((res) => {
          setMensajeEmergente(res.message);
          setWindowEmergente(true);
        })
        .catch((res) => {
          setMensajeEmergente(res.response.data.err);
          setWindowEmergente(true);
        });
    }
  };

  return (
    <div data-aos="zoom-out-up" class="">
      <header class="">
        <div
          data-aos="fade-up"
          className="scroll-smooth hover:scroll-auto pt-6 flex space-x-2 justify-center "
        >
          <h1 className="text-5xl font-medium leading-tight text-gray-800 mb-2.5 mt-0">
            CONTACTOS
          </h1>
        </div>
      </header>
      <main className="scroll-smooth hover:scroll-auto">
        <div className=" mb-2 bg-white shadow mx-auto max-w-7xl py-2 sm:px-6 lg:px-10 ">
          {/* Replace with your content */}
          <div className="">
            <div className="flex justify-center bg-gray-200 rounded-lg">
              <div class="grid gap-4 sm:gap-8 md:gap-8 lg:gap-8 xl:gap-8 2xl:gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-2 m-10 lg:px-40 ">
                <div
                  data-aos="fade-down-right"
                  class="max-w-sm p-6 bg-white text-center hover:bg-gray-50 border border-lime-600 rounded-lg rounded-[12px] shadow "
                >
                  <div class="flex justify-center">
                    <BsHouse class="w-10 h-10 mb-2 text-lime-500 animate-bounce"></BsHouse>
                  </div>
                  <h5 class="mb-2 text-2xl font-semibold tracking-tight text-gray-900 flex justify-center">
                    Dirección
                  </h5>
                  <p class="mb-3 font-normal text-gray-500 flex justify-center">
                    CALLE 23 # 9 A - 56, SOGAMOSO, BOYACÁ
                  </p>
                </div>

                <div
                  data-aos="fade-down-left"
                  class="max-w-sm p-6 bg-white text-center hover:bg-gray-50 border border-lime-600 rounded-lg rounded-[12px] shadow "
                >
                  <div class="flex justify-center">
                    <CiMail class="w-10 h-10 mb-2 text-lime-500 animate-bounce"></CiMail>
                  </div>
                  <h5 class="mb-2 text-2xl font-semibold tracking-tight text-gray-900 flex justify-center">
                    Correo Electrónico
                  </h5>

                  <p class="mb-3 font-normal text-gray-500 flex justify-center">
                    ceibasolsas@gmail.com
                  </p>
                </div>

                <div
                  data-aos="fade-up-right"
                  class="max-w-sm p-6 bg-white text-center  hover:bg-gray-50 border border-lime-600 rounded-lg rounded-[12px] shadow"
                >
                  <div class="flex justify-center">
                    <BsTelephone class="w-10 h-10 mb-2 text-lime-500 animate-bounce"></BsTelephone>
                  </div>
                  <h5 class="mb-2 text-2xl font-semibold tracking-tight text-gray-900 flex justify-center">
                    Teléfono
                  </h5>
                  <p class="mb-3 font-normal text-gray-500 flex justify-center">
                    310 274 1994
                  </p>
                </div>
                <div
                  data-aos="fade-up-left"
                  class="max-w-sm p-6 bg-white text-center  hover:bg-gray-50 border border-lime-600 rounded-lg rounded-[12px] shadow"
                >
                  <div class="flex justify-center">
                    <BsClockHistory class="w-10 h-10 mb-2 text-lime-500 animate-bounce"></BsClockHistory>
                  </div>
                  <h5 class="mb-2 text-2xl font-semibold tracking-tight text-gray-900 flex justify-center">
                    Horarios de atención
                  </h5>
                  <p class="mb-3 font-normal text-gray-500 flex justify-center">
                    Lunes a Viernes (8 am - 5 pm)
                  </p>
                </div>
              </div>
            </div>
            <div class="items-center sm:px-40 px-4 py-6 sm:px-0 ">
              <div
                data-aos="zoom-out-up"
                className="flex space-x-2 justify-center "
              >
                <iframe
                  title="ubicacion"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3969.9202437310173!2d-72.9214002!3d5.724628099999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e6a460b3b57451f%3A0xcc8e4dcd320da3c5!2sCl.%2023%20%239a-56%2C%20Sogamoso%2C%20Boyac%C3%A1!5e0!3m2!1ses!2sco!4v1681671906802!5m2!1ses!2sco"
                  width="100%"
                  height="400"
                  style={{ border: "0" }}
                  allowfullscreen=""
                  loading="lazy"
                  referrerpolicy="no-referrer-when-downgrade"
                  className="rounded-[14px]"
                ></iframe>
              </div>
            </div>

            <div className="bg-gray-200 rounded-lg">
              <div class="inline-flex items-center justify-center w-full my-8 sm:px-40">
                <hr class="w-full h-px bg-lime-600 border-0 "></hr>
              </div>
              <h1 class="text-3xl mb-8 text-center ">
                <strong>Buscanos en</strong>
              </h1>
              <div class="flex justify-center items-center sm:px-40 ">
                <div class="flex justify-center">
                  <div data-aos="fade-right">
                    <a
                      href="https://www.instagram.com/ceiba_sol/"
                      TARGET="blank"
                      rel="noreferrer"
                    >
                      <img
                        className="hover:animate-pulse object-contain h-20 w-21"
                        src="https://logotipoz.com/wp-content/uploads/2021/10/instagram-2-1.svg"
                        alt="Instagram"
                      />
                    </a>
                  </div>
                  <div data-aos="fade-down">
                    <a
                      href="https://www.facebook.com/profile.php?id=100090879139349"
                      TARGET="blank"
                      rel="noreferrer"
                    >
                      <img
                        className="hover:animate-pulse object-contain h-20 w-21 mx-8 sm:mx-16 md:mx-20 lg:mx-20 xl:mx-20 2xl:mx-20"
                        src="https://www.freepnglogos.com/uploads/facebook-logo-13.png"
                        alt="Facebook"
                      />
                    </a>
                  </div>
                  <div data-aos="fade-left">
                    <a
                      href="https://api.whatsapp.com/send?phone=573102741994&text=Hola,%20quiero%20hacer%20una%20consulta"
                      TARGET="blank"
                      rel="noreferrer"
                    >
                      <img
                        className="hover:animate-pulse object-contain h-20 w-21"
                        src="https://cdn-icons-png.flaticon.com/512/124/124034.png?w=360"
                        alt="WhatsApp"
                        style={{ borderRadius: "10px" }}
                      />
                    </a>
                  </div>
                </div>
              </div>

              <div class="inline-flex items-center justify-center w-full my-8 sm:px-40">
                <hr class="w-full h-px bg-lime-600 border-0 "></hr>
              </div>
            </div>
            <div className="mt-6 px-4 py-6">
              <div
                id="escribenos"
                data-aos="zoom-in"
                class="relative max-w-2xl rounded-lg rounded-[12px] border border-gray-400 bg-white py-5 px-5 m-auto w-full bg-gray-200 hover:bg-gray-100"
              >
                {windowEmergente ? (
                  <div class="absolute inset-0 rounded-lg rounded-[12px] bg-gray-900 bg-opacity-50 flex justify-center items-center">
                    <div
                      data-aos="zoom-in"
                      class="absolute inset-0 flex justify-center items-center text-center"
                    >
                      <div class="bg-white p-4 rounded-lg rounded-[12px] shadow-lg">
                        <h2 class="text-xl font-semibold mb-4">
                          Envio del correo electronico
                        </h2>
                        <p class="mb-4">{mensajeEmergente}</p>
                        <button
                          class="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 "
                          onClick={() =>
                            setWindowEmergente(false) ||
                            setLoading(false) ||
                            cleanFields()
                          }
                        >
                          Cerrar
                        </button>
                      </div>
                    </div>
                  </div>
                ) : (
                  <></>
                )}
                {windowEmergente2 ? (
                  <div class="absolute inset-0 rounded-lg rounded-[12px] bg-gray-900 bg-opacity-50 flex justify-center items-center">
                    <div
                      data-aos="zoom-in"
                      class="absolute inset-0 flex justify-center items-center text-center"
                    >
                      <div class="bg-white p-4 rounded-lg rounded-[12px] shadow-lg">
                        <h2 class="text-xl font-semibold mb-4">
                          ERROR - Envio del correo electronico
                        </h2>
                        <p class="mb-4">{mensajeEmergente}</p>
                        <button
                          class="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 "
                          onClick={() =>
                            setWindowEmergente2(false) || setLoading(false)
                          }
                        >
                          Cerrar
                        </button>
                      </div>
                    </div>
                  </div>
                ) : (
                  <></>
                )}
                <div class="text-3xl mb-8 text-center ">
                  <strong>Habla con nosotros</strong>
                </div>

                <div class=" gap-4 max-w-xl m-auto ">
                  <div class="col-span-2 lg:col-span-1 mt-2">
                    <input
                      type="text"
                      value={nombre}
                      class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-lime-700 focus:border-lime-700"
                      placeholder="Nombre"
                      onChange={(e) => setNombre(e.target.value)}
                    />
                  </div>

                  <div class="col-span-2 lg:col-span-1 mt-2">
                    <input
                      type="text"
                      value={correo}
                      class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-lime-700 focus:border-lime-700"
                      placeholder="Direccion email"
                      onChange={(e) => setCorreo(e.target.value)}
                    />
                  </div>

                  <div class="col-span-2 lg:col-span-1 mt-2">
                    <input
                      type="text"
                      value={telefono}
                      class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-lime-700 focus:border-lime-700"
                      placeholder="Telefono"
                      onChange={(e) => setTelefono(e.target.value)}
                    />
                  </div>

                  <div class="col-span-2 lg:col-span-1 mt-2">
                    <input
                      type="text"
                      value={asunto}
                      class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-lime-700 focus:border-lime-700"
                      placeholder="Asunto"
                      onChange={(e) => setAsunto(e.target.value)}
                    />
                  </div>

                  <div class="col-span-2 mt-8">
                    <textarea
                      cols="30"
                      rows="8"
                      value={mensaje}
                      class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-lime-700 focus:border-lime-700"
                      placeholder="Mensaje"
                      onChange={(e) => setMensaje(e.target.value)}
                    ></textarea>
                  </div>

                  <div class="col-span-2 text-right mt-4">
                    {loading ? (
                      <button
                        type="button"
                        class="ease-out duration-500 text-black-900 bg-white hover:bg-lime-700 hover:text-white border border-lime-700 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center mr-2 mb-2"
                        onClick={() => enviarCorreo()}
                      >
                        <div class="animate-spin">
                          <AiOutlineLoading></AiOutlineLoading>
                        </div>
                        <div class="ml-4">Enviando...</div>
                      </button>
                    ) : (
                      <button
                        type="button"
                        class="ease-out duration-500 text-black-900 bg-white hover:bg-lime-700 hover:text-white border border-lime-700 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center mr-2 mb-2"
                        onClick={() => enviarCorreo()}
                      >
                        <MdOutlineMarkEmailRead></MdOutlineMarkEmailRead>
                        <div class="ml-4">Enviar Correo</div>
                      </button>
                    )}
                  </div>
                </div>
              </div>
              <br></br>
            </div>
          </div>

          {/* /End replace */}
        </div>
        <br></br>
      </main>
    </div>
  );
}
