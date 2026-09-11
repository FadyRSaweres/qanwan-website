import { useTranslation } from "react-i18next";
import { Linkedin, Twitter, Facebook } from "lucide-react";
import { motion } from "framer-motion";
import type { EventItem } from "./types";

interface EventCardProps {
  event: EventItem;
  onOpen: (event: EventItem) => void;
  index?: number;
}

export function EventCard({ event, onOpen, index = 0 }: EventCardProps) {
  const { t } = useTranslation();
  const thumbnail = event.eventImages?.[0];

  const shareUrl = event.eventExternalLink ?? window.location.href;
  const shareLinks = {
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`,
    twitter: `https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(event.eventTitle)}`,
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`,
  };

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      viewport={{ once: true }}
      className="flex flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-soft transition-smooth hover:-translate-y-1 hover:shadow-card"
    >
      <button
        type="button"
        onClick={() => onOpen(event)}
        className="block h-44 w-full overflow-hidden sm:h-48"
      >
        {thumbnail ? (
          <img
            src={thumbnail}
            alt={event.eventTitle}
            className="h-full w-full object-cover transition-smooth hover:scale-105"
            loading="lazy"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center bg-secondary-50 text-sm text-muted-foreground">
            {event.eventTitle}
          </div>
        )}
      </button>

      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <span className="text-sm text-muted-foreground">{event.eventDate}</span>

        <button
          type="button"
          onClick={() => onOpen(event)}
          className="mt-1.5 text-start text-base font-bold leading-snug text-primary-900 hover:underline sm:text-lg"
        >
          {event.eventTitle}
        </button>

        <span className="mt-1.5 text-sm font-medium text-secondary-600">
          {event.eventTag}
        </span>

        <p className="mt-3 line-clamp-3 flex-1 text-sm leading-relaxed text-muted-foreground">
          {event.eventDescription}
        </p>

        <div className="mt-4 flex items-center gap-3 border-t border-border pt-4">
          <span className="text-sm text-muted-foreground">
            {t("events.shareLabel")}
          </span>
          <a
            href={shareLinks.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            onClick={(e) => e.stopPropagation()}
            className="text-muted-foreground transition-smooth hover:text-primary-600"
          >
            <Linkedin className="h-4 w-4" />
          </a>
          <a
            href={shareLinks.twitter}
            target="_blank"
            rel="noreferrer"
            aria-label="X"
            onClick={(e) => e.stopPropagation()}
            className="text-muted-foreground transition-smooth hover:text-primary-600"
          >
            <Twitter className="h-4 w-4" />
          </a>
          <a
            href={shareLinks.facebook}
            target="_blank"
            rel="noreferrer"
            aria-label="Facebook"
            onClick={(e) => e.stopPropagation()}
            className="text-muted-foreground transition-smooth hover:text-primary-600"
          >
            <Facebook className="h-4 w-4" />
          </a>
        </div>
      </div>
    </motion.article>
  );
}
