
import styles from "./styles.module.css";
import type { INews } from "../../model/types";
import Image from "@/shared/ui/Image/Image";
import { formatTimeAgo } from "@/shared/helpers/formatTimeAgo";


interface Props {
  item: INews;
}

const NewsDetails = ({ item }: Props) => {
  if (!item) return null;

  return (
    <div className={styles.details}>
        <Image image={item.image} />
      <div className={ styles.description}>
        <p >{item.description}  <a href={item.url} target="_blank" rel="noopener noreferrer">Read more...</a></p>
        <p className={styles.extra}>  {formatTimeAgo(item.published)} by {item.author}</p>
        <ul>
          {item.category.map((category) => {
            return <button className={styles.active}>{category}</button>
          })}
        </ul>
      </div>
    </div>
  );
};

export default NewsDetails;
