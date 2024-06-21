import Image from "next/image";
import Preboda from "./preboda/page";
import Vector9 from "../../public/images/vector9.svg";
import Vector19 from "../../public/images/vector19home.svg";

export default function Home() {
  return (
    <main className="relative flex flex-col items-center pt-32 bg-offWhite">
      <div className="flex flex-col items-center">
      <Image
          src={Vector9}
          alt=""
          className="absolute top-[400px] lg:top-[500px] left-0 w-[182px] lg:w-[254px]"
        />
        <Image
          src={Vector19}
          alt=""
          className="absolute top-[50px] right-0 w-[182px] lg:w-[311px]"
        />
      <h2 className="text-mudGreenDark tracking-[0.2em] font-semibold text-[17px] lg:text-[22px] leading-[17px] lg:leading-[22px] mb-[54px] animate-slidein300 opacity-0">23 . 11 . 2024</h2>
      <h1 className="font-extralight text-mudGreenDark tracking-[0.15em] lg:tracking-[0.2em] text-[34px] leading-[34px] lg:leading-[90px] lg:text-[90px] animate-slidein500 opacity-0">Jose y Mariano</h1>
      <h3 className="font-rbeanie text-mudGreenDark text-[30px] lg:text-[78px] mt-[15px] animate-slidein700 opacity-0">Mendoza, Argentina</h3>
      </div>
    </main>
  );
}
