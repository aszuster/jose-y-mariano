"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import MapaMdz from "../../../public/images/mapa-mdz.png";
import Vector13 from "../../../public/images/vector13.svg";
import Vector15 from "../../../public/images/vector15.svg";
import Vector16 from "../../../public/images/vector16.svg";
import Vector17 from "../../../public/images/vector17.svg";
import Vector20 from "../../../public/images/vector20.svg";
import Firma from "../../../public/images/firma-white.svg";
import alojamientoIcon from "../../../public/images/alojamiento-icon.svg";
import quehacerIcon from "../../../public/images/quehacer-icon.svg";
import serviciosIcon from "../../../public/images/servicios-icon.svg";
import transporteIcon from "../../../public/images/transporte-icon.svg";
import vuelosIcon from "../../../public/images/vuelos-icon.svg";

export default function RecomMdz() {
  const [selectedTab, setSelectedTab] = useState("tab1");
  return (
    <section className="flex flex-col items-center bg-offWhite text-black">
      <div className="lg:relative lg:w-full lg:flex lg:flex-col lg:items-center">
      <Image
          src={Vector13}
          alt=""
          className="hidden lg:block lg:absolute lg:bottom-0 lg:left-0 lg:w-[200px]"
        />
              <Image
          src={Vector20}
          alt=""
          className="hidden lg:block lg:absolute lg:top-[300px] lg:right-0 lg:w-[220px]"
        />
        <h2 className="hidden lg:block font-rbeanie text-[46px] leading-[57px] mt-[50px] mb-[28px] text-mudGreenDark">
          Recomendaciones
        </h2>
        <Image
          src={MapaMdz}
          alt="Preboda Hero"
          quality={100}
          className="lg:max-w-[600px]"
          sizes="200vw"
        />
      </div>
      <div className="flex flex-col items-center max-w-[90%] lg:max-w-[950px] lg:relative pb-[88px]">
        <div className="lg:relative lg:w-full flex flex-col items-center mt-[38px] lg:mt-[100px]">
          <Image src={alojamientoIcon} className="mb-[10px] lg:mb-[7px]" />
          <h5 className="text-[22px] lg:text-[20px] uppercase leading-[27px] text-center tracking-[0.35em] lg:tracking-[0.4em] font-light lg:font-normal text-gray lg:max-w-[935px]">
            Alojamiento
          </h5>
          <p className="text-base lg:text-[18px] text-darkGray leading-[34px] lg:leading-[30px] max-w-[300px] lg:max-w-[600px] text-center mt-[20px] mb-[40px] lg:mb-[50px]">
            La ciudad de Mendoza y sus alrededores cuentan con una{" "}
            <span className="font-semibold">
              gran variedad de opciones para alojarse
            </span>
          </p>
          <div className="lg:flex lg:gap-x-[70px]">
            <div className="text-center text-offWhite w-full bg-mudGreen pt-[46px] lg:pt-[30px] pb-[20px] rounded-tl-[30px] rounded-tr-[8px]  rounded-bl-[8px] mb-[53px] lg:mb-0">
              <p className="font-rbeanie px-[40px] text-left text-[50px] lg:text-[56px] leading-[44px] lg:leading-[57px] mb-[10px] lg:mb-[20px]">
                Mendoza Centro
              </p>
              <ul className="px-[40px] text-left text-[20px] lg:text-[18px] leading-[25px] lg:leading-[20px]">
                <li className="my-5">. Park Hyatt </li>
                <li className="my-5">. Diplomatic Hotel </li>
                <li className="my-5">. Sheraton Hotel </li>
                <li className="my-5">. Hotel Argentino (el más económico) </li>
                <li className="my-5">
                  . Fuente Mayor Hotel Ciudad de Mendoza (simple, económico) 
                </li>
              </ul>
            </div>
            <div className="text-center text-offWhite w-full bg-mudGreen pt-[46px] lg:pt-[30px] pb-[20px] rounded-tl-[30px] rounded-tr-[8px]  rounded-bl-[8px] mb-[53px] lg:mb-0">
              <p className="font-rbeanie px-[40px] text-left text-[50px] lg:text-[56px] leading-[44px] lg:leading-[57px] mb-[10px] lg:mb-[20px]">
                Chacras <br className="lg:hidden" />
                de Coria
              </p>
              <ul className="px-[40px] text-left text-[20px] lg:text-[18px] leading-[25px] lg:leading-[20px]">
                <li className="my-5">. Susana Balbo Wine hotel  </li>
                <li className="my-5">. Entre Cielos (zona de Vistalba)  </li>
                <li className="my-5">. Lares de Chacras  </li>
                <li className="my-5">. Casa La Galeana  </li>
                <li className="my-5">
                  . Villa Mansa Hotel (zona de Vistalba) 
                </li>
                <li className="my-5">. La María</li>
              </ul>
            </div>
          </div>
          <div className="text-center text-offWhite w-full lg:flex lg:flex-col lg:items-center lg:mt-[60px] bg-mudGreen pt-[46px] lg:pt-[40px] pb-[20px] lg:pb-[20px] rounded-tl-[30px] rounded-tr-[8px]  rounded-bl-[8px] mb-[53px] lg:mb-0">
            <p className="font-rbeanie px-[40px] text-left text-[50px] lg:text-[56px] leading-[44px] lg:leading-[57px] mb-[10px] lg:mb-[20px]">
              Agrelo, Luján <br className="lg:hidden" />
              de Cuyo
            </p>
            <ul className="px-[40px] text-left text-[20px] lg:text-[18px] leading-[25px] lg:leading-[20px] lg:flex lg:gap-x-[100px]">
              <div className="max-w-[300px]">
                <li className="my-5">. Hotel Rossel Boher Lodge   </li>
                <li className="my-5">. Chozos Resort   </li>
                <li className="my-5">. Villa del Malbec  </li>
              </div>
              <div className="max-w-[300px]">
                <li className="my-5">. Cavas Wine Lodge  </li>
                <li className="my-5">
                  . Casa Naoki: Casa para 12 personas (hermosa!) 
                </li>
                <li className="my-5">. Casa David</li>
              </div>
            </ul>
          </div>
          <Image
            src={Vector15}
            alt=""
            className="mt-[19px] lg:mt-[80px] mb-[50px] lg:w-[350px]"
          />
          <Image src={vuelosIcon} className="mb-[10px] lg:mb-[7px]" />
          <h5 className="text-[22px] lg:text-[20px] uppercase leading-[27px] text-center tracking-[0.35em] lg:tracking-[0.4em] font-light lg:font-normal text-gray lg:max-w-[935px]">
            Vuelos
          </h5>
          <p className="text-base lg:text-[18px] text-darkGray leading-[34px] lg:leading-[30px] max-w-[300px] lg:max-w-[600px] text-center mt-[20px] mb-[40px] lg:mb-[50px]">
            El vuelo desde Buenos Aires tarda 2 horas.{" "}
            <span className="font-semibold">
              Hay alrededor de 6 frecuencias por día usando{" "}
              <Link href="https://www.aerolineas.com.ar/" className="underline">
                Aerolíneas Argentinas
              </Link>
              ,
            </span>{" "}
            la mayoría salen por la mañana. Recomendamos volar desde Aeroparque
            (aeropuerto en Buenos Aires para vuelos de cabotaje). El aeropuerto
            de Mendoza se encuentra en pleno centro y pueden tomarse Ubers o
            taxis a su alojamiento.
          </p>
          <Image
            src={Vector16}
            alt=""
            className="mt-[19px] mb-[50px] lg:w-[340px]"
          />
          <Image src={transporteIcon} className="mb-[10px]" />
          <h5 className="text-[22px] lg:text-[20px] uppercase leading-[27px] text-center tracking-[0.35em] lg:tracking-[0.4em] font-light lg:font-normal text-gray lg:max-w-[935px]">
            Transporte
          </h5>
          <p className="text-base lg:text-[18px] text-darkGray leading-[34px] lg:leading-[30px] max-w-[300px] lg:max-w-[600px] text-center mt-[20px] mb-[40px] lg:mb-[30px]">
            <span className="font-semibold">Uber funciona muy bien</span> en la
            ciudad de Mendoza. Para excursiones o planes de todo el día,
            recomendamos contratar un{" "}
            <span className="font-semibold">transporte privado/combis.</span>
          </p>
        </div>
      </div>
      <div className="bg-gray pt-[113px] lg:pt-[70px] pb-[77px] lg:pb-[60px] w-full h-[864px]">
        <div className="max-w-[90%] flex flex-col items-center mx-auto">
          <Image src={quehacerIcon} className="mb-[10px]" />
          <h5 className="text-[22px] lg:text-[20px] uppercase leading-[27px] text-center tracking-[0.35em] lg:tracking-[0.4em] font-light lg:font-normal text-offWhite lg:max-w-[935px] mb-[60px]">
            ¿Qué hacer?
          </h5>
          <div className="w-full max-w-md max-w-[90%] lg:max-w-[950px]">
            <div className="flex justify-center border-b border-offWhite">
              <button
                className={`px-[15px] lg:px-[30px] py-[10px] lg:py-[18px] uppercase text-[10px] lg:text-[18px] lg:leading-[18px] tracking-[0.5em] ${
                  selectedTab === "tab1"
                    ? "text-gray bg-offWhite font-bold rounded-tl-[8px] lg:rounded-tl-[20px] rounded-tr-[2px] lg:rounded-tr-[4px]"
                    : "text-offWhite bg-transparent font-normal"
                }`}
                onClick={() => setSelectedTab("tab1")}
              >
                Bodegas
              </button>
              <button
                className={`px-[15px] lg:px-[30px] py-[10px] lg:py-[18px] uppercase text-[10px] lg:text-[18px] lg:leading-[18px] tracking-[0.5em] ${
                  selectedTab === "tab2"
                    ? "text-gray bg-offWhite font-bold rounded-tl-[8px] lg:rounded-tl-[20px] rounded-tr-[2px] lg:rounded-tr-[4px]"
                    : "text-offWhite bg-transparent font-normal"
                }`}
                onClick={() => setSelectedTab("tab2")}
              >
                Aventura
              </button>
            </div>
            <div className=" pt-[30px] lg:pt-[63px] lg:max-w-[700px] lg:text-center lg:mx-auto">
              {selectedTab === "tab1" && (
                <div>
                  <p className="font-base text-center lg:text-[18px] leading-[34px] lg:leading-[30px] text-offWhite  mb-[25px]">
                    Para aquellos que tengan un día libre en Mendoza
                    recomendamos hacer una{" "}
                    <span className="font-bold">
                      degustación y almuerzo en alguna de estas bodegas.{" "}
                    </span>{" "}
                    Es aconsejable realizar las reservas con al menos un mes de
                    anticipación. 
                  </p>
                  <ul className="font-base text-center text-offWhite lg:text-[18px] lg:leading-[30px] lg:text-center">
                    <li className="my-4">
                      <p>
                        <span className="font-semibold ">Casa Vigil</span>
                        <span className="hidden lg:inline-block">:&nbsp;</span>
                        <br className="lg:hidden" />
                        Se puede hacer la degustación o comer. 
                      </p>
                    </li>
                    <li className="my-4">
                      <p>
                        <span className="font-semibold ">Salentein</span>
                        <span className="hidden lg:inline-block">:&nbsp;</span>
                        <br className="lg:hidden" />
                        En Valle de Uco. Queda a una hora de Mendoza, pero una
                        bodega realmente imponente. 
                      </p>
                    </li>
                    <li className="my-4">
                      <p>
                        <span className="font-semibold ">Zuccardi</span>
                        <span className="hidden lg:inline-block">:&nbsp;</span>
                        <br className="lg:hidden" />
                        En Valle de Uco. Almorzar en Piedra infinita.  
                      </p>
                    </li>
                    <li className="my-4">
                      <p>
                        <span className="font-semibold ">Kaiken</span>
                        <span className="hidden lg:inline-block">:&nbsp;</span>
                        <br className="lg:hidden" />
                        Cerrar la recorrida en Ramos Generales (premiado
                        restaurante de Francis Mallmann)
                      </p>
                    </li>
                    <li className="my-4">
                      <span className="font-semibold ">Finca de Cero</span>
                      <br className="lg:hidden" />
                      {/* <p>Se puede hacer la degustación o comer. </p> */}
                    </li>
                    <li className="my-4">
                      <span className="font-semibold ">Catena Zapata</span>
                      <br className="lg:hidden" />
                      {/* <p>Se puede hacer la degustación o comer. </p> */}
                    </li>
                    <li className="my-4">
                      <span className="font-semibold ">
                        Finca El Paraíso-Luigi Bosca 
                      </span>
                      <br className="lg:hidden" />
                      {/* <p>Se puede hacer la degustación o comer. </p> */}
                    </li>
                  </ul>
                </div>
              )}
              {selectedTab === "tab2" && (
                <p className="font-base text-center lg:text-[18px] leading-[34px] lg:leading-[30px] text-offWhite lg:text-center lg:max-w-[935px] lg:mx-auto">
                  Para los más aventureros, recomendamos: 
                  <br />{" "}
                  <ul className="">
                    <li className="my-5 leading-[20px]">
                      . Un día de spa en
                      <Link href="https://termascacheuta.com/">
                        <span className="font-semibold">
                           Termas de Cacheuta 
                        </span>
                      </Link>
                    </li>
                    <li className="my-5 leading-[20px]">
                      .{" "}
                      <Link href="https://argentinarafting.com/rafting-en-mendoza/">
                        Rafting
                      </Link>
                       en el <span className="font-semibold">Rio Mendoza</span>
                    </li>
                    <li className="my-5 leading-[20px]">
                      .{" "}
                      <Link href="https://argentinarafting.com/rafting-en-mendoza/">
                        <span className="font-semibold">
                          Cabalgata y asado{" "}
                        </span>
                        en la montaña
                      </Link>{" "}
                    </li>
                  </ul>
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center max-w-[90%] lg:relative pb-[88px] lg:pb-[152px]">
        <div className="lg:relative lg:w-full flex flex-col items-center mt-[63px] lg:mt-[70px]">
          <Image
            src={Vector17}
            alt=""
            className="mt-[19px] mb-[27px] lg:mb-[37px] w-[201px] lg:w-[280px]"
          />
          <Image src={serviciosIcon} className="mb-[10px] lg:mb-[7px]" />
          <h5 className="text-[22px] lg:text-[20px] uppercase leading-[27px] text-center tracking-[0.35em] lg:tracking-[0.4em] font-light lg:font-normal text-gray lg:max-w-[935px] mb-[24px] lg:mb-[95px]">
            Servicios
          </h5>
          <div className="lg:flex lg:gap-x-[100px] text-center">
            <div className="mb-[30px] lg:mb-0 flex flex-col items-center">
              <p className="font-bold text-darkGray mb-[10px] mt-[20px] lg:mt-0 uppercase lg:text-[18px] tracking-[0.3em] lg:tracking-[0.3em]">
                Makeup
              </p>
              <ul className="text-[16px] leading-[30px] lg:text-[18px] lg:leading-[30px] text-darkGray">
                <li>Luciana Oliva</li>
                <li>Paula Sáez</li>
                <li>Andrea Vargas</li>
                <li>Mucho peluquería </li>
                <li>Florencia Raviolo</li>
                <li>Sofi bauco</li>
              </ul>
            </div>
            <div>
              <p className="font-bold text-darkGray uppercase lg:text-[18px] tracking-[0.3em] lg:tracking-[0.3em] mb-[10px]">
                Peluquería
              </p>
              <ul className="text-[16px] leading-[30px] lg:text-[18px] lg:leading-[30px] text-darkGray">
                <li>Mala peluquería Mendoza </li>
                <li>Mucho peluquería </li>
                <li>Luciana Oliva</li>
                <li>Sol Benegas</li>
                <li>Simona Espacios</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-mudGreen text-white w-full pt-[43px] lg:pt-[54px] pb-[30px] lg:pb-[40px]">
        <div className="flex flex-col items-center mx-auto">
          <Image src={Firma} alt="" className="lg:w-[160px]" />
        </div>
      </div>
    </section>
  );
}
