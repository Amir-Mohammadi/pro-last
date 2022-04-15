import styles from "./home-page.module.scss";
import image from "../../assets/images/window-handles.jpg";
import Header from "../header";

interface props {
  title: string;
}

export type HomeProps = props;

const HomePage: React.FC<HomeProps> = (props) => {
  return (
    <div className="mainPage">
      <div>
        <Header
          title=""
          items={[{ title: "محصولات" }, { title: "ارتباط با ما" }]}
        ></Header>
      </div>
      <div
        
        style={{
          backgroundImage: `url(${image})`,
          height: "400px",
          width: "1903px",
        }}
      ></div>

      <div className={styles.bodies}>
          <div></div>
      </div>
    </div>
  );
};

export default HomePage;
