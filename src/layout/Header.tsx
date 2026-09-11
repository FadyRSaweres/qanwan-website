import { useEffect, useRef, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Menu, X, Moon, Sun, Globe, ChevronDown, ArrowRight, ArrowLeft } from "lucide-react";
import { useTheme } from "next-themes";
import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { logo64 } from "@/assets/qanwan-logo";

export interface INavLink {
  to: string;
  label: string;
  child?: INavLink[];
}

const Header = () => {
  const [open, setOpen] = useState(false); // mobile menu open
  const [scrolled, setScrolled] = useState(false);
  const [desktopDropdown, setDesktopDropdown] = useState<string | null>(null);
  const [mobileDropdown, setMobileDropdown] = useState<string | null>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const { pathname } = useLocation();
  const { t, i18n } = useTranslation();
  const { theme, setTheme, resolvedTheme } = useTheme();

  const activeTheme = resolvedTheme ?? theme ?? "light";

  const navItems: INavLink[] = [
    { to: "/", label: t("nav.home", "الرئيسية") },
    {
      to: "#",
      label: t("nav.about"),
      child: [
        { to: "/about", label: t("nav.aboutQanwan") },
        { to: "/investment-model", label: t("nav.investmentModel") },
        { to: "/investments", label: t("nav.investments") },
        { to: "/success-partners", label: t("nav.successPartners") },
        { to: "/performance-indicators", label: t("nav.performanceIndicators") },
      ],
    },
    {
      to: "/media-center", label: t("nav.mediaCenter"),
      child: [
        {
          to: "/news", label: t("nav.news"),
        },
        {
          to: "/events", label: t("nav.events"),
        },
      ]
    },
    {
      to: "/initiatives", label: t("nav.initiatives"),
      child: [
        { to: "/community", label: t("nav.community") },
        { to: "/initiatives", label: t("nav.qanwan_national") },

      ]
    },
    {
      to: "/academy", label: t("nav.academy"),
      child: [
        { to: "/community", label: t("nav.more") },
      ]
    },
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

  useEffect(() => {
    setOpen(false);
    setDesktopDropdown(null);
    setMobileDropdown(null);
  }, [pathname]);

  // Small delay before closing on mouse leave, so moving from trigger to
  // panel doesn't accidentally close the dropdown.
  const openDropdown = (key: string) => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setDesktopDropdown(key);
  };
  const scheduleClose = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    closeTimer.current = setTimeout(() => setDesktopDropdown(null), 150);
  };

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-smooth ",
        scrolled
          ? "border-b border-border bg-background/85 backdrop-blur-md shadow-soft"
          : "bg-background/60 backdrop-blur-sm"
      )}
    >
      <div className="container flex h-16 items-center justify-between md:h-16">
        <Link to="/" className="flex items-center gap-2.5">
          <img src={logo64} alt="Qanwan Logo" className="h-44 w-auto md:h-44 dark:invert" />
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => {
            const hasChildren = !!item.child?.length;

            if (!hasChildren) {
              return (
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
              );
            }

            const isOpen = desktopDropdown === item.to;

            return (
              <div
                key={item.to}
                className="relative"
                onMouseEnter={() => openDropdown(item.to)}
                onMouseLeave={scheduleClose}
              >
                <NavLink
                  to={item.to}
                  onClick={() => setDesktopDropdown((prev) => (prev === item.to ? null : item.to))}
                  className={({ isActive }) =>
                    cn(
                      "flex items-center gap-1 text-sm font-medium transition-smooth hover:text-foreground",
                      isActive || isOpen ? "text-foreground" : "text-muted-foreground"
                    )
                  }
                >
                  {item.label}
                  <ChevronDown
                    className={cn("h-3.5 w-3.5 transition-transform duration-200", isOpen && "rotate-180")}
                  />
                </NavLink>

                <div
                  className={cn(
                    "absolute top-full right-0 z-50 mt-3 min-w-[240px] rounded-xl border border-border bg-background p-2 shadow-soft transition-all duration-200",
                    isOpen
                      ? "visible translate-y-0 opacity-100"
                      : "invisible -translate-y-1 opacity-0 pointer-events-none"
                  )}
                >
                  {item.child!.map((child) => (
                    <Link
                      key={child.to}
                      to={child.to}
                      className="flex items-center justify-between gap-3 rounded-lg px-3 py-2.5 text-sm text-muted-foreground transition-smooth hover:bg-secondary hover:text-foreground"
                    >
                      <span>{child.label}</span>
                      <ArrowLeft className="h-3.5 w-3.5 shrink-0 text-primary" />
                    </Link>
                  ))}
                </div>
              </div>
            );
          })}
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
            <Link to="/contact">{t("contact.getInTouch")}</Link>
          </Button>
          <Button asChild size="sm" variant="outline">
            <Link to="/contact">{t("nav.login")}</Link>
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
            {navItems.map((item) => {
              const hasChildren = !!item.child?.length;

              if (!hasChildren) {
                return (
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
                );
              }

              const isMobileOpen = mobileDropdown === item.to;

              return (
                <div key={item.to} className="flex flex-col">
                  <button
                    onClick={() => setMobileDropdown((prev) => (prev === item.to ? null : item.to))}
                    className={cn(
                      "flex items-center justify-between rounded-md px-3 py-2.5 text-sm font-medium transition-smooth",
                      isMobileOpen
                        ? "bg-secondary text-foreground"
                        : "text-muted-foreground hover:bg-secondary hover:text-foreground"
                    )}
                  >
                    {item.label}
                    <ChevronDown
                      className={cn("h-4 w-4 transition-transform duration-200", isMobileOpen && "rotate-180")}
                    />
                  </button>

                  <div
                    className={cn(
                      "flex flex-col overflow-hidden transition-all duration-200",
                      isMobileOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                    )}
                  >
                    {item.child!.map((child) => (
                      <Link
                        key={child.to}
                        to={child.to}
                        className="flex items-center justify-between gap-3 rounded-md px-6 py-2.5 text-sm text-muted-foreground transition-smooth hover:bg-secondary hover:text-foreground"
                      >
                        <span>{child.label}</span>
                        <ArrowRight className="h-3.5 w-3.5 shrink-0 text-primary" />
                      </Link>
                    ))}
                  </div>
                </div>
              );
            })}

            <div className="flex items-center gap-2 mt-2">
              <button onClick={toggleLang} className="rounded-md p-2 text-muted-foreground hover:text-foreground">
                <Globe className="h-4 w-4" />
              </button>
              <button
                onClick={() => setTheme(activeTheme === "dark" ? "light" : "dark")}
                className="rounded-md p-2 text-muted-foreground hover:text-foreground"
              >
                {activeTheme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
              </button>
            </div>
            <Button asChild className="mt-1">

              <Link to="/contact">{t("contact.getInTouch")}</Link>
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
