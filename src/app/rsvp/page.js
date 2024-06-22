"use client";
import Image from "next/image";
import Link from "next/link";
import Vector14 from "../../../public/images/vector14.svg";
import Firma from "../../../public/images/firma-white.svg";

export default function RSVP() {
  return (
    <section className="flex flex-col items-center bg-offWhite text-black">
      <div className="flex flex-col items-center max-w-[90%] md:relative pb-[88px] md:pb-[110px]">
        <div className="md:relative md:w-full flex flex-col items-center mt-[63px] md:mt-[140px]">
          <h4 className="text-[40px] leading-[55px] text-center md:text-[36px] md:leading-[48px] font-light text-darkGray md:max-w-[750px]">
            ¡Estamos muy felices de compartir con ustedes este día tan especial!
          </h4>
          <Link href="" className="mt-[40px] md:mt-[50px] mb-[60px] md:mb-[50px] " target="_blank">
            <p className="uppercase text-[12px] md:text-[14px] text-white tracking-[0.4em] bg-gray px-[27px] md:px-[25px] py-[14px] md:py-[18px] rounded-tl-[28px] md:rounded-tl-[30px] rounded-br-[28px] md:rounded-br-[30px] rounded-tr-[3px] md:rounded-tr-[3px] rounded-bl-[3px] md:rounded-bl-[3px] transition-colors duration-300 ease-in-out hover:bg-mudGreen">
              Confirmar asistencia
            </p>
          </Link>
          <Image
            src={Vector14}
            alt=""
            className="mt-0 md:mt-[19px] mb-[27px] md:w-[230px]"
          />

          <p className="text-center font-normal max-w-[300px] md:max-w-[950px] text-base md:text-[18px] md:leading-[30px] text-darkGray leading-[34px] mt-[15px] md:mt-[30px] mb-[36px] md:mb-[90px]">
            <span className="font-semibold">
              ¡Sabemos que llegar a Mendoza representa un gran esfuerzo y no
              podemos estar más agradecidos!
            </span>{" "}
            <br />
            Si, además, queres ayudarnos con nuestra luna de miel:
          </p>
          <div className="md:flex md:w-full md:gap-x-[45px]">
          <div className="text-center text-offWhite w-full bg-mudGreen pt-[46px] md:pt-[30px] pb-[20px] rounded-tl-[30px] rounded-tr-[8px]  rounded-bl-[8px] mb-[53px] md:mb-0">
            <p className="font-rbeanie px-[40px] text-left md:text-center text-[50px] md:text-[56px] leading-[44px] md:leading-[57px] mb-[20px] md:mb-[20px]">Argentina</p>
            <ul className="px-[40px] text-left md:text-center text-[16px] md:text-[18px] leading-[18px] md:leading-[20px]">
              Banco Santander
              <li className="my-5">. Cuenta 718-362003/2</li>
              <li className="my-5">. CBU: 0720718388000036200322</li>
              <li className="my-5">. Alias: joseymariano</li>
            </ul>
          </div>
          <div className="text-center text-offWhite w-full bg-mudGreen pt-[46px] md:pt-[30px] pb-[20px] rounded-tl-[30px] rounded-tr-[8px]  rounded-bl-[8px]">
            <p className="font-rbeanie px-[40px] text-left md:text-center text-[50px] md:text-[56px] leading-[44px] md:leading-[57px] mb-[20px] md:mb-[20px]">USA</p>
            <ul className="px-[40px] text-left md:text-center text-[16px] md:text-[18px] leading-[18px] md:leading-[20px]">
              Chase Bank NA
              <li className="my-5">. Cuenta 758267568</li>
              <li className="my-5">. Routing: 021000021</li>
              <li className="my-5">. Venmo: @Josefina-Griot</li>
              <li className="my-5">. Zelle: 3476548548</li>
            </ul>
          </div>
          </div>
        </div>
      </div>

      <div className="bg-mudGreen text-white w-full pt-[43px] md:pt-[54px] pb-[30px] md:pb-[40px]">
        <div className="flex flex-col items-center mx-auto">
          <Image src={Firma} alt="" className="md:w-[160px]" />
        </div>
      </div>
    </section>
  );
}
