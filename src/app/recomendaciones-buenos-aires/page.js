"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Animated from "../../../components/Animated/Animated";
import Vector13 from "../../../public/images/vector13.svg";
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

export default function RecomBsAs() {
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
        "Jardín Japones, Museo Malba, Parque del Rosedal, Museo Nacional de Arte Decorativo, Floralis Genérica (escultura en movimiento al lado de la Facultad de Derecho, la cual también pueden visitar), Av. Libertador (enorme avenida), Bosques de Palermo, Palermo Soho, Palermo Chico (Av. Cervino).",
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
        "Retiro es hogar de varios edificios de importancia histórica y cerca de donde se ​encuentra la Plaza de Mayo y la Casa de Gobierno. Puerto Madero es el barrio mas ​moderno de Buenos Aires, donde se encuentran las torres mas altas del país.",
      content2:
        "Torre Monumental, Edificio Kavanagh, Plaza San Martin, Teatro Colon (vale la pena visitar), Plaza de Mayo, Casa de Gobierno, Avenida 9 de Julio (la mas ancha del mundo!), Obelisco (donde se festejó la final del mundial), Puerto Madero, Puente de la Mujer.",
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
    <section className="flex flex-col items-center bg-offWhite text-black overflow-x-hidden">
      <div className="md:relative md:w-full md:flex md:flex-col md:items-center">
        <Image
          src={Vector13}
          alt=""
          className="hidden lg:block lg:absolute lg:bottom-[100px] lg:left-0 lg:w-[200px]"
        />
        <Image
          src={Vector20}
          alt=""
          className="hidden lg:block lg:absolute lg:bottom-0 lg:right-0 lg:w-[250px]"
        />
         <Animated animationClass="animate-slidein100">
        <h2 className="font-rbeanie text-center text-[54px] md:text-[80px] leading-[63px] md:leading-[88px] mt-[62px] md:mt-[80px] mb-[28px] text-mudGreenDark">
          Recomendaciones <br /> Buenos Aires
        </h2>
        </Animated>
      </div>
      <div className="flex flex-col items-center max-w-[90%] md:max-w-[950px] md:w-[990px] md:relative pb-[88px]">
        <div className="md:relative md:w-full flex flex-col items-center md:mt-[60px]">
        <Animated animationClass="animate-slidein300">
          <Image src={alojamientoIcon} className="mb-[10px] md:mb-[7px] mx-auto" />
          <h5 className="text-[22px] md:text-[20px] uppercase leading-[27px] text-center tracking-[0.35em] md:tracking-[0.4em] font-light md:font-normal text-gray md:max-w-[935px]">
            Alojamiento
          </h5>
          </Animated>
          <Animated animationClass="animate-slidein500">
          <p className="text-base md:text-[18px] text-darkGray leading-[34px] md:leading-[30px] max-w-[300px] md:max-w-[700px] text-center mt-[20px] mb-[40px] md:mb-[10px]">
            Recomendamos hospedarse en los barrios de{" "}
            <span className="font-semibold">Palermo o Recoleta</span>, donde
            encontrarán muy buenas opciones de hoteles y Airbnb.
          </p>
          </Animated>
          <Image
            src={Vector18}
            alt=""
            className="mt-[26px] w-[233px] md:mt-[40px] mb-[50px] md:w-[350px]"
          />
           <Animated animationClass="animate-slidein700">
          <Image src={quehacerBsAsIcon} className="mb-[10px] md:mb-[7px] mx-auto" />
          <h5 className="text-[22px] md:text-[20px] uppercase leading-[27px] text-center tracking-[0.35em] md:tracking-[0.4em] font-light md:font-normal text-gray md:max-w-[935px]">
            ¿Qué hacer?
          </h5>
          </Animated>
          <Animated animationClass="animate-slidein900">
          <p className="text-base md:text-[18px] text-darkGray leading-[34px] md:leading-[30px] max-w-[300px] md:max-w-[750px] text-center mt-[20px] mb-[40px] md:mb-[70px]">
            Buenos Aires es una ciudad encantadora y vibrante, con muchos
            barrios y experiencias por descubrir. Acá les dejamos una lista de
            lugares que no se pueden perder.
          </p>
          </Animated>
        </div>
        <div className="md:px-0 w-full">
        <Animated animationClass="animate-slidein100">
      <div className="mx-auto w-full md:max-w-[720px] lg:max-w-[950px] space-y-2">
        {accordionItems.map((item, index) => (
          <div key={index} className="w-full">
            <button
              onClick={() => toggleAccordion(index)}
              className="w-full flex items-center gap-x-[10px] p-4 text-left text-[18px] font-semibold text-darkGray border-b border-darkGray"
            >
              <span>{item.title}</span>
              <Image
                src={chevronDown}
                alt="chevron"
                className={`w-5 h-5 transition-transform duration-500 ${
                  activeAccordion === index ? "rotate-180" : ""
                }`}
              />
            </button>
            <div
              className={`overflow-hidden transition-all duration-500 ${
                activeAccordion === index ? "max-h-[1000px] opacity-100" : "max-h-0 opacity-0"
              }`}
            >
              <div className="p-4 text-darkGray leading-[26px] max-w-[294px] md:max-w-[926px]">
                {item.content}
                <br />
                <br />
                <span className="font-bold">Lugares para ver:</span> {item.content2}
              </div>
            </div>
          </div>
        ))}
      </div>
      </Animated>
    </div>
      </div>
      <div className="bg-mudGreen pt-[51px] pb-[57px] md:pb-[100px] w-full h-full">
        <div className="md:relative max-w-[90%] flex flex-col items-center mx-auto">
          <Image
            src={Vector18White}
            alt=""
            className="w-[179px] md:mt-[50px] mb-[50px] md:w-[350px]"
          />
           <Animated animationClass="animate-slidein100">
          <Image src={gastronomiaIcon} className="mb-[10px] mx-auto" />
          <h5 className="text-[22px] md:text-[20px] uppercase leading-[27px] text-center tracking-[0.35em] md:tracking-[0.4em] font-light md:font-normal text-offWhite md:max-w-[935px] md:mb-0">
            Gastronomía
          </h5>
          </Animated>
          <Animated animationClass="animate-slidein300">
          <p className="text-base md:text-[18px] text-offWhite leading-[34px] md:leading-[30px] max-w-[300px] md:max-w-[700px] text-center mt-[20px] mb-[40px] md:mb-[60px]">
            Van a encontrar excelentes opciones para comer alrededor de Buenos
            Aires, debajo les incluimos igualmente algunas recomendaciones.
          </p>
          </Animated>
          <div className="w-full">
          <Animated animationClass="animate-slidein500">
          <div className="w-full max-w-[90%] mx-auto md:max-w-[950px]">
            <div className="flex justify-center border-b border-offWhite">
              <button
                className={`px-[15px] md:px-[30px] py-[10px] md:py-[18px] uppercase text-[10px] md:text-[18px] md:leading-[18px] tracking-[0.5em]  transition-all duration-300 ease-in-out ${
                  selectedTab === "tab1"
                    ? "text-gray bg-offWhite font-bold rounded-tl-[8px] md:rounded-tl-[20px] rounded-tr-[2px] md:rounded-tr-[4px]"
                    : "text-offWhite bg-transparent font-normal"
                }`}
                onClick={() => setSelectedTab("tab1")}
              >
                Restaurantes
              </button>
              <button
                className={`px-[15px] md:px-[30px] py-[10px] md:py-[18px] uppercase text-[10px] md:text-[18px] md:leading-[18px] tracking-[0.5em] transition-all duration-300 ease-in-out ${
                  selectedTab === "tab2"
                    ? "text-gray bg-offWhite font-bold rounded-tl-[8px] md:rounded-tl-[20px] rounded-tr-[2px] md:rounded-tr-[4px]"
                    : "text-offWhite bg-transparent font-normal"
                }`}
                onClick={() => setSelectedTab("tab2")}
              >
                Bares
              </button>
              <button
                className={`px-[15px] md:px-[30px] py-[10px] md:py-[18px] uppercase text-[10px] md:text-[18px] md:leading-[18px] tracking-[0.5em] transition-all duration-300 ease-in-out ${
                  selectedTab === "tab3"
                    ? "text-gray bg-offWhite font-bold rounded-tl-[8px] md:rounded-tl-[20px] rounded-tr-[2px] md:rounded-tr-[4px]"
                    : "text-offWhite bg-transparent font-normal"
                }`}
                onClick={() => setSelectedTab("tab3")}
              >
                Cafés
              </button>
            </div>
            <div className=" pt-[30px] md:pt-[63px] md:max-w-[90%] md:mx-auto transition-opacity duration-300 ease-in-out">
              {selectedTab === "tab1" && (
                <div>
                  <ul className="font-base text-left leading-[30px] text-offWhite md:text-[18px] md:leading-[30px] ">
                    <div className="md:flex md:gap-x-[100px] md:justify-evenly">
                    <div className="md:max-w-[423px]">
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
                    <div className="md:max-w-[423px]">
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
                        Comida Fusión Japonesa y Peruana - El favorito de Jose
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
                <div className=" transition-opacity duration-300 ease-in-out">
                  <ul className="font-base text-left md:text-center leading-[30px] text-offWhite md:text-[18px] md:leading-[30px] ">
                    <li className="my-5">
                      <p>
                        <span className="font-semibold">Pony Line </span>
                        <br className="md:hidden" />
                        {/* Comida Argentina – Restaurante N1 hoy en día en Buenos Aires. Casi imposible conseguir reserva pero si van bien temprano o después de las 22 hs pueden conseguir lugar en la cava */}
                      </p>
                    </li>
                    <li className="my-5">
                      <p>
                        <span className="font-semibold">
                          Floreria Atlantico
                        </span>
                        <br className="md:hidden" />
                        {/* De todo un poco */}
                      </p>
                    </li>
                    <li className="my-5">
                      <p>
                        <span className="font-semibold">Bar Presidente</span>
                        <br className="md:hidden" />
                        {/* Comida Argentina – mismos dueños que Don Julio pero más tranquilo 
y fácil de conseguir reserva */}
                      </p>
                    </li>
                    <li className="my-5">
                      <p>
                        <span className="font-semibold">Festival</span>
                        <br className="md:hidden" />
                        {/* Comida Argentina */}
                      </p>
                    </li>
                    <li className="my-5">
                      <p>
                        <span className="font-semibold">Soria</span>
                        <br className="md:hidden" />
                        {/* Comida Fusión Argentina y Japonesa */}
                      </p>
                    </li>
                    <li className="my-5">
                      <p>
                        <span className="font-semibold">Helka</span>
                        <br className="md:hidden" />
                        {/* Bodegón Argentino */}
                      </p>
                    </li>
                    <li className="my-5">
                      <p>
                        <span className="font-semibold">La Ferneteria</span>
                        <br className="md:hidden" />
                        {/* Bodegón Argentino */}
                      </p>
                    </li>
                    <li className="my-5">
                      <p>
                        <span className="font-semibold">Invernadero</span>
                        <br className="md:hidden" />
                        {/* Comida Fusión Japonesa y Peruana */}
                      </p>
                    </li>
                    <li className="my-5">
                      <p>
                        <span className="font-semibold">Naranjo</span>
                        <br className="md:hidden" />
                        {/* Asado – Reservar con anticipación */}
                      </p>
                    </li>
                    <li className="my-5">
                      <p>
                        <span className="font-semibold">
                          La Fuerza Vermuteria
                        </span>
                        <br className="md:hidden" />
                        {/* Comida Italiana */}
                      </p>
                    </li>
                    <li className="my-5">
                      <p>
                        <span className="font-semibold">Gran Bar Danzon</span>
                        <br className="md:hidden" />
                        {/* Vegetariano – pero aprobado por Mariano! */}
                      </p>
                    </li>
                    <li className="my-5">
                      <p>
                        <span className="font-semibold">
                          Frank’s – Speakeasy
                        </span>
                        <br className="md:hidden" />
                        {/* Comida Argentina */}
                      </p>
                    </li>
                    <li className="my-5">
                      <p>
                        <span className="font-semibold">Trade Sky Bar</span>
                        <br className="md:hidden" />
                        {/* Pizzas y Aperol */}
                      </p>
                    </li>
                  </ul>
                </div>
              )}
              {selectedTab === "tab3" && (
                <div className="mt-7 transition-opacity duration-300 ease-in-out">
                  <p className="text-offWhite md:text-[18px] md:text-center">Café - Desayunos - Brunch</p>
                  <ul className="font-base text-left md:text-center leading-[30px] text-offWhite md:text-[18px] md:leading-[30px] ">
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
          </Animated>
          </div>
          <Image
            src={Vector21White}
            alt=""
            className="w-[179px] md:mt-[115px] mb-[50px] md:w-[350px] hidden lg:block md:absolute md:bottom-[-50px] md:right-0"
          />
        </div>
      </div>

      <div className="bg-mudGreenDark text-white w-full pt-[43px] md:pt-[54px] pb-[30px] md:pb-[40px]">
        <div className="flex flex-col items-center mx-auto">
          <Image src={Firma} alt="" className="md:w-[160px]" />
        </div>
      </div>
    </section>
  );
}
