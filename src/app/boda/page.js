"use client";
import Image from "next/image";
import Link from "next/link";
import Animated from "../../../components/Animated/Animated";
import BodaHero from "../../../public/images/hero-boda.webp";
import BodaHeroDsk from "../../../public/images/hero-boda-dsk.webp";
import Vector13 from "../../../public/images/vector13.svg";
import Vector17 from "../../../public/images/vector17.svg";
import Vector9 from "../../../public/images/vector9.svg";
import Vector10 from "../../../public/images/vector10.svg";
import Firma from "../../../public/images/firma-white.svg";

export default function Boda() {

  return (
    <section className="flex flex-col items-center bg-offWhite text-black">
      <div className="flex flex-col items-center md:relative md:mb-[100px]">
        <Image
          src={BodaHero}
          alt="Preboda Hero"
          quality={100}
          className="md:hidden"
          sizes="200vw"
        />
        <Image
          src={BodaHeroDsk}
          alt="Preboda Hero"
          quality={100}
          className="hidden md:block"
          sizes="200vw"
        />
        <div className="md:relative md:w-full flex flex-col items-center">
        <Image
          src={Vector13}
          alt=""
          className="mt-[19px] mb-[27px] md:hidden md:absolute md:top-10 md:w-[494px]"
        />
        <Image
          src={Vector9}
          alt=""
          className="hidden lg:block md:absolute md:top-10 md:left-0 md:w-[200px]"
        />
        <Animated animationClass="animate-slidein100">
        <h2 className="text-[46px] md:text-[96px] font-extralight text-gray tracking-[0.1em]">
          La boda
        </h2>
        </Animated>
        <Animated animationClass="animate-slidein300">
        <p className="text-center font-rbeanie text-[24px] md:text-[38px] md:leading-[45px] text-gray leading-[42px] mt-[15px] mb-[30px]">
        Sábado 23 de noviembre - 17hs
          <br />
          <Link href="https://maps.app.goo.gl/zAvhCW3QvYsJwZXr6" target="_blank" className="transition-text duration-300 ease-in-out hover:text-mudGreen">
  
          Pulenta Estate, Mendoza

          </Link>
          <br />
          Dresscode: Formal
        </p>
        </Animated>
        <Animated animationClass="animate-slidein500">
        <Link href="/docs/Boda_compressed.pdf" target="_blank">
          <p className=" uppercase text-gray underline font-bold text-base md:text-[16px] tracking-[0.3em] md:tracking-[0.3em] transition-text duration-300 ease-in-out hover:text-mudGreen">
            Ver ejemplos
          </p>
        </Link>
        </Animated>
        <Image src={Vector17} alt="" className="mt-[43px] mb-[50px] md:hidden " />
        <Image src={Vector10} alt="" className="hidden lg:block md:absolute md:bottom-[80px] md:right-0 md:w-[280px]" />
        </div>
      </div>

      <div className="bg-mudGreen text-white w-full py-[45px]">
        <div className="flex flex-col items-center mx-auto max-w-[90%]">
          <Image src={Firma} alt="" className="mb-[30px] md:mb-[36px] md:w-[160px]" />
          <p className="text-base md:text-[18px] leading-[26px] font-normal text-center uppercase tracking-[0.3em] md:tracking-[0.4em] max-w-[200px] md:max-w-full">
            ¡Evento solo para adultos!
          </p>
          <Link href="https://open.spotify.com/artist/36MCIOsetecL6CN8ZYqCTw?si=jfyZ3A7YTtySnn3lwu8Ccw" target="_blank">
            <p className="uppercase underline font-bold text-[13px] md:text-[14px] mt-[28px] tracking-[0.3em] md:tracking-[0.4em] transition-text duration-300 ease-in-out hover:text-mudGreenDark">
              Ponete en el mood
            </p>
          </Link>
        </div>
      </div>
    </section>
  );
}
