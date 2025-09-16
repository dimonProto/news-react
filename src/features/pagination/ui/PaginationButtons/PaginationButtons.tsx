
import { useTheme } from "@/app/providers/ThemeProvider";
import type { IPaginationProps } from "../../model/types";
import styles from "./styles.module.css";




const PaginationButtons = ({
  totalPages,
  handleNextPage,
  handlePreviousPage,
  handlePages,
  currentPage,
}: IPaginationProps) => {

   const {isDark} = useTheme()
  return (
    <div  className= {`${styles.pagination} ${isDark ? styles.dark : styles.light} `}>
      <button
        onClick={handlePreviousPage}
        disabled={currentPage <= 1}
        className={styles.arrow}
      >
        {"<"}
      </button>
      <div className={styles.list}>
        {[...Array(totalPages)].map((_, index) => {
          return (
            <button
              onClick={() => handlePages(index + 1)}
              disabled={index + 1 === currentPage}
              className={styles.pageNumber}
              key={index}
            >
              {index + 1}
            </button>
          );
        })}
      </div>

      <button
        onClick={handleNextPage}
        disabled={currentPage >= totalPages}
        className={styles.arrow}
      >
        {">"}
      </button>
    </div>
  );
};

export default PaginationButtons;
