import { useAppDispatch } from "@/app/appStore";
import { setFilters } from "@/entities/news/model/newsSlice";
import { TOTAL_PAGES } from "@/shared/constants/constant";
import type { IFilters } from "@/shared/interfaces";



export const usePaginationNews = (filters:IFilters) => {

      const dispatch = useAppDispatch()

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
    
     return {handleNextPage,handlePreviousPage, handlePages }
}