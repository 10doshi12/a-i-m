import { robot } from "../assets";
import styles, { layout } from "../style";

const CustSupport = () => (
  <section id="product" className={layout.sectionReverse}>
    <div className={layout.sectionImgReverse}>
      <img src={robot} alt="billing" className="w-[100%] h-[100%] relative z-[5]" />

      {/* gradient start */}
      <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
      <div className="absolute z-[0] w-[50%] h-[50%] -left-1/2 bottom-0 rounded-full pink__gradient" />
      {/* gradient end */}
    </div>

    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        The Most Efficient Way to Handle Customer Support
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        A.I.M aimes to increase customer satisfaction and help them resolve their Queries by 
        always being there to answer at customer support.
      </p>
    </div>
  </section>
);

export default CustSupport;
