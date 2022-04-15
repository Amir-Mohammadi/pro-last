import styles from "./header.module.scss";
import image from "../../assets/images/prolast.png";

interface props {
  items: {
    title: string;
  }[];
  title: string;
}

export type HeaderProps = props;

const Header: React.FC<HeaderProps> = (props) => {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>
        <div style={{ backgroundImage: `url(${image})`, height: "80px" }}></div>
      </div>
      <div className={styles.items}>
        {props.items.map((tab, i) => (
          <div className={styles.navbar}>
            <span key={i + "_tabBar"}>{tab.title}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Header;
