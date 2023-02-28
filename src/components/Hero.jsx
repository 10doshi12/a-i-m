import styles from "../style";
import {voice, finalRB} from "../assets";

const Hero = () => {
  return (
    <section id="home" className={`flex md:flex-row flex-col `}>
      <div className={`flex-1 ${styles.flexStart} flex-col justify-start xl:px-0 sm:px-16 px-6 mb-16`}>
        <div className="flex flex-row items-center py-[6px] bg-gradient rounded-[10px] mb-2">
          <p className={`${styles.paragraph} text-2xl ml-2`}>
            <span className="text-white">A.I.M</span> {"("}Artificially Intelligent Manager{")"}
          </p>
        </div>

        <div className="flex flex-row justify-between items-center w-full">
          <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100.8px] leading-[75px]">
            Communication <br className="sm:block hidden" />{" "}
            <span className="text-gradient">Redefined</span>{" "}
          </h1>
        </div>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Our team of experts uses AI an data science to redifine the way we communicate.
        Now with A.I.M no more waiting for someone to pickup your call.
        </p>
      </div>

      <div className={`flex-1 flex ${styles.flexCenter} relative`}>
        <img src={finalRB} alt="billing" className="w-[95%] h-[100%] relative z-[5] rounded-xl" />

        {/* gradient start */}
        <div className="absolute z-[0] w-[60%] h-[35%] top-0 pink__gradient" />
        <div className="absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40" />
        <div className="absolute z-[0] w-[80%] h-[80%] right-20 bottom-20 blue__gradient" />
        {/* gradient end */}
      </div>
    </section>
  );
};

export default Hero;
