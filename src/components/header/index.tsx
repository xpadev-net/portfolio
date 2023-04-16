import Link from "next/link";
import Styles from "./Styles.module.scss";
import Image from "next/image";

const Header = () => {
  return (
    <header className={Styles.header}>
      <h1 className={Styles.siteName}>
        <Image
          className={Styles.icon}
          src={"/icons/profile.jpg"}
          alt={"profile icon"}
          width={40}
          height={40}
        />
        <span className={Styles.span}>XPA</span>
      </h1>
      <nav className={Styles.nav}>
        <Link href={"#home"} className={Styles.link}>
          Home
        </Link>
        <Link href={"#products"} className={Styles.link}>
          Products
        </Link>
        <Link href={"#profile"} className={Styles.link}>
          Profile
        </Link>
        <Link
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
        </Link>
        <Link
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
        </Link>
      </nav>
    </header>
  );
};

export { Header };
