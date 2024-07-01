"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Animated from "../../../components/Animated/Animated";
import PrebodaHero from "../../../public/images/hero-preboda.webp";
import PrebodaHeroDsk from "../../../public/images/hero-preboda-dsk.webp";
import Vector13 from "../../../public/images/vector13.svg";
import Vector17 from "../../../public/images/vector17.svg";
import Vector9 from "../../../public/images/vector9.svg";
import Firma from "../../../public/images/firma-white.svg";

export default function Preboda() {
  const [selectedTab, setSelectedTab] = useState("tab1");

  return (
    <section className="flex flex-col items-center bg-offWhite text-black">
      <div className="flex flex-col items-center md:relative">
        <Image
          src={PrebodaHero}
          alt="Preboda Hero"
          quality={100}
          className="md:hidden z-0"
          sizes="200vw"
        />
        <Image
          src={PrebodaHeroDsk}
          alt="Preboda Hero"
          quality={100}
          className="hidden md:block z-0"
          sizes="200vw"
        />
        <div className="md:relative md:w-full flex flex-col items-center">
          <Image
            src={Vector13}
            alt=""
            className="mt-[42px] mb-[27px] md:hidden md:absolute md:top-10 md:w-[494px]"
          />
          <Image
            src={Vector9}
            alt=""
            className="hidden lg:block md:absolute md:top-36 md:left-0 md:w-[254px]"
          />
          <Animated animationClass="animate-slidein100">
          <h2 className="text-[46px] md:text-[96px] font-extralight text-gray tracking-[0.1em]">
            Preboda
          </h2>
          </Animated>
          <Animated animationClass="animate-slidein300">
          <p className="text-center font-rbeanie text-[24px] md:text-[38px] md:leading-[45px] text-gray leading-[42px] mt-[15px] mb-[30px]">
            Viernes 22 de noviembre <br className="md:hidden" />
            <span className="hidden md:inline-block">-&nbsp;</span>
            <span className=" md:hidden">De&nbsp;</span> 18 a 00hs
            <br />
            <Link href="https://maps.app.goo.gl/w7dyCxX8Pnf51voL7" target="_blank" className="transition-colors duration-300 ease-in-out hover:text-mudGreen">Palapas, Potrerillos</Link>
            <br />
            Dresscode: Elegante Sport
          </p>
          </Animated>
          <Animated animationClass="animate-slidein500">
          <Link href="/docs/Preboda_compressed.pdf" target="_blank">
            <p className="uppercase text-gray underline font-bold text-base md:text-[16px] tracking-[0.3em] md:tracking-[0.3em] transition-colors duration-300 ease-in-out hover:text-mudGreen">
              Ver ejemplos
            </p>
          </Link>
          </Animated>
          <Image src={Vector17} alt="" className="mt-[43px] mb-[55px] lg:absolute lg:bottom-[-100px] lg:right-0 lg:w-[342px]" />
        </div>
      </div>
      <Animated animationClass="animate-slidein700">
      <div className="w-full max-w-md max-w-[90%] pb-[56px] md:max-w-[950px] lg:mt-[130px] md:h-[330px]">
        <div className="flex justify-center border-b border-mudGreen max-w-[90%] mx-auto">
          <button
            className={`px-[15px] md:px-[30px] py-[10px] md:py-[17px] uppercase text-[10px] md:text-[18px] tracking-[0.5em] transition-all duration-300 ease-in-out  ${
              selectedTab === "tab1"
                ? "text-white bg-mudGreen font-bold rounded-tl-[8px] md:rounded-tl-[20px] rounded-tr-[2px] md:rounded-tr-[4px]"
                : "text-mudGreen bg-transparent font-normal"
            }`}
            onClick={() => setSelectedTab("tab1")}
          >
            Transporte
          </button>
          <button
            className={`px-[15px] md:px-[30px] py-[10px] md:py-[17px] uppercase text-[10px] md:text-[18px] tracking-[0.5em] transition-all duration-300 ease-in-out ${
              selectedTab === "tab2"
                ? "text-white bg-mudGreen font-bold rounded-tl-[8px] md:rounded-tl-[20px] rounded-tr-[2px] md:rounded-tr-[4px]"
                : "text-mudGreen bg-transparent font-normal"
            }`}
            onClick={() => setSelectedTab("tab2")}
          >
            Recomendaciones
          </button>
        </div>
        <div className="p-4 md:pt-[50px] transition-opacity duration-300 ease-in-out">
          {selectedTab === "tab1" && (
            <p className="p-4 md:p-0 text-base md:text-[18px] leading-[26px] md:leading-[30px] text-darkGray text-center md:max-w-[750px] md:mx-auto">
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
            <p className="p-4 md:p-0 text-base md:text-[18px] leading-[26px] md:leading-[30px] text-darkGray text-center md:max-w-[750px] md:mx-auto">
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
      </Animated>
      <div className="bg-mudGreen text-white w-full py-[38px]">
        <div className="flex flex-col items-center mx-auto max-w-[90%]">
          <Image src={Firma} alt="" className="mb-[30px] md:mb-[36px] md:w-[160px]" />
          <p className="text-base md:text-[18px] leading-[26px] font-normal text-center uppercase tracking-[0.3em] md:tracking-[0.4em] max-w-[200px] md:max-w-full">
            ¡Evento solo para adultos!
          </p>
          <Link href="https://open.spotify.com/playlist/18AoNveB9vYOzA1KBZBrA1?si=9elSzvCzS3eF57eaR_eNFw" target="_blank">
            <p className="uppercase underline font-bold text-[13px] md:text-[14px] mt-[28px] tracking-[0.3em] md:tracking-[0.4em] transition-colors duration-300 ease-in-out hover:text-mudGreenDark">
              Ponete en el mood
            </p>
          </Link>
        </div>
      </div>
    </section>
  );
}
