import { Route, Routes, Navigate } from "react-router-dom";
import PublicRoutes from "./PublicRoutes";
import ProtectedRoutes from "./ProtectedRoutes";

// Public pages
import Index from "@/pages/home";
import About from "@/pages/About";
import Services from "@/pages/Services";
import Contact from "@/pages/Contact";
import NotFound from "@/pages/NotFound";
import Login from "@/pages/admin/auth/Login";

// Admin layout + pages
import AdminLayout from "@/components/admin/AdminLayout";
import HomeAdmin from "@/pages/admin/pages/HomeAdmin";
import AboutAdmin from "@/pages/admin/pages/AboutAdmin";
import ServicesAdmin from "@/pages/admin/pages/ServicesAdmin";
import ContactAdmin from "@/pages/admin/pages/ContactAdmin";
import Home from "@/pages/home";
import Mainlayout from "@/layout/mainLayout";

/**
 * AppRoutes
 *
 * Route structure:
 *  PUBLIC  → wrapped by <PublicRoutes> (no token required)
 *    /            → Index
 *    /about       → About
 *    /services    → Services
 *    /contact     → Contact
 *    /login        → Login
 *
 *  PROTECTED → wrapped by <ProtectedRoutes> (token required, else → /login)
 *    /admin       → redirects to /admin/home
 *    /admin/home  → HomeAdmin
 *    /admin/about → AboutAdmin
 *    /admin/services → ServicesAdmin
 *    /admin/contact  → ContactAdmin
 *
 *  FALLBACK
 *    *            → NotFound
 */
const AppRoutes = () => (
    <Routes>
        {/* ─── Public Routes ─────────────────────────────────── */}
        <Route element={<Mainlayout />}>
            <Route element={<PublicRoutes />}>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/services" element={<Services />} />
                <Route path="/contact" element={<Contact />} />
            </Route>
        </Route>

        {/* ─── Login (public, no site layout) ────────────────── */}
        <Route path="/login" element={<Login />} />

        {/* ─── Protected Routes ──────────────────────────────── */}
        <Route element={<ProtectedRoutes />}>
            <Route path="/admin" element={<AdminLayout />}>
                <Route index element={<Navigate to="/admin/home" replace />} />
                <Route path="home" element={<HomeAdmin />} />
                <Route path="about" element={<AboutAdmin />} />
                <Route path="services" element={<ServicesAdmin />} />
                <Route path="contact" element={<ContactAdmin />} />
            </Route>
        </Route>

        {/* ─── Fallback ──────────────────────────────────────── */}
        <Route path="*" element={<NotFound />} />
    </Routes>
);

export default AppRoutes;
