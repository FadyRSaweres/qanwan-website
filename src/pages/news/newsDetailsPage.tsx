import { useParams, Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { ArrowLeft, Linkedin, Twitter, Facebook, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";
import { mockNewsItems } from ".";

export default function NewsDetailsPage() {
  const { id } = useParams<{ id: string }>();
  const { t } = useTranslation();

  const item = mockNewsItems.find((n) => String(n.id) === id) ?? null;

  if (!item) {
    return (
      <div className="container px-4 py-24 text-center sm:px-6">
        <p className="text-lg font-semibold text-foreground">
          {t("news.notFound")}
        </p>
        <Link
          to="/news"
          className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-primary-600 hover:underline"
        >
          <ArrowLeft className="h-4 w-4 rtl:rotate-180" />
          {t("news.backToList")}
        </Link>
      </div>
    );
  }

  // const shareUrl = item.newsExternalLink ?? window.location.href;

  return (
    <article className="py-16 md:py-24">
      <div className="container px-4 sm:px-6">
        <div className="mx-auto max-w-3xl">
          <Link
            to="/news"
            className="mb-6 inline-flex items-center gap-1.5 text-sm font-medium text-primary-600 hover:underline"
          >
            <ArrowLeft className="h-4 w-4 rtl:rotate-180" />
            {t("news.backToList")}
          </Link>

          <motion.h1
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="text-2xl font-extrabold tracking-tight text-primary-900 sm:text-3xl"
          >
            {item.title_ar}
          </motion.h1>

          <div className="mt-3 flex items-center gap-2">
            <span className="text-sm text-muted-foreground">{item.date}</span>
            <span className="h-1 w-1 rounded-full bg-secondary-500" />
          </div>

          {item.image && (
            <motion.img
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              src={item.image_url}
              alt={item.image_url}
              className="mt-8 w-full rounded-2xl object-cover shadow-card"
            />
          )}

          {/* {item.newsImages && item.newsImages.length > 1 && (
            <div className="mt-4 grid grid-cols-3 gap-3 sm:grid-cols-4">
              {item.newsImages.slice(1).map((src, i) => (
                <img
                  key={i}
                  src={src}
                  alt={`${item.newsTitle} ${i + 2}`}
                  className="h-24 w-full rounded-lg object-cover"
                  loading="lazy"
                />
              ))}
            </div>
          )} */}

          <div className="prose prose-sm mt-8 max-w-none text-foreground sm:prose-base">
            {item.title_ar && (
              <p className="font-medium text-foreground">{item.description_ar}</p>
            )}
            {item.description_ar && (
              <div className="mt-4 whitespace-pre-line leading-relaxed text-muted-foreground">
                {item.description_ar}
              </div>
            )}
          </div>

          {/* {item.newsExternalLink && (
            <a
              href={item.newsExternalLink}
              target="_blank"
              rel="noreferrer"
              className="mt-8 inline-flex items-center gap-1.5 text-sm font-medium text-primary-600 hover:underline"
            >
              <ExternalLink className="h-4 w-4" />
              {t("news.externalLinkCta")}
            </a>
          )} */}

          <div className="mt-10 flex items-center gap-4 border-t border-border pt-6">
            <span className="text-sm text-muted-foreground">
              {t("news.shareLabel")}
            </span>
            <a
              href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent("shareUrl")}`}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="text-muted-foreground hover:text-primary-600"
            >
              <Linkedin className="h-4 w-4" />
            </a>
            <a
              href={`https://twitter.com/intent/tweet?url=${encodeURIComponent("shareUrl")}&text=${encodeURIComponent(item.title_ar)}`}
              target="_blank"
              rel="noreferrer"
              aria-label="X"
              className="text-muted-foreground hover:text-primary-600"
            >
              <Twitter className="h-4 w-4" />
            </a>
            <a
              href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent("shareUrl")}`}
              target="_blank"
              rel="noreferrer"
              aria-label="Facebook"
              className="text-muted-foreground hover:text-primary-600"
            >
              <Facebook className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </article>
  );
}
