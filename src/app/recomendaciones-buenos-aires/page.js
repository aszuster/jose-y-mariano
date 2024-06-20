"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Vector13 from "../../../public/images/vector13.svg";
import Vector15 from "../../../public/images/vector15.svg";
import Vector16 from "../../../public/images/vector16.svg";
import Vector17 from "../../../public/images/vector17.svg";
import Vector18 from "../../../public/images/vector18.svg";
import Vector18White from "../../../public/images/vector19white.svg";
import Vector20 from "../../../public/images/vector20.svg";
import Vector21White from "../../../public/images/vector21white.svg";
import Firma from "../../../public/images/firma-white.svg";
import alojamientoIcon from "../../../public/images/alojamiento-icon.svg";
import quehacerIcon from "../../../public/images/quehacer-icon.svg";
import gastronomiaIcon from "../../../public/images/gastronomia-icon.svg";
import quehacerBsAsIcon from "../../../public/images/quehacerbsas-icon.svg";
import chevronDown from "../../../public/images/chevron-down.svg";

export default function recomBsAs() {
  const [selectedTab, setSelectedTab] = useState("tab1");
  const [activeAccordion, setActiveAccordion] = useState(null);

  const toggleAccordion = (index) => {
    setActiveAccordion(activeAccordion === index ? null : index);
  };

  const accordionItems = [
    {
      title: "Palermo",
      content:
        "Palermo es el barrio mas grande de Buenos Aires y también uno de los mas caminables, con calles arboladas y donde se encuentran la mayoría de los locales de ropa y bares y restaurantes de moda. Se subdivide en Palermo Viejo, Palermo Alto, Palermo Chico, Palermo Soho y Palermo Hollywood.",
      content2:
        "Jardín Japones, Museo Malba, Parque del Rosedal, Museo Nacional de Arte Decorativo, Floralis Genérica (escultura en movimiento al lado de la Facultad de Derecho, la cual también pueden visitar), Av. Libertador (enorme avenida), Bosques de Palermo, Palermo Soho, Palermo Chico (Av. Cervino)",
    },
    {
      title: "Recoleta",
      content:
        "Barrio residencial con pequeñas reminiscencias de París. Recoleta ofrece increíbles ​restaurantes, museos y parques.",
      content2:
        "Cementerio de la Recoleta, Basílica Nuestra Señora del Pilar, Plaza Francia, Museo Nacional de Bellas Artes, Avenida Alvear (Si quieren comprar productos locales, pueden visitar “Arandu”, una icónica “Talabarteria” en calle Ayacucho 1924), Biblioteca Nacional, Centro Cultural Recoleta, Ateneo Splendid (un teatro que se convirtió en librería. Es considerada una de las librerías mas lindas del mundo).",
    },
    {
      title: "Belgrano",
      content:
        "Belgrano fue en sus inicios un municipio perteneciente a la provincia de Buenos Aires ​y lleva su nombre en homenaje al creador de la bandera. Es uno de los barrios más ​residenciales y pintorescos de Buenos Aires.",
      content2:
        "Estadio River Plate (si quieren ver un partido, hay que sacar entradas con anticipación), Chinatown, Iglesia Inmaculada Concepcion, Barrancas de Belgrano (muy lindo parque con una tradicional “glorieta” donde la gente baila Tango y Milonga incluso durante la semana a las 7:30 pm y a las 4:30 pm durante los fines de semana).",
    },
    {
      title: "San Telmo",
      content:
        "Hitos arquitectónicos y muchos bailarines de tango caracterizan este animado barrio. ​Es el barrio más antiguo de la ciudad: claramente artístico, con cafés, tiendas de ​antigüedades, calles adoquinadas y muchos artistas y bailarines.",
      content2:
        "Calle Defensa, Feria San Telmo (solo durante los fines de semana), el Zanjón de Granados, Mercado de San Telmo, Plaza Dorrego (lugar perfecto para ver bailar tango), MACBA (museo de arte contemporáneo), La Brigada (parilla icónica).",
    },
    {
      title: "​Centro/Retiro/Puerto Madero",
      content:
        "Retiro es hogar de varios edificios de importancia histórica y cerca de donde se ​encuentra la plaza de Mayo y la casa de gobierno. Puerto Madero es el barrio mas ​moderno de Buenos Aires, donde se encuentran las torres mas altas del país.",
      content2:
        "Torre Monumental, Edificio Kavanagh, Plaza San Martin, Teatro Colon (vale la pena visitar), Plaza de Mayo, Casa de Gobierno, Avenida 9 de Julio (la mas ancha del mundo!), Obelisco (donde se festejo la final del mundial), Puerto Madero, Puente de la Mujer.",
    },
    {
      title: "La Boca",
      content:
        "Es uno de los barrios más coloridos de la Ciudad y se caracteriza por la infinidad de turistas que lo visitan, buscando vivir un poco de tango y apreciar los firuletes porteños.",
      content2:
        "El Caminito, Fundación Proa, Museo Benito Quinquela Martin, Estadio de Boca Juniors (si quieren ver un partido, hay que sacar entradas con anticipación).",
    },
  ];

  return (
    <section className="flex flex-col items-center bg-offWhite text-black">
      <div className="lg:relative lg:w-full lg:flex lg:flex-col lg:items-center">
        <Image
          src={Vector13}
          alt=""
          className="hidden lg:block lg:absolute lg:bottom-[100px] lg:left-0 lg:w-[254px]"
        />
        <Image
          src={Vector20}
          alt=""
          className="hidden lg:block lg:absolute lg:bottom-0 lg:right-0 lg:w-[290px]"
        />
        <h2 className="font-rbeanie text-center text-[54px] lg:text-[95px] leading-[63px] lg:leading-[110px] mt-[62px] lg:mt-[108px] mb-[28px] text-mudGreenDark">
          Recomendaciones <br /> Buenos Aires
        </h2>
      </div>
      <div className="flex flex-col items-center max-w-[90%] lg:max-w-[1187px] lg:w-[990px] lg:relative pb-[88px]">
        <div className="lg:relative lg:w-full flex flex-col items-center lg:mt-[88px]">
          <Image src={alojamientoIcon} className="mb-[10px] lg:mb-[7px]" />
          <h5 className="text-[22px] uppercase leading-[27px] text-center tracking-[0.35em] lg:tracking-[0.4em] font-light lg:font-normal text-gray lg:max-w-[935px]">
            Alojamiento
          </h5>
          <p className="text-base lg:text-[22px] text-darkGray leading-[34px] lg:leading-[35px] max-w-[300px] lg:max-w-[766px] text-center mt-[20px] mb-[40px] lg:mb-[10px]">
            Recomendamos hospedarse en los barrios de{" "}
            <span className="font-semibold">Palermo o Recoleta</span>, donde
            encontrarán muy buenas opciones de hoteles y AirBNB.
          </p>
          <Image
            src={Vector18}
            alt=""
            className="mt-[26px] w-[233px] lg:mt-[40px] mb-[50px] lg:w-[411px]"
          />
          <Image src={quehacerBsAsIcon} className="mb-[10px] lg:mb-[7px]" />
          <h5 className="text-[22px] uppercase leading-[27px] text-center tracking-[0.35em] lg:tracking-[0.4em] font-light lg:font-normal text-gray lg:max-w-[935px]">
            ¿Qué hacer?
          </h5>
          <p className="text-base lg:text-[22px] text-darkGray leading-[34px] lg:leading-[35px] max-w-[300px] lg:max-w-[766px] text-center mt-[20px] mb-[40px] lg:mb-[70px]">
            Buenos Aires es una ciudad encantadora y vibrante, con muchos
            barrios y experiencias por descubrir. Acá les dejamos una lista de
            lugares que no se pueden perder.
          </p>
        </div>
        <div className="w-full lg:px-0 w-full">
          <div className="mx-auto w-full lg:max-w-[1148px] space-y-2">
            {accordionItems.map((item, index) => (
              <div key={index} className="w-full">
                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full flex items-center gap-x-[10px] w-full p-4 text-left text-[18px] font-semibold text-darkGray border-b border-darkGray"
                >
                  <span>{item.title}</span>
                  <Image
                    src={chevronDown}
                    alt="chevron"
                    className={`w-5 h-5 transition-transform ${
                      activeAccordion === index ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {activeAccordion === index && (
                  <div className="p-4 text-darkGray leading-[26px] max-w-[294px] lg:max-w-[926px]">
                    {item.content}.<br />
                    <br />
                    <span className="font-bold">Lugares para ver:</span>{" "}
                    {item.content2}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="bg-mudGreen pt-[51px] pb-[57px] lg:pb-[100px] w-full h-full">
        <div className="lg:relative max-w-[90%] flex flex-col items-center mx-auto">
          <Image
            src={Vector18White}
            alt=""
            className="w-[179px] lg:mt-[115px] mb-[50px] lg:w-[411px]"
          />
          <Image src={gastronomiaIcon} className="mb-[10px]" />
          <h5 className="text-[22px] uppercase leading-[27px] text-center tracking-[0.35em] lg:tracking-[0.4em] font-light lg:font-normal text-offWhite lg:max-w-[935px] lg:mb-0">
            Gastronomía
          </h5>
          <p className="text-base lg:text-[22px] text-offWhite leading-[34px] lg:leading-[35px] max-w-[300px] lg:max-w-[828px] text-center mt-[20px] mb-[40px] lg:mb-[60px]">
            Van a encontrar excelentes opciones para comer alrededor de Buenos
            Aires, debajo les incluimos igualmente algunas recomendaciones.
          </p>
          <div className="w-full max-w-md max-w-[90%] lg:max-w-[1148px]">
            <div className="flex justify-center border-b border-offWhite">
              <button
                className={`px-[15px] lg:px-[45px] py-[10px] lg:py-[17px] uppercase text-[10px] lg:text-[22px] tracking-[0.5em] ${
                  selectedTab === "tab1"
                    ? "text-gray bg-offWhite font-bold rounded-tl-[11px] lg:rounded-tl-[25px] rounded-tr-[2px] lg:rounded-tr-[4px]"
                    : "text-offWhite bg-transparent font-normal"
                }`}
                onClick={() => setSelectedTab("tab1")}
              >
                Restaurantes
              </button>
              <button
                className={`px-[15px] lg:px-[45px] py-[10px] lg:py-[17px] uppercase text-[10px] lg:text-[22px] tracking-[0.5em] ${
                  selectedTab === "tab2"
                    ? "text-gray bg-offWhite font-bold rounded-tl-[11px] lg:rounded-tl-[25px] rounded-tr-[2px] lg:rounded-tr-[4px]"
                    : "text-offWhite bg-transparent font-normal"
                }`}
                onClick={() => setSelectedTab("tab2")}
              >
                Bares
              </button>
              <button
                className={`px-[15px] lg:px-[45px] py-[10px] lg:py-[17px] uppercase text-[10px] lg:text-[22px] tracking-[0.5em] ${
                  selectedTab === "tab3"
                    ? "text-gray bg-offWhite font-bold rounded-tl-[11px] lg:rounded-tl-[25px] rounded-tr-[2px] lg:rounded-tr-[4px]"
                    : "text-offWhite bg-transparent font-normal"
                }`}
                onClick={() => setSelectedTab("tab3")}
              >
                Cafés
              </button>
            </div>
            <div className=" pt-[30px] lg:pt-[63px]">
              {selectedTab === "tab1" && (
                <div>
                  <ul className="font-base text-left leading-[30px] text-offWhite lg:text-[22px] lg:leading-[35px] ">
                    <div className="lg:flex lg:gap-x-[100px] lg:justify-evenly">
                    <div className="lg:max-w-[423px]">
                    <li className="my-5">
                      <p>
                        <span className="font-semibold underline">
                          Parilla Don Julio
                        </span>
                        <br/>
                        Asado – Michelin Star. Reservar con anticipación 
                      </p>
                    </li>
                    <li className="my-5">
                      <p>
                        <span className="font-semibold underline">
                          Anchoíta Cava
                        </span>
                        <br  />
                        Comida Argentina – Restaurante N1 hoy en día en Buenos
                        Aires. Casi imposible conseguir reserva pero si van bien
                        temprano o después de las 22 hs pueden conseguir lugar
                        en la cava
                      </p>
                    </li>
                    <li className="my-5">
                      <p>
                        <span className="font-semibold underline">Elena</span>
                        
                       <br/>
                        De todo un poco
                      </p>
                    </li>
                    <li className="my-5">
                      <p>
                        <span className="font-semibold underline">
                          El Preferido
                        </span>
                        <br />
                        Comida Argentina – mismos dueños que Don Julio pero más
                        tranquilo y fácil de conseguir reserva
                      </p>
                    </li>
                    <li className="my-5">
                      <p>
                        <span className="font-semibold underline">
                          Mengano BA
                        </span>
                        <br />
                        Comida Argentina
                      </p>
                    </li>
                    <li className="my-5">
                      <p>
                        <span className="font-semibold underline">
                          Niño Gordo
                        </span>
                        <br  />
                        Comida Fusión Argentina y Japonesa
                      </p>
                    </li>
                    <li className="my-5">
                      <p>
                        <span className="font-semibold underline">
                          Cantina Palermo
                        </span>
                        <br  />
                        Bodegón Argentino
                      </p>
                    </li>
                    <li className="my-5">
                      <p>
                        <span className="font-semibold underline">
                          El Sanjuanino
                        </span>
                        <br />
                        Bodegón Argentino
                      </p>
                    </li>
                    <li className="my-5">
                      <p>
                        <span className="font-semibold underline">
                          Tigre Morado
                        </span>
                        <br  />
                        Comida Fusión Japonesa y Peruana
                      </p>
                    </li>
                    <li className="my-5">
                      <p>
                        <span className="font-semibold underline">
                          Parilla El Secretito
                        </span>
                        <br  />
                        Asado – Reservar con anticipación
                      </p>
                    </li>
                    </div>
                    <div className="lg:max-w-[423px]">
                    <li className="my-5">
                      <p>
                        <span className="font-semibold underline">Atte.</span>
                        <br/>
                        Comida Italiana
                      </p>
                    </li>
                    <li className="my-5">
                      <p>
                        <span className="font-semibold underline">MARTi</span>
                        <br  />
                        Vegetariano – pero aprobado por Mariano!
                      </p>
                    </li>
                    <li className="my-5">
                      <p>
                        <span className="font-semibold underline">
                          Happening
                        </span>
                        <br />
                        Comida Argentina
                      </p>
                    </li>
                    <li className="my-5">
                      <p>
                        <span className="font-semibold underline">
                          Spritzza
                        </span>
                        <br />
                        Pizzas y Aperol
                      </p>
                    </li>
                    <li className="my-5">
                      <p>
                        <span className="font-semibold underline">
                          La Alacena Trattoria
                        </span>
                        <br  />
                        Pastas
                      </p>
                    </li>
                    <li className="my-5">
                      <p>
                        <span className="font-semibold underline">
                          Chocho Sushi
                        </span>
                        <br />
                        Omakase nada caro
                      </p>
                    </li>
                    <li className="my-5">
                      <p>
                        <span className="font-semibold underline">
                          Parilla El Pobre Luis
                        </span>
                        <br  />
                        Comida Argentina
                      </p>
                    </li>
                    <li className="my-5">
                      <p>
                        <span className="font-semibold underline">
                          Lima Estilo Nikkei
                        </span>
                        <br  />
                        Comida Fusión Japonesa y Peruana
                      </p>
                    </li>
                    <li className="my-5">
                      <p>
                        <span className="font-semibold underline">
                          Paru Inkas Sushi & Grill
                        </span>
                        <br  />
                        Comida Fusión Japonesa y Peruana, El favorito de Jose
                      </p>
                    </li>
                    <li className="my-5">
                      <p>
                        <span className="font-semibold underline">
                          Nicky Harrison
                        </span>
                        <br  />
                        Sushi – pedir pasar a conocer la “bodega” y los llevan
                        al Speakeasy por un drink
                      </p>
                    </li>
                    </div>
                    </div>
                  </ul>
                </div>
              )}
              {selectedTab === "tab2" && (
                <div className="lg:pl-[70px]">
                  <ul className="font-base text-left leading-[30px] text-offWhite lg:text-[22px] lg:leading-[35px] ">
                    <li className="my-5">
                      <p>
                        <span className="font-semibold">Pony Line </span>
                        <br className="lg:hidden" />
                        {/* Comida Argentina – Restaurante N1 hoy en día en Buenos Aires. Casi imposible conseguir reserva pero si van bien temprano o después de las 22 hs pueden conseguir lugar en la cava */}
                      </p>
                    </li>
                    <li className="my-5">
                      <p>
                        <span className="font-semibold">
                          Floreria Atlantico
                        </span>
                        <br className="lg:hidden" />
                        {/* De todo un poco */}
                      </p>
                    </li>
                    <li className="my-5">
                      <p>
                        <span className="font-semibold">Bar Presidente</span>
                        <br className="lg:hidden" />
                        {/* Comida Argentina – mismos dueños que Don Julio pero más tranquilo 
y fácil de conseguir reserva */}
                      </p>
                    </li>
                    <li className="my-5">
                      <p>
                        <span className="font-semibold">Festival</span>
                        <br className="lg:hidden" />
                        {/* Comida Argentina */}
                      </p>
                    </li>
                    <li className="my-5">
                      <p>
                        <span className="font-semibold">Soria</span>
                        <br className="lg:hidden" />
                        {/* Comida Fusión Argentina y Japonesa */}
                      </p>
                    </li>
                    <li className="my-5">
                      <p>
                        <span className="font-semibold">Helka</span>
                        <br className="lg:hidden" />
                        {/* Bodegón Argentino */}
                      </p>
                    </li>
                    <li className="my-5">
                      <p>
                        <span className="font-semibold">La Ferneteria</span>
                        <br className="lg:hidden" />
                        {/* Bodegón Argentino */}
                      </p>
                    </li>
                    <li className="my-5">
                      <p>
                        <span className="font-semibold">Invernadero</span>
                        <br className="lg:hidden" />
                        {/* Comida Fusión Japonesa y Peruana */}
                      </p>
                    </li>
                    <li className="my-5">
                      <p>
                        <span className="font-semibold">Naranjo</span>
                        <br className="lg:hidden" />
                        {/* Asado – Reservar con anticipación */}
                      </p>
                    </li>
                    <li className="my-5">
                      <p>
                        <span className="font-semibold">
                          La Fuerza Vermuteria
                        </span>
                        <br className="lg:hidden" />
                        {/* Comida Italiana */}
                      </p>
                    </li>
                    <li className="my-5">
                      <p>
                        <span className="font-semibold">Gran Bar Danzon</span>
                        <br className="lg:hidden" />
                        {/* Vegetariano – pero aprobado por Mariano! */}
                      </p>
                    </li>
                    <li className="my-5">
                      <p>
                        <span className="font-semibold">
                          Frank’s – Speakeasy
                        </span>
                        <br className="lg:hidden" />
                        {/* Comida Argentina */}
                      </p>
                    </li>
                    <li className="my-5">
                      <p>
                        <span className="font-semibold">Trade Sky Bar</span>
                        <br className="lg:hidden" />
                        {/* Pizzas y Aperol */}
                      </p>
                    </li>
                  </ul>
                </div>
              )}
              {selectedTab === "tab3" && (
                <div className="lg:pl-[70px] lg:mt-7">
                  <p className="text-offWhite lg:text-[22px]">Café/Desayunos/Brunch</p>
                  <ul className="font-base text-left leading-[30px] text-offWhite lg:text-[22px] lg:leading-[35px] ">
                    <li className="my-5">
                      <p>
                        <span className="font-semibold">Birkin</span>
                        <br  />
                        El favorito de la novia
                      </p>
                    </li>
                    <li className="my-5">
                      <p>
                        <span className="font-semibold">Oli Café </span>
                        <br  />
                        {/* De todo un poco */}
                      </p>
                    </li>
                    <li className="my-5">
                      <p>
                        <span className="font-semibold">Café Cuervo</span>
                        <br />
                        {/* Comida Argentina – mismos dueños que Don Julio pero más tranquilo 
y fácil de conseguir reserva */}
                      </p>
                    </li>
                    <li className="my-5">
                      <p>
                        <span className="font-semibold">
                          La Panadería de Anchoíta 
                        </span>
                        <br  />
                        {/* Comida Argentina */}
                      </p>
                    </li>
                    <li className="my-5">
                      <p>
                        <span className="font-semibold">
                          Betular Patisserie
                        </span>
                        <br />
                        Es lejos, pero vale la pena el viaje
                      </p>
                    </li>
                    <li className="my-5">
                      <p>
                        <span className="font-semibold">L’Harmonie</span>
                        <br  />
                        {/* Bodegón Argentino */}
                      </p>
                    </li>
                    <li className="my-5">
                      <p>
                        <span className="font-semibold">Clorindo</span>
                        <br  />
                        {/* Bodegón Argentino */}
                      </p>
                    </li>
                    <li className="my-5">
                      <p>
                        <span className="font-semibold">Atelier Fuerza</span>
                        <br  />
                        {/* Comida Fusión Japonesa y Peruana */}
                      </p>
                    </li>
                    <li className="my-5">
                      <p>
                        <span className="font-semibold">Punto. Café</span>
                        <br  />
                        {/* Asado – Reservar con anticipación */}
                      </p>
                    </li>
                    <li className="my-5">
                      <p>
                        <span className="font-semibold">Café Mishinegue</span>
                        <br  />
                        {/* Comida Italiana */}
                      </p>
                    </li>
                  </ul>
                </div>
              )}
            </div>
          </div>
          <Image
            src={Vector21White}
            alt=""
            className="w-[179px] lg:mt-[115px] mb-[50px] lg:w-[416px] hidden lg:block lg:absolute lg:bottom-[-50px] lg:right-0"
          />
        </div>
      </div>

      <div className="bg-mudGreenDark text-white w-full pt-[43px] lg:pt-[54px] pb-[30px] lg:pb-[40px]">
        <div className="flex flex-col items-center mx-auto">
          <Image src={Firma} alt="" className="lg:w-[192px]" />
        </div>
      </div>
    </section>
  );
}
