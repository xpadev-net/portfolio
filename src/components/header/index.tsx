import Styles from "./Styles.module.scss";
import Image from "next/image";
import { Anchor } from "@/components/anchor";

type props = {
  id: string;
};

const Header = ({ id }: props) => {
  return (
    <header className={Styles.header}>
      <div className={Styles.siteName}>
        <Anchor id={id} />
        <Image
          className={Styles.icon}
          src={"/icons/profile.jpg"}
          alt={"profile icon"}
          width={40}
          height={40}
        />
        <h1 className={Styles.span}>XPA</h1>
      </div>
      <nav className={Styles.nav}>
        <a href={"#home"} className={Styles.link}>
          Home
        </a>
        <a href={"#timeline"} className={Styles.link}>
          Timeline
        </a>
        <a href={"#products"} className={Styles.link}>
          Products
        </a>
        <a href={"#works"} className={Styles.link}>
          Works
        </a>
        <a href={"#profile"} className={Styles.link}>
          Profile
        </a>
      </nav>
    </header>
  );
};

export { Header };
