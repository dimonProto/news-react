
import { useAppSelector, useAppDispatch } from "@/app/appStore";
import PaginationWrapper from "@/features/pagination/ui/Pagination/Pagination";
import  { TOTAL_PAGES } from "@/shared/constants/constant";
import { useDebounce } from "@/shared/hooks/useDebounce";
import { useGetNewsQuery } from "@/entities/news/api/newsApi";
import NewsFilters from "../NewsFilters/NewsFilters";
import styles from "./styles.module.css";
import { setFilters } from "@/entities/news/model/newsSlice";
import { NewsList } from "@/widgets/news";

const NewsByFilter = () => {


  const filters = useAppSelector(state => state.news.filters)

  const news = useAppSelector(state => state.news.news)

  const dispatch = useAppDispatch()
  const debouncedKeywords = useDebounce(filters.keywords, 1500);

  const { isLoading } = useGetNewsQuery({
    ...filters,
    keywords: debouncedKeywords,
  });

  const handleNextPage = () => {
    if (filters.page_number < TOTAL_PAGES) {
      dispatch(setFilters({key: "page_number", value: filters.page_number + 1}))
    }
  };

  const handlePreviousPage = () => {
    if (filters.page_number > 1) {
      dispatch(setFilters({key: "page_number", value: filters.page_number - 1}))
    }
  };

  const handlePages = (pageNum: number) => {
     dispatch(setFilters({key: "page_number", value: pageNum}))
  };

  return (
    <section className={styles.section}>
      <NewsFilters filters={filters} />

      <PaginationWrapper
        top
        bottom
        handleNextPage={handleNextPage}
        handlePreviousPage={handlePreviousPage}
        handlePages={handlePages}
        totalPages={TOTAL_PAGES}
        currentPage={filters.page_number}
      >
        <NewsList isLoading={isLoading} news={news} />
      </PaginationWrapper>
    </section>
  );
};

export default NewsByFilter;
