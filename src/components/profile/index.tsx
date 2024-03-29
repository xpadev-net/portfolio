import { Anchor } from "@/components/anchor";
import { GitHub, Qiita, Twitter, Zenn } from "@/components/links";

import Styles from "./Styles.module.scss";

type props = {
  id?: string;
};

const Profile = ({ id }: props) => {
  return (
    <section className={Styles.wrapper}>
      <Anchor id={id} />
      <h2>Profile</h2>
      <div className={Styles.card}>
        <p>そこら辺の学生</p>
        <p>自宅サーバーはいいぞ！</p>
        <GitHub url={"https://github.com/xpadev-net"} />
        <Zenn url={"https://zenn.dev/xpadev"} />
        <Twitter url={"https://twitter.com/xpadev"} />
        <Qiita url={"https://qiita.com/xpadev-net"} />
      </div>
    </section>
  );
};

export { Profile };
