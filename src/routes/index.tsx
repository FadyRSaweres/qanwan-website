import { Route, Routes } from "react-router-dom";
import PublicRoutes from "./PublicRoutes";

// Public pages
import About from "@/pages/about/About";
import Services from "@/pages/Services";
import Contact from "@/pages/Contact";

// Admin layout + pages
// import AdminLayout from "@/components/admin/AdminLayout";
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
import { PartnersPage } from "@/pages/partners";

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
                <Route path="/partners" element={<PartnersPage />} />
            </Route>
        </Route>

        {/* ─── Login (public, no site layout) ────────────────── */}
        {/* <Route path="/login" element={<Login />} /> */}


        {/* ─── Fallback ──────────────────────────────────────── */}
        <Route path="*" element={<UnderDevelopmentPage />} />
    </Routes>
);

export default AppRoutes;
