import Styles from "./Styles.module.scss";
import { ReactNode } from "react";

type props = {
  date: string;
  children: ReactNode;
};

const TimelineItem = ({ date, children }: props) => {
  return (
    <div className={Styles.item}>
      <div className={Styles.date}>{date}</div>
      <div className={Styles.content}>{children}</div>
    </div>
  );
};

export { TimelineItem };
