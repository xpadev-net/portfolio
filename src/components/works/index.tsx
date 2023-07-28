import { Card } from "@/components/card";
import Styles from "./Styles.module.scss";
import { Anchor } from "@/components/anchor";
import { Web } from "@/components/links";

type props = {
  id?: string;
};

const Works = ({ id }: props) => {
  return (
    <section className={Styles.wrapper}>
      <Anchor id={id} />
      <h2>Works</h2>
      <div className={Styles.container}>
        <Card title={"TechBowl様 学校法人向けLP"} id={"w_techtrain_lp"}>
          <Web url={"https://education.techtrain.dev"} />
          <p>
            TechBowl様の運営する「TechTrain」というサービスのリニューアルに伴う新LPの制作
          </p>
          <p>業務委託として、頂いたFigmaのデザインからのコーディングを請負</p>
        </Card>
      </div>
    </section>
  );
};

export { Works };
