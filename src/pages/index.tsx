import Styles from "@/styles/Index.module.css";
import { Header } from "@/components/header";
import { Timeline } from "@/components/timeline";

const Index = () => {
  return (
    <div className={Styles.wrapper}>
      <Header id={"home"} />
      <Timeline id={"timeline"} />
    </div>
  );
};

export default Index;
