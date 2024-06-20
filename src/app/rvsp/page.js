"use client";
import Image from "next/image";
import Link from "next/link";
import BodaHero from "../../../public/images/hero-boda.png";
import BodaHeroDsk from "../../../public/images/hero-boda-dsk.png";
import Vector14 from "../../../public/images/vector14.svg";
import Firma from "../../../public/images/firma-white.svg";

export default function RSVP() {
  return (
    <section className="flex flex-col items-center bg-offWhite text-black">
      <div className="flex flex-col items-center max-w-[90%] lg:relative pb-[88px] lg:pb-[152px]">
        <div className="lg:relative lg:w-full flex flex-col items-center mt-[63px] lg:mt-[160px]">
          <h4 className="text-[40px] leading-[55px] text-center lg:text-[45px] lg:leading-[60px] font-light text-darkGray lg:max-w-[935px]">
            ¡Estamos muy felices de compartir con ustedes este día tan especial!
          </h4>
          <Link href="" className="mt-[40px] lg:mt-[60px] mb-[60px]">
            <p className="uppercase text-[12px] lg:text-[18px] text-white tracking-[0.4em] bg-gray px-[27px] lg:px-[30px] py-[14px] lg:py-[20px] rounded-tl-[28px] lg:rounded-tl-[40px] rounded-br-[28px] lg:rounded-br-[40px] rounded-tr-[3px] lg:rounded-tr-[4px] rounded-bl-[3px] lg:rounded-bl-[4px]">
              Confirmar asistencia
            </p>
          </Link>
          <Image
            src={Vector14}
            alt=""
            className="mt-[19px] mb-[27px] lg:w-[280px]"
          />

          <p className="text-center font-normal max-w-[300px] lg:max-w-[1100px] text-base lg:text-[22px] lg:leading-[40px] text-darkGray leading-[34px] mt-[15px] lg:mt-[50px] mb-[36px] lg:mb-[90px]">
            <span className="font-semibold">
              ¡Sabemos que llegar a Mendoza representa un gran esfuerzo y no
              podemos estar más agradecidos!
            </span>{" "}
            <br />
            Si, además, queres ayudarnos con nuestra luna de miel:
          </p>
          <div className="lg:flex lg:w-full lg:gap-x-[45px]">
          <div className="text-center text-offWhite w-full bg-mudGreen py-[46px] rounded-tl-[35px] rounded-br-[35px]  rounded-bl-[10px] mb-[53px] lg:mb-0">
            <p className="font-rbeanie text-[50px] lg:text-[70px] leading-[44px] lg:leading-[57px] mb-[10px] lg:mb-[34px]">Argentina</p>
            <p className="text-[18px] lg:text-[22px] leading-[50px]">
              Banco Santander
              <br />
              . Cuenta 718-362003/2
              <br />
              . CBU: 0720718388000036200322
              <br />. Alias: joseymariano  
            </p>
          </div>
          <div className="text-center text-offWhite w-full bg-mudGreen py-[46px] rounded-tl-[35px]  rounded-tr-[10px] rounded-bl-[10px]">
            <p className="font-rbeanie text-[50px] lg:text-[70px] leading-[44px] lg:leading-[57px] mb-[10px] lg:mb-[34px]">USA</p>
            <p className="text-[18px] lg:text-[22px] leading-[50px]">
              Chase Bank NA
              <br />
              . Cuenta 758267568
              <br />
              . Routing: 021000021
              <br />
              . Venmo: @Josefina-Griot <br />. Zelle: 3476548548  
            </p>
          </div>
          </div>
        </div>
      </div>

      <div className="bg-mudGreen text-white w-full pt-[43px] lg:pt-[54px] pb-[30px] lg:pb-[40px]">
        <div className="flex flex-col items-center mx-auto">
          <Image
            src={Firma}
            alt=""
            className="lg:w-[192px]"
          />
        </div>
      </div>
    </section>
  );
}
