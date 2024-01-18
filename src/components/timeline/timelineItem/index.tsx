import { ReactNode } from "react";

import Styles from "./Styles.module.scss";

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
