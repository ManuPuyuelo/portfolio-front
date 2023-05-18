import styles from "../styles/Home.module.css";
import IDComponent from "./IDComponent";

function Home() {
  return (
    <div>
      <main className={styles.main}>
        <IDComponent />
      </main>
    </div>
  );
}

export default Home;
