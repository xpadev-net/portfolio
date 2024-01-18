import Head from "next/head";

import { Header } from "@/components/header";
import { Products } from "@/components/products";
import { Profile } from "@/components/profile";
import { Timeline } from "@/components/timeline";
import { Works } from "@/components/works";
import Styles from "@/styles/Index.module.css";

const Index = () => {
  return (
    <div className={Styles.wrapper}>
      <Head>
        <title>XPA</title>
      </Head>
      <Header id={"home"} />
      <Timeline id={"timeline"} />
      <Products id={"products"} />
      <Works id={"works"} />
      <Profile id={"profile"} />
    </div>
  );
};

export default Index;
