import Image from "next/image";
import Preboda from "./preboda/page";
import Countdown from "../../components/Countdown/Countdown";
import Vector9 from "../../public/images/vector9.svg";
import Vector19 from "../../public/images/vector19home.svg";

export default function Home() {
  return (
    <main className="relative flex flex-col items-center pt-32 bg-offWhite">
      <div className="flex flex-col items-center">
      <Image
          src={Vector9}
          alt=""
          className="absolute top-[400px] md:top-[500px] left-0 w-[182px] md:w-[240px]"
        />
        <Image
          src={Vector19}
          alt=""
          className="absolute top-[50px] right-0 w-[182px] md:w-[260px]"
        />
      <h2 className="text-mudGreenDark tracking-[0.2em] font-semibold text-[17px] md:text-[20px] leading-[17px] md:leading-[20px] mb-[54px] md:mb-[45px] animate-slidein300 opacity-0">23 . 11 . 2024</h2>
      <h1 className="font-extralight text-mudGreenDark tracking-[0.15em] md:tracking-[0.2em] text-[34px] leading-[34px] md:leading-[72px] md:text-[72px] animate-slidein500 opacity-0">Jose y Mariano</h1>
      <h3 className="font-rbeanie text-mudGreenDark text-[30px] md:text-[62px] mt-[15px] animate-slidein700 opacity-0">Mendoza, Argentina</h3>
      <Countdown targetDate="2024-11-23T17:00:00" className="opacity-0 animate-slidein900 mt-[50px]" />
      </div>
    </main>
  );
}
