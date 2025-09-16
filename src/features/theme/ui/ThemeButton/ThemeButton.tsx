import { useTheme } from "@/app/providers/ThemeProvider";
import { themeIcon } from "@/shared/assets";



const ThemeButton = () => {
  const {isDark, toggleTheme } = useTheme();
  return (
    <img
      src={isDark ? themeIcon.light : themeIcon.dark}
      width={30}
      alt="theme"
      onClick={toggleTheme}
    />
  );
};

export default ThemeButton;
