import Styles from "./Styles.module.scss";

type props = {
  url: string;
};

const Package = ({ url }: props) => {
  return (
    <a href={url} target={"_blank"} className={Styles.wrapper}>
      <img src={"/icons/package.svg"} alt={"package"} width={20} height={20} />
      <span className={Styles.text}>{url}</span>
    </a>
  );
};

export { Package };
