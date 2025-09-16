
export interface IPaginationProps {
  totalPages: number;
  handleNextPage: () => void;
  handlePreviousPage: () => void;
  handlePages: (page: number) => void;
  currentPage: number;
}



