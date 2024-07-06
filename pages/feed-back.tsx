import type { NextPage } from "next";
import Form from "../components/form";
import FrameComponent from "../components/frame-component";
import styles from "./feed-back.module.css";

const FeedBack: NextPage = () => {
  return (
    <div className={styles.feedback}>
      <div className={styles.shareYourTravelsForm}>
        <div className={styles.formHeader}>
          <img className={styles.image13Icon} alt="" src="/image-13@2x.png" />
          <div className={styles.summitHotel}>Summit Hotel</div>
        </div>
        <Form />
      </div>
      <FrameComponent
        lETTERLOGO2="/letter-logo-2@2x.png"
        propFlexDirection="row"
      />
    </div>
  );
};

export default FeedBack;
