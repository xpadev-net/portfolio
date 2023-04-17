import { ReactNode } from "react";
import { Anchor } from "@/components/anchor";
import Styles from "./Styles.module.scss";

type props = {
  id?: string;
  thumbnail?: string;
  title: string;
  children: ReactNode;
};

const Product = ({ id, thumbnail, title, children }: props) => {
  return (
    <div className={Styles.wrapper}>
      <Anchor id={id} />
      {thumbnail && (
        <img src={thumbnail} alt={title} className={Styles.thumbnail} />
      )}
      <h3 className={Styles.title}>{title}</h3>
      <div className={Styles.content}>{children}</div>
    </div>
  );
};

export { Product };
