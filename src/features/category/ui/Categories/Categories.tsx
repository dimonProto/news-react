import { forwardRef, type ForwardedRef } from "react";
import styles from "./styles.module.css";
import type { CategoriesType } from "@/entities/category";


interface Props {
  categories: CategoriesType[];
  setSelectedCategory:  (category: CategoriesType | null ) => void;
  selectedCategory: CategoriesType | null

}

const Categories = forwardRef(({ categories, selectedCategory, setSelectedCategory }: Props, ref: ForwardedRef<HTMLDivElement>) => {
  return (
    <div ref={ref} className={styles.categories}>
      <button
        onClick={() => setSelectedCategory(null)}
        className={!selectedCategory ? styles.active : styles.item}
       
      >
        All
      </button>
      {categories.map((category) => {
        return (
          <button
            onClick={() => setSelectedCategory(category)}
            className={
              category === selectedCategory ? styles.active : styles.item
            }
            key={category}
          >
            {category}
          </button>
        );
      })}
    </div>
  );
});

Categories.displayName = 'Categories'

export default Categories;
