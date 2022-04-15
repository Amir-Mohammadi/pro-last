import styles from "./handles.module.scss";

interface props {}

export type HandleProps = props;

const Handles: React.FC<HandleProps> = (props) => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <span>WINDOW HANDLES</span>
      </div>
      <div >
        <span>A Small but Important Feature</span>
      </div>

      <div></div>
      <div></div>
    </div>
  );
};

export default Handles;
