
import { useAppDispatch } from "@/app/appStore";
import { useTheme } from "@/app/providers/ThemeProvider";
import Slider from "@/features/slider/ui/Slider/Slider";
import styles from "./styles.module.css";
import type { IFilters } from "@/shared/interfaces";
import { useGetCategoriesQuery } from "@/entities/category/api/categoriesApi";
import { setFilters } from "@/entities/news/model/newsSlice";
import { Categories } from "@/features/category";
import { Search } from "@/features/search";


interface Props {
  filters: IFilters;
}

const NewsFilters = ({ filters }: Props) => {
  const { isDark } = useTheme();

    const dispatch = useAppDispatch()

  const { data: dataCategories } = useGetCategoriesQuery(null);

  return (
    <div className={styles.filters}>
      {dataCategories ? (
        <Slider isDark={isDark}>
          <Categories
            categories={dataCategories.categories}
            selectedCategory={filters.category}
            setSelectedCategory={(category) =>
              dispatch(setFilters({key: "category", value: category}))
            }
          />
        </Slider>
      ) : null}
      <Search
        keywords={filters.keywords}
        setKeywords={(keywords) => dispatch(setFilters({key: "keywords", value: keywords})) }
      />
    </div>
  );
};

export default NewsFilters;
