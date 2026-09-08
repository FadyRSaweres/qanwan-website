import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Menu, X, Moon, Sun, Globe } from "lucide-react";
import { useTheme } from "next-themes";
import { useTranslation } from "react-i18next";
import logo from "@/assets/logo.svg";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const Header = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { pathname } = useLocation();
  const { t, i18n } = useTranslation();
  const { theme, setTheme, resolvedTheme } = useTheme();

  const activeTheme = resolvedTheme ?? theme ?? "light";
  const navItems = [
    { to: "/", label: t("nav.home") },
    { to: "/about", label: t("nav.about") },
    { to: "/services", label: t("nav.services") },
    { to: "/contact", label: t("nav.contact") },
  ];

  const toggleLang = () => {
    i18n.changeLanguage(i18n.language === "ar" ? "en" : "ar");
  };

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-smooth",
        scrolled
          ? "border-b border-border bg-background/85 backdrop-blur-md shadow-soft"
          : "bg-background/60 backdrop-blur-sm"
      )}
    >
      <div className="container flex h-16 items-center justify-between md:h-20">
        <Link to="/" className="flex items-center gap-2.5">
          <img src={logo} alt="XAI Technology" className="h-9 w-auto md:h-10 dark:invert" />
          {/* <span className="hidden text-sm font-semibold tracking-wide text-foreground sm:inline">
            XAI Technology
          </span> */}
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === "/"}
              className={({ isActive }) =>
                cn(
                  "text-sm font-medium transition-smooth hover:text-foreground",
                  isActive ? "text-foreground" : "text-muted-foreground"
                )
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden items-center gap-2 md:flex">
          <button
            onClick={toggleLang}
            aria-label="Toggle language"
            className="rounded-md p-2 text-muted-foreground transition-smooth hover:text-foreground"
          >
            <Globe className="h-4 w-4" />
            <span className="sr-only">Language</span>
          </button>
          <button
            onClick={() => setTheme(activeTheme === "dark" ? "light" : "dark")}
            aria-label="Toggle theme"
            className="rounded-md p-2 text-muted-foreground transition-smooth hover:text-foreground"
          >
            {activeTheme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </button>
          <Button asChild size="sm">
            <Link to="/contact">{t("nav.getInTouch")}</Link>
          </Button>
        </div>

        <button
          aria-label="Toggle menu"
          className="rounded-md p-2 text-foreground md:hidden"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-border bg-background md:hidden">
          <nav className="container flex flex-col gap-1 py-4">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.to === "/"}
                className={({ isActive }) =>
                  cn(
                    "rounded-md px-3 py-2.5 text-sm font-medium transition-smooth",
                    isActive
                      ? "bg-secondary text-foreground"
                      : "text-muted-foreground hover:bg-secondary hover:text-foreground"
                  )
                }
              >
                {item.label}
              </NavLink>
            ))}
            <div className="flex items-center gap-2 mt-2">
              <button onClick={toggleLang} className="rounded-md p-2 text-muted-foreground hover:text-foreground">
                <Globe className="h-4 w-4" />
              </button>
              <button onClick={() => setTheme(activeTheme === "dark" ? "light" : "dark")} className="rounded-md p-2 text-muted-foreground hover:text-foreground">
                {activeTheme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
              </button>
            </div>
            <Button asChild className="mt-1">
              <Link to="/contact">{t("nav.getInTouch")}</Link>
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;