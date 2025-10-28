import { useGetLatestNewsQuery } from "@/entities/news/api/newsApi";
import styles from "./styles.module.css";
import NewsListWithSkeleton from "@/widgets/news/ui/NewsList/NewsList";
import type { INews } from "@/entities/news";
import { useAppDispatch } from "@/app/appStore";
import { setCurrentNews } from "@/entities/news/model/newsSlice";
import { useNavigate } from "react-router-dom";

const LatestNews = () => {
  const { data, isLoading } = useGetLatestNewsQuery(null);

  const navigate = useNavigate();
  const dispatch = useAppDispatch()

  const navigateTo = (news:INews) => {
    dispatch(setCurrentNews(news))
    navigate(`/news/${news.id}`)
  };

  return (
    <section className={styles.section}>
      <NewsListWithSkeleton
        type="banner"
        direction="row"
        news={data && data.news}
        viewNewsSlot={(news:INews) => <p  className={styles.view} onClick={() => navigateTo(news)}>view more...</p>}
        isLoading={isLoading}
      />
    </section>
  );
};

export default LatestNews;
