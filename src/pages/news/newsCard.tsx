import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { Linkedin, Twitter, Facebook, Maximize2, ArrowLeft } from "lucide-react";
import { motion } from "framer-motion";
import type { NewsItem } from "./types";

interface NewsCardProps {
  news: NewsItem;
}

export function NewsCard({ news }: NewsCardProps) {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const goToDetails = () => navigate(`/news/${news.id}`);
  const thumbnail = news.newsImages?.[0];

  const shareLinks = {
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
      news.newsExternalLink ?? window.location.origin + `/news/${news.id}`
    )}`,
    twitter: `https://twitter.com/intent/tweet?url=${encodeURIComponent(
      news.newsExternalLink ?? window.location.origin + `/news/${news.id}`
    )}&text=${encodeURIComponent(news.newsTitle)}`,
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
      news.newsExternalLink ?? window.location.origin + `/news/${news.id}`
    )}`,
  };

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      viewport={{ once: true }}
      className="flex flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-soft transition-smooth hover:shadow-card sm:flex-row"
    >
      {/* text side */}
      <div className="flex flex-1 flex-col p-6 sm:p-8">
        <span className="text-sm text-muted-foreground">{news.newsDate}</span>

        <button
          type="button"
          onClick={goToDetails}
          className="mt-2 text-start text-lg font-bold leading-snug text-primary-900 hover:underline sm:text-xl"
        >
          {news.newsTitle}
        </button>

        <p className="mt-3 line-clamp-3 text-sm leading-relaxed text-muted-foreground sm:text-base">
          {news.newsSubtitle}
        </p>

        <div className="mt-6 flex flex-wrap items-center justify-between gap-4 border-t border-border pt-4">
          <div className="flex items-center gap-3">
            <span className="text-sm text-muted-foreground">
              {t("news.shareLabel")}
            </span>
            <a
              href={shareLinks.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="text-muted-foreground transition-smooth hover:text-primary-600"
            >
              <Linkedin className="h-4 w-4" />
            </a>
            <a
              href={shareLinks.twitter}
              target="_blank"
              rel="noreferrer"
              aria-label="X"
              className="text-muted-foreground transition-smooth hover:text-primary-600"
            >
              <Twitter className="h-4 w-4" />
            </a>
            <a
              href={shareLinks.facebook}
              target="_blank"
              rel="noreferrer"
              aria-label="Facebook"
              className="text-muted-foreground transition-smooth hover:text-primary-600"
            >
              <Facebook className="h-4 w-4" />
            </a>
          </div>

          <div className="flex items-center gap-4">
            {thumbnail && (
              <button
                type="button"
                onClick={goToDetails}
                className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-primary-600"
              >
                <Maximize2 className="h-4 w-4" />
                {t("news.enlargeCta")}
              </button>
            )}
            <button
              type="button"
              onClick={goToDetails}
              className="flex items-center gap-1.5 text-sm font-medium text-primary-600 hover:underline"
            >
              {t("news.readMoreCta")}
              <ArrowLeft className="h-4 w-4 rtl:rotate-180" />
            </button>
          </div>
        </div>
      </div>

      {/* image side */}
      {thumbnail && (
        <button
          type="button"
          onClick={goToDetails}
          className="relative block h-56 w-full shrink-0 sm:h-auto sm:w-64 md:w-80"
        >
          <img
            src={thumbnail}
            alt={news.newsTitle}
            className="h-full w-full object-cover"
            loading="lazy"
          />
        </button>
      )}
    </motion.article>
  );
}
