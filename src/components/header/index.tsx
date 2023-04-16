import Link from "next/link";
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
        <a href={"#products"} className={Styles.link}>
          Products
        </a>
        <a href={"#profile"} className={Styles.link}>
          Profile
        </a>
        <a
          href={"https://twitter.com/xpadev"}
          target={"_blank"}
          className={Styles.link}
        >
          <Image
            src={"/icons/twitter.svg"}
            alt={"twitter"}
            width={20}
            height={20}
          />
        </a>
        <a
          href={"https://github.com/xpadev-net"}
          target={"_blank"}
          className={Styles.link}
        >
          <Image
            src={"/icons/github.svg"}
            alt={"twitter"}
            width={20}
            height={20}
          />
        </a>
      </nav>
    </header>
  );
};

export { Header };
