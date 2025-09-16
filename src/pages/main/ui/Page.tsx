import LatestNews from "./LatestNews/LatestNews";
import NewsByFilter from "./NewsByFilter/NewsByFilter";
import styles from "./styles.module.css";




const Main = () => {

  return (
    <main className={styles.main}>
      <LatestNews />

      <NewsByFilter/>
    </main>
  );
};

export default Main;
