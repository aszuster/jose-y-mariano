"use client";
import Image from "next/image";
import Link from "next/link";
import BodaHero from "../../../public/images/hero-boda.png";
import BodaHeroDsk from "../../../public/images/hero-boda-dsk.png";
import Vector13 from "../../../public/images/vector13.svg";
import Vector17 from "../../../public/images/vector17.svg";
import Vector9 from "../../../public/images/vector9.svg";
import Vector10 from "../../../public/images/vector10.svg";
import Firma from "../../../public/images/firma-white.svg";

export default function Boda() {

  return (
    <section className="flex flex-col items-center bg-offWhite text-black">
      <div className="flex flex-col items-center lg:relative">
        <Image
          src={BodaHero}
          alt="Preboda Hero"
          quality={100}
          className="lg:hidden"
          sizes="200vw"
        />
        <Image
          src={BodaHeroDsk}
          alt="Preboda Hero"
          quality={100}
          className="hidden lg:block"
          sizes="200vw"
        />
        <div className="lg:relative lg:w-full flex flex-col items-center">
        <Image
          src={Vector13}
          alt=""
          className="mt-[19px] mb-[27px] lg:hidden lg:absolute lg:top-10 lg:w-[494px]"
        />
        <Image
          src={Vector9}
          alt=""
          className="hidden lg:block lg:absolute lg:top-36 lg:left-0 lg:w-[254px]"
        />
        <h2 className="text-[46px] lg:text-[120px] font-extralight text-gray tracking-[0.1em]">
          La boda
        </h2>
        <p className="text-center font-rbeanie text-[24px] lg:text-[46px] lg:leading-[57px] text-gray leading-[42px] mt-[15px] mb-[30px]">
        Sábado 23 de noviembre - 17hs
          <br />
          Pulenta Estate, Mendoza
          <br />
          Dresscode: Formal
        </p>
        
        <Link href="#">
          <p className="mb-[107px] lg:mb-[146px] uppercase text-gray underline font-bold text-base lg:text-[18px] tracking-[0.3em] lg:tracking-[0.4em]">
            Ver ejemplos
          </p>
        </Link>
        <Image src={Vector17} alt="" className="mt-[43px]  absolute bottom-[-50px] right-0 lg:hidden " />
        <Image src={Vector10} alt="" className="hiden lg:block lg:absolute lg:bottom-[150px] lg:right-0 lg:w-[342px]" />
        </div>
      </div>

      <div className="bg-mudGreen text-white w-full py-[45px]">
        <div className="flex flex-col items-center mx-auto max-w-[90%]">
          <Image src={Firma} alt="" className="mb-[30px] lg:mb-[46px] lg:w-[192px]" />
          <p className="text-base lg:text-[22px] leading-[26px] font-normal text-center uppercase tracking-[0.3em] lg:tracking-[0.4em] max-w-[200px] lg:max-w-full">
            ¡Evento solo para adultos!
          </p>
          <Link href="https://open.spotify.com/playlist/18AoNveB9vYOzA1KBZBrA1?si=9elSzvCzS3eF57eaR_eNFw&nd=1&dlsi=e400a862465a41cc">
            <p className="uppercase underline font-bold text-[13px] lg:text-[18px] mt-[28px] tracking-[0.3em] lg:tracking-[0.4em]">
              Ponete en el mood
            </p>
          </Link>
        </div>
      </div>
    </section>
  );
}
