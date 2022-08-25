import { card } from "../assets";
import styles, { layout } from "../style";
import Buttom from "./Button";

const CardDeal = () => (
  <section className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        Find a better card deal
        <br className="sm:block hidden" /> in few easy steps.
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Tempor laborum tempor aliqua minim incididunt non nulla excepteur fugiat
        cupidatat ad minim mollit. Ipsum ex voluptate ad commodo. Eiusmod duis
        elit culpa tempor nisi.
      </p>
      <Buttom styles="mt-10" />
    </div>
    <div className={layout.sectionImg}>
      <img src={card} alt="card" className="w-[100%] h-[100%" />
    </div>
  </section>
);

export default CardDeal;
