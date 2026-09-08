import { NavLink, Outlet, useNavigate } from "react-router-dom";
import {
    Home, Info, Briefcase, Phone, LogOut,
    Menu, X, Sun, Moon, Languages
} from "lucide-react";
import { useState } from "react";
import { useTheme } from "next-themes";
import { useTranslation } from "react-i18next";
import "./admin.css";

const AdminLayout = () => {
    const navigate = useNavigate();
    const { theme, setTheme } = useTheme();
    const { i18n, t } = useTranslation();
    const [sidebarOpen, setSidebarOpen] = useState(false);

    const handleLogout = () => {
        localStorage.removeItem("token");
        navigate("/login");
    };

    const toggleLanguage = () => {
        const nextLang = i18n.language === "ar" ? "en" : "ar";
        i18n.changeLanguage(nextLang);
    };

    const navItems = [
        { to: "/admin/home", label: t("admin.home", "Home"), icon: Home },
        { to: "/admin/about", label: t("admin.about", "About Us"), icon: Info },
        { to: "/admin/services", label: t("admin.services", "Services"), icon: Briefcase },
        { to: "/admin/contact", label: t("admin.contact", "Contact Us"), icon: Phone },
    ];

    return (
        <div className={`admin-shell ${theme}`}>
            {/* Mobile overlay */}
            {sidebarOpen && (
                <div className="admin-overlay" onClick={() => setSidebarOpen(false)} />
            )}

            {/* Sidebar */}
            <aside className={`admin-sidebar ${sidebarOpen ? "open" : ""}`}>
                <div className="admin-sidebar-header">
                    <span className="admin-logo">CMS Panel</span>
                    <button className="admin-close-btn" onClick={() => setSidebarOpen(false)}>
                        <X size={18} />
                    </button>
                </div>

                <nav className="admin-nav">
                    {navItems.map(({ to, label, icon: Icon }) => (
                        <NavLink
                            key={to}
                            to={to}
                            className={({ isActive }) =>
                                `admin-nav-link ${isActive ? "active" : ""}`
                            }
                            onClick={() => setSidebarOpen(false)}
                        >
                            <Icon size={18} />
                            <span>{label}</span>
                        </NavLink>
                    ))}
                </nav>

                <button className="admin-logout-btn" onClick={handleLogout}>
                    <LogOut size={18} />
                    <span>{t("logout", "Logout")}</span>
                </button>
            </aside>

            {/* Main content */}
            <div className="admin-main">
                <header className="admin-topbar">
                    <div className="admin-topbar-left">
                        <button className="admin-menu-btn" onClick={() => setSidebarOpen(true)}>
                            <Menu size={22} />
                        </button>
                        <span className="admin-topbar-title">
                            {t("admin.panel_title", "Content Management")}
                        </span>
                    </div>

                    <div className="admin-topbar-actions">
                        {/* Language Switcher */}
                        <button
                            className="admin-control-btn admin-lang-btn"
                            onClick={toggleLanguage}
                            title="Switch Language"
                        >
                            <Languages size={18} />
                            <span>{i18n.language === "ar" ? "English" : "العربية"}</span>
                        </button>

                        {/* Theme Toggle */}
                        <button
                            className="admin-control-btn"
                            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                            title="Toggle Theme"
                        >
                            {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
                        </button>
                    </div>
                </header>

                <main className="admin-content">
                    <Outlet />
                </main>
            </div>
        </div>
    );
};

export default AdminLayout;

