import styles from "./home.module.css";
import Login from "../Login/Login";

function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.box}>
        <Login />
      </div>
    </div>
  );
}

export default Home;
