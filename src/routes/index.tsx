import { Route, Routes, Navigate } from "react-router-dom";
import PublicRoutes from "./PublicRoutes";
import ProtectedRoutes from "./ProtectedRoutes";

// Public pages
import Index from "@/pages/home";
import About from "@/pages/about/About";
import Services from "@/pages/Services";
import Contact from "@/pages/Contact";
import NotFound from "@/pages/NotFound";

// Admin layout + pages
import AdminLayout from "@/components/admin/AdminLayout";
import Home from "@/pages/home";
import Mainlayout from "@/layout/mainLayout";
import InvestmentModel from "@/pages/investModel/investment-model";
import Investments from "@/pages/investments";
import UnderDevelopmentPage from "@/components/under-dev";
import NewsListPage from "@/pages/news";
import NewsDetailsPage from "@/pages/news/newsDetailsPage";
import EventsListPage from "@/pages/events";
import Community from "@/pages/Community";
import InitiativePage from "@/pages/initiative";

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
                <Route path="/investment-model" element={<InvestmentModel />} />
                <Route path="/investments" element={<Investments />} />
                <Route path="/news" element={<NewsListPage />} />
                <Route path="/news/:id" element={<NewsDetailsPage />} />
                <Route path="/events" element={<EventsListPage />} />
                <Route path="/community" element={<Community />} />
                <Route path="/initiatives" element={<InitiativePage />} />
            </Route>
        </Route>

        {/* ─── Login (public, no site layout) ────────────────── */}
        {/* <Route path="/login" element={<Login />} /> */}

        {/* ─── Protected Routes ──────────────────────────────── */}
        <Route element={<ProtectedRoutes />}>
            <Route path="/admin" element={<AdminLayout />}>
                <Route index element={<Navigate to="/admin/home" replace />} />
                {/* <Route path="home" element={<HomeAdmin />} />
                <Route path="about" element={<AboutAdmin />} />
                <Route path="services" element={<ServicesAdmin />} />
                <Route path="contact" element={<ContactAdmin />} /> */}
            </Route>
        </Route>

        {/* ─── Fallback ──────────────────────────────────────── */}
        <Route path="*" element={<UnderDevelopmentPage />} />
    </Routes>
);

export default AppRoutes;
