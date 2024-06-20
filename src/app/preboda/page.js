"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import PrebodaHero from "../../../public/images/hero-preboda.png";
import PrebodaHeroDsk from "../../../public/images/hero-preboda-dsk.png";
import Vector13 from "../../../public/images/vector13.svg";
import Vector17 from "../../../public/images/vector17.svg";
import Vector9 from "../../../public/images/vector9.svg";
import Firma from "../../../public/images/firma-white.svg";

export default function Preboda() {
  const [selectedTab, setSelectedTab] = useState("tab1");

  return (
    <section className="flex flex-col items-center bg-offWhite text-black">
      <div className="flex flex-col items-center lg:relative">
        <Image
          src={PrebodaHero}
          alt="Preboda Hero"
          quality={100}
          className="lg:hidden z-0"
          sizes="200vw"
        />
        <Image
          src={PrebodaHeroDsk}
          alt="Preboda Hero"
          quality={100}
          className="hidden lg:block z-0"
          sizes="200vw"
        />
        <div className="lg:relative lg:w-full flex flex-col items-center">
        <Image
          src={Vector13}
          alt=""
          className="mt-[42px] mb-[27px] lg:hidden lg:absolute lg:top-10 lg:w-[494px]"
        />
        <Image
          src={Vector9}
          alt=""
          className="hidden lg:block lg:absolute lg:top-36 lg:left-0 lg:w-[254px]"
        />
        <h2 className="text-[46px] lg:text-[120px] font-extralight text-gray tracking-[0.1em]">
          Preboda
        </h2>
        <p className="text-center font-rbeanie text-[24px] lg:text-[46px] lg:leading-[57px] text-gray leading-[42px] mt-[15px] mb-[30px]">
          Viernes 22 de noviembre <br className="lg:hidden" />
          <span className="hidden lg:inline-block">-&nbsp;</span>
          <span className=" lg:hidden">De&nbsp;</span> 18 a 00hs
          <br />
          Palapas, Potrerillos
          <br />
          Dresscode: Elegante Sport
        </p>
        
        <Link href="#">
          <p className="uppercase text-gray underline font-bold text-base lg:text-[18px] tracking-[0.3em] lg:tracking-[0.4em]">
            Ver ejemplos
          </p>
        </Link>
        <Image src={Vector17} alt="" className="mt-[43px] mb-[55px] lg:absolute lg:bottom-[-100px] lg:right-0 lg:w-[342px]" />
        </div>
      </div>
      <div className="w-full max-w-md max-w-[90%] pb-[56px] lg:max-w-[1148px] lg:mt-[141px] lg:h-[400px]">
        <div className="flex justify-center border-b border-mudGreen">
          <button
            className={`px-[15px] lg:px-[45px] py-[10px] lg:py-[17px] uppercase text-[10px] lg:text-[22px] tracking-[0.5em] ${
              selectedTab === "tab1"
                ? "text-white bg-mudGreen font-bold rounded-tl-[11px] lg:rounded-tl-[25px] rounded-tr-[2px] lg:rounded-tr-[4px]"
                : "text-mudGreen bg-transparent font-normal"
            }`}
            onClick={() => setSelectedTab("tab1")}
          >
            Transporte
          </button>
          <button
            className={`px-[15px] lg:px-[45px] py-[10px] lg:py-[17px] uppercase text-[10px] lg:text-[22px] tracking-[0.5em] ${
              selectedTab === "tab2"
                ? "text-white bg-mudGreen font-bold rounded-tl-[11px] lg:rounded-tl-[25px] rounded-tr-[2px] lg:rounded-tr-[4px]"
                : "text-mudGreen bg-transparent font-normal"
            }`}
            onClick={() => setSelectedTab("tab2")}
          >
            Recomendaciones
          </button>
        </div>
        <div className="p-4 lg:pt-[63px]">
          {selectedTab === "tab1" && (
            <p className="font-base lg:text-[22px] leading-[34px] lg:leading-[35px] text-darkGray lg:text-center lg:max-w-[935px] lg:mx-auto">
              Atento a la complejidad de los accesos y a la distancia, se
              pondrán buses para ir y regresar del evento. Los mismos saldrán
              desde puntos estratégicos del centro de Mendoza y de Chacras de
              Coria.{" "}
              <span className="font-bold">
                El horario de salida será 16:30 aproximadamente. Mayor
                información se proporcionará semanas antes.
              </span>
            </p>
          )}
          {selectedTab === "tab2" && (
            <p className="font-base lg:text-[22px] leading-[34px] lg:leading-[35px] text-darkGray lg:text-center lg:max-w-[935px] lg:mx-auto">
              Como el evento es en un dique en la montaña, aconsejamos: 
              <br />{" "}
              <ul>
                <li>. Llevar abrigo para la noche. </li>
                <li>. Utilizar los transportes oficiales del evento.</li>
              </ul>
            </p>
          )}
        </div>
      </div>
      <div className="bg-mudGreen text-white w-full py-[45px]">
        <div className="flex flex-col items-center mx-auto max-w-[90%]">
          <Image src={Firma} alt="" className="mb-[30px] lg:mb-[46px] lg:w-[192px]" />
          <p className="text-base lg:text-[22px] leading-[26px] font-normal text-center uppercase tracking-[0.3em] lg:tracking-[0.4em] max-w-[200px] lg:max-w-full">
            ¡Evento solo para adultos!
          </p>
          <Link href="#">
            <p className="uppercase underline font-bold text-[13px] lg:text-[18px] mt-[28px] tracking-[0.3em] lg:tracking-[0.4em]">
              Ponete en el mood
            </p>
          </Link>
        </div>
      </div>
    </section>
  );
}
