import { FC, useState, useEffect } from "react";
import { VisuallyHidden } from "@react-aria/visually-hidden";
import clsx from "clsx";
import { useTheme } from "@heroui/use-theme";
import { useLocation } from "react-router-dom";

import { SunFilledIcon, MoonFilledIcon } from "@/components/icons";

export interface ThemeSwitchProps {
  className?: string;
  classNames?: {
    base?: string;
    wrapper?: string;
  };
}

export const ThemeSwitch: FC<ThemeSwitchProps> = ({
  className,
  classNames,
}) => {
  const [isMounted, setIsMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  const location = useLocation();

  const isHomePage = location.pathname === "/";

  // Efeito mais robusto para forçar tema dark na home
  useEffect(() => {
    if (isHomePage) {
      setTheme("dark");

      // Fallback: verifica novamente após um delay
      const timer = setInterval(() => {
        if (theme !== "dark") {
          setTheme("dark");
        }
      }, 500);

      return () => clearInterval(timer);
    }
  }, [isHomePage, setTheme, theme]);

  // Também verifica quando a theme muda
  useEffect(() => {
    if (isHomePage && theme !== "dark") {
      setTheme("dark");
    }
  }, [theme, isHomePage, setTheme]);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const handleToggle = () => {
    if (!isHomePage) {
      const newTheme = theme === "light" ? "dark" : "light";

      setTheme(newTheme);
    }
  };

  const isSelected = isHomePage ? false : theme === "light";

  if (!isMounted) {
    return <div className="w-6 h-6" />;
  }

  return (
    <button
      aria-label={isSelected ? "Switch to dark mode" : "Switch to light mode"}
      className={clsx(
        "px-px transition-all duration-200",
        {
          "opacity-0": isHomePage,
          "cursor-pointer hover:opacity-80 active:scale-95": !isHomePage,
        },
        className,
        classNames?.base,
      )}
      disabled={isHomePage}
      title={isHomePage ? "Theme locked to dark on home page" : "Toggle theme"}
      type="button"
      onClick={handleToggle}
    >
      <VisuallyHidden>
        <input
          readOnly
          checked={isSelected}
          disabled={isHomePage}
          type="checkbox"
        />
      </VisuallyHidden>

      <div
        className={clsx(
          "w-auto h-auto bg-transparent rounded-lg flex items-center justify-center !text-default-500 pt-px px-0 mx-0",
          classNames?.wrapper,
        )}
      >
        {isSelected ? (
          <SunFilledIcon size={22} />
        ) : (
          <MoonFilledIcon size={22} />
        )}
      </div>
    </button>
  );
};
