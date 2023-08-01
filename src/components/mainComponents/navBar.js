import React, { useEffect, useState } from "react";
import { Disclosure } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { SlLogin } from "react-icons/sl";
import { Link } from "react-router-dom";

export default function NavBar() {
  
  const [show, setShow] = useState(false);

  const navigation = [
    { name: "Inicio", href: "/", current: false },
    { name: "Servicios", href: "/servicios", current: false },
    {
      name: "Trabajos Realizados",
      href: "/trabajosRealizados",
      current: false,
    },
    { name: "¿Quienes Somos?", href: "/quinesSomos", current: false },
    { name: "Contactos", href: "/contactos", current: false },
  ];

  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }

  const logOut = () => {
    try {
      localStorage.removeItem("userName");
      localStorage.removeItem("role");
      localStorage.removeItem("token");
      setShow(false);
      window.location.href = "/login";
    } catch (e) {
      // an error
    }
  };

  useEffect(() => {
    if (!localStorage.getItem("userName")) {
      setShow(false);
    } else {
      setShow(true);
    }
  }, []);
  return (
    <>
      <div className="min-h-full ">
        <Disclosure
          as="nav"
          className="bg-gray-200 border-b-4 border-gray-300"
        >
          {({ open }) => (
            <>
              <div className="mx-auto max-w-7xl px-1 sm:px-6 lg:px-20">
                <div className="flex h- items-center justify-between">
                  <div className="flex items-center">
                    <div className="flex-shrink-0">
                      <a href="/" rel="noreferrer">
                        <img
                          className="hover:animate-pulse object-contain h-20 w-21"
                          src="logo-ceiba-icono-sinfondo.png"
                          alt="CeibaSol Logo"
                        />
                      </a>
                    </div>
                    <div className="hidden md:block">
                      <div className="ml-10 flex items-baseline space-x-4">
                        {navigation.map((item) => (
                          <a
                            key={item.name}
                            href={item.href}
                            className={classNames(
                              "ease-out duration-300 text-black-800 hover:bg-lime-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                            )}
                            aria-current={item.current ? "page" : undefined}
                          >
                            {item.name}
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="hidden md:block">
                    <div className="ml-4 flex items-center md:ml-6">
                      {show ? (
                        <button
                          type="button"
                          class="ease-out duration-500 text-black-900 bg-white hover:bg-red-700 hover:text-white border border-red-700 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center mr-2 mb-2"
                          onClick={() => logOut()}
                        >
                          <SlLogin className="h-4 w-4 mr-4" />
                          Cierre de Sesion
                        </button>
                      ) : (
                        <Link to={"/login"}>
                          <button
                            type="button"
                            class="ease-out duration-500 text-black-900 bg-white hover:bg-lime-700 hover:text-white border border-lime-700 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center mr-2 mb-2"
                            to="/"
                          >
                            <SlLogin className="h-4 w-4 mr-4" />
                            Inicio de Sesion
                          </button>
                        </Link>
                      )}
                    </div>
                  </div>
                  <div className="-mr-2 flex md:hidden">
                    {/* Version telefono menu */}
                    <Disclosure.Button className="inline-flex items-center justify-center rounded-md bg-lime-700 p-2 text-slate-100 border border-slate-100 hover:border-lime-700 hover:bg-slate-100 hover:text-lime-700 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                      <span className="sr-only">Abrir Menu</span>
                      {open ? (
                        <XMarkIcon
                          className="block h-6 w-6 "
                          aria-hidden="true"
                        />
                      ) : (
                        <Bars3Icon
                          className="block h-6 w-6"
                          aria-hidden="true"
                        />
                      )}
                    </Disclosure.Button>
                  </div>
                </div>
              </div>

              <Disclosure.Panel data-aos="zoom-in" className="md:hidden ">
                <div className="space-y-1 px-2 pt-2 pb-3 sm:px-3">
                  {navigation.map((item) => (
                    <Disclosure.Button
                      key={item.name}
                      as="a"
                      href={item.href}
                      className={classNames(
                        item.current
                          ? "bg-lime-700 text-white"
                          : "text-black-800 hover:bg-lime-700 hover:text-white",
                        "block px-3 py-2 rounded-md text-base font-medium"
                      )}
                      aria-current={item.current ? "page" : undefined}
                    >
                      {item.name}
                    </Disclosure.Button>
                  ))}
                </div>

                <div className="ml-4 flex items-center md:ml-6">
                  {show ? (
                    <button
                      type="button"
                      class="ease-out duration-500 text-black-900 bg-white hover:bg-red-700 hover:text-white border border-red-700 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center mr-2 mb-2"
                      onClick={() => logOut()}
                    >
                      <SlLogin className="h-4 w-4 mr-4" />
                      Cierre de Sesion
                    </button>
                  ) : (
                    <Link to={"/login"}>
                      <button
                        type="button"
                        class="ease-out duration-500 text-black-900 bg-white hover:bg-lime-700 hover:text-white border border-lime-700 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center mr-2 mb-2"
                      >
                        <SlLogin className="h-4 w-4 mr-4" />
                        Inicio de Sesion
                      </button>
                    </Link>
                  )}
                </div>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
      </div>
    </>
  );
}
