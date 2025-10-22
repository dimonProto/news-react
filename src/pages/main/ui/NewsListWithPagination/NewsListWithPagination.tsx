
import PaginationWrapper from "@/features/pagination/ui/Pagination/Pagination";
import  { TOTAL_PAGES } from "@/shared/constants/constant";
import {  NewsList } from "@/widgets/news";
import type { IFilters } from "@/shared/interfaces";
import type { INews } from "@/entities/news";
import { usePaginationNews } from "../../utils/hooks/usePaginationNews";

interface Props {
  filters: IFilters;
  news:INews[];
  isLoading: boolean
}


const NewsListWithPagination = ({filters, news, isLoading}: Props) => {

  const {handleNextPage, handlePreviousPage, handlePages} = usePaginationNews(filters)


  return (
      <PaginationWrapper
        top
        bottom
        handleNextPage={handleNextPage}
        handlePreviousPage={handlePreviousPage}
        handlePages={handlePages}
        totalPages={TOTAL_PAGES}
        currentPage={filters.page_number}
      >
        <NewsList type="item" direction="column" isLoading={isLoading} news={news} />
      </PaginationWrapper>
  );
};

export default NewsListWithPagination;
