import Styles from "./Styles.module.scss";

type props = {
  url: string;
};

const Twitter = ({ url }: props) => {
  return (
    <a href={url} target={"_blank"} className={Styles.wrapper}>
      <img src={"/icons/twitter.svg"} alt={"twitter"} width={20} height={20} />
      <span className={Styles.text}>{url}</span>
    </a>
  );
};

export { Twitter };
