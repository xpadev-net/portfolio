import Styles from "./Styles.module.scss";

type props = {
  id?: string;
};

const Anchor = ({ id }: props) => {
  return (
    <div className={Styles.wrapper}>
      <div id={id} className={Styles.anchor} />
    </div>
  );
};

export { Anchor };
