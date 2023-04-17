import Styles from "@/styles/Index.module.css";
import { Header } from "@/components/header";
import { Timeline } from "@/components/timeline";
import { Products } from "@/components/products";

const Index = () => {
  return (
    <div className={Styles.wrapper}>
      <Header id={"home"} />
      <Timeline id={"timeline"} />
      <Products id={"products"} />
    </div>
  );
};

export default Index;
