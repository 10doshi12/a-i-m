import {topRB } from "../assets";
import styles, { layout } from "../style";
import Button from "./Button";

const AIMpart = () => (
  <section className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        Ready Set Go <br className="sm:block hidden" /> in few easy
        steps.
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Modern Problems require Futuristic Solutions so be a part of the future with A.I.M.
      </p>

      <Button styles={`mt-10`} />
    </div>

    <div className={layout.sectionImg}>
      <img src={topRB} alt="billing" className="w-[100%] h-[100%]" />
    </div>
  </section>
);

export default AIMpart;
