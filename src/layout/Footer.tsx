import { useState } from "react";
import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Linkedin, Twitter, Facebook, Send } from "lucide-react";
import { logo64 } from "@/assets/qanwan-logo";
import { useTranslation } from "react-i18next";
import { mockCompanyContact } from "@/pages/mockData/contact";

const Footer = () => {
  const { t, i18n } = useTranslation();
  const isRtl = i18n.language === "ar";

  const [email, setEmail] = useState("");

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: wire up to your newsletter endpoint
    console.log("subscribe:", email);
    setEmail("");
  };

  const aboutLinks = [
    { to: "/about", label: t("footer.qanwan") },
    { to: "/investment-model", label: t("footer.investmentModel") },
    { to: "/investments", label: t("footer.ourInvestments") },
    { to: "/success-partners", label: t("footer.successPartners") },
    { to: "/performance-indicators", label: t("footer.performanceIndicators") },
  ];

  const mediaCenterLinks = [
    { to: "/news", label: t("footer.news") },
    { to: "/events", label: t("footer.events") },
  ];

  const initiativeLinks = [
    { to: "/community", label: t("footer.qanwanCommunity") },
    { to: "/initiatives", label: t("footer.nationalInitiative") },
  ];

  return (
    <footer className="border-t-4 border-secondary-500 bg-primary-800 dark:bg-gray-900">
      <div className="container py-12 sm:py-14">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-5">
          {/* Logo / description / social — rightmost in RTL */}
          <div className="lg:order-1">
            <Link to="/" className="inline-flex items-center gap-2.5">
              <img src={logo64} alt="Qanwan" className="h-1/3 w-auto object-contain dark:invert" />
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-white">
              {isRtl ? mockCompanyContact?.brief_ar : mockCompanyContact?.brief_en}
            </p>
            <div className="mt-5 flex gap-3">
              {[Linkedin, Twitter, Facebook].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  aria-label="Social link"
                  className="rounded-full border border-primary-600 p-2 text-primary-200 transition-smooth hover:border-secondary-500 hover:text-secondary-500"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* About the company */}
          <div className="lg:order-1">
            <h4 className="mb-4 text-sm font-bold text-secondary-500">
              {t("footer.aboutCompanyTitle")}
            </h4>
            <ul className="space-y-2.5 text-sm">
              {aboutLinks.map((l) => (
                <li key={l.to}>
                  <Link
                    to={l.to}
                    className="text-white transition-smooth hover:text-white"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Qanwan Academy */}
            <div className="mt-8">
              <h4 className="mb-3 text-sm font-bold text-secondary-500">
                {t("footer.academyTitle")}
              </h4>
              <Link
                to="/academy"
                className="text-sm text-white transition-smooth hover:text-white"
              >
                {t("footer.learnMore")}
              </Link>
            </div>
          </div>

          {/* Media Center + Contact */}
          <div className="lg:order-3">
            <h4 className="mb-4 text-sm font-bold text-secondary-500">
              {t("footer.mediaCenterTitle")}
            </h4>
            <ul className="space-y-2.5 text-sm">
              {mediaCenterLinks.map((l) => (
                <li key={l.to}>
                  <Link
                    to={l.to}
                    className="text-white transition-smooth hover:text-white"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Contact us */}
            <div className="mt-8">
              <h4 className="mb-3 text-sm font-bold text-secondary-500">
                {t("footer.contactTitle")}
              </h4>
              <ul className="space-y-3 text-sm text-white">
                <li className="flex items-start gap-2.5">
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-secondary-500" />
                  <span>{isRtl ? mockCompanyContact?.address_ar : mockCompanyContact?.address_en}</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Phone className="mt-0.5 h-4 w-4 shrink-0 text-secondary-500" />
                  <a href={`tel:${mockCompanyContact?.mobile}`} className="transition-smooth hover:text-white">
                    {mockCompanyContact?.mobile}
                  </a>
                </li>
                <li className="flex items-start gap-2.5">
                  <Mail className="mt-0.5 h-4 w-4 shrink-0 text-secondary-500" />
                  <a
                    href={`mailto:${mockCompanyContact?.email}`}
                    className="transition-smooth hover:text-white"
                  >
                    {mockCompanyContact?.email}
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Initiatives */}
          <div className="lg:order-2">
            <h4 className="mb-4 text-sm font-bold text-secondary-500">
              {t("footer.initiativesTitle")}
            </h4>
            <ul className="space-y-2.5 text-sm">
              {initiativeLinks.map((l) => (
                <li key={l.to}>
                  <Link
                    to={l.to}
                    className="text-white transition-smooth hover:text-white"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter — leftmost in RTL */}
          <div className="lg:order-5">
            <h4 className="mb-4 text-sm font-bold text-secondary-500">
              {t("footer.newsletterTitle")}
            </h4>
            <p className="text-sm leading-relaxed text-white">
              {t("footer.newsletterText")}
            </p>
            <form onSubmit={handleSubscribe} className="mt-4 flex overflow-hidden rounded-lg">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder={t("footer.emailPlaceholder")}
                className="w-full min-w-0 bg-white px-4 py-2.5 text-sm text-white placeholder:text-muted-foreground focus:outline-none"
              />
              <button
                type="submit"
                aria-label={t("footer.subscribeCta")}
                className="flex shrink-0 items-center justify-center bg-secondary-500 px-4 text-primary-900 transition-smooth hover:bg-secondary-600"
              >
                <Send className="h-4 w-4 rtl:-scale-x-100" />
              </button>
            </form>
          </div>
        </div>

        <div className="mt-12 border-t border-primary-600 pt-6 text-center text-xs text-primary-200">
          <p>{t("footer.rights", { year: new Date().getFullYear() })}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
