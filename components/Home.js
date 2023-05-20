import styles from "../styles/Home.module.css";
import IDComponent from "./IDComponent";
import Header from "./Header";

function Home() {
  return (
    <div>
      <main className={styles.main}>
        <Header />
        <IDComponent />
      </main>
    </div>
  );
}

export default Home;
