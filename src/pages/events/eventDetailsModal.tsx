import { useTranslation } from "react-i18next";
import { Linkedin, Twitter, Facebook, ExternalLink } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { EventItem } from "../mockData/events";

interface EventDetailsModalProps {
  event: EventItem | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function EventDetailsModal({ event, open, onOpenChange }: EventDetailsModalProps) {
  const { t, i18n } = useTranslation();
  const isRtl = i18n.language === "ar";

  if (!event) return null;

  const thumbnail = event?.image_url;
  const shareUrl = "";
  const shareLinks = {
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`,
    twitter: `https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(event.title_ar)}`,
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`,
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-xl gap-0 overflow-hidden p-0 sm:max-w-2xl">
        <DialogHeader className="border-b border-border px-6 py-4">
          <DialogTitle className="text-base font-bold text-primary-900">
            {isRtl ? event?.title_ar : event?.title_en}
          </DialogTitle>
        </DialogHeader>

        <div className="max-h-[75vh] overflow-y-auto">
          {thumbnail && (
            <img
              src={thumbnail}
              alt={isRtl ? event?.title_ar : event?.title_en}
              className="h-56 w-full object-cover sm:h-72"
            />
          )}

          <div className="p-6">
            <span className="text-sm text-muted-foreground">{event.date}</span>
            <h3 className="mt-1 text-lg font-bold text-primary-900">
              {isRtl ? event?.title_ar : event?.title_en}
            </h3>
            <span className="mt-1 block text-sm font-medium text-secondary-600">
              {isRtl ? event?.description_ar : event?.description_en}
            </span>

            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              {isRtl ? event?.description_ar : event?.description_en}
            </p>

            {/* {event.eventExternalLink && (
              <a
                href={event.eventExternalLink}
                target="_blank"
                rel="noreferrer"
                className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-primary-600 hover:underline"
              >
                <ExternalLink className="h-4 w-4" />
                {t("events.externalLinkCta")}
              </a>
            )} */}

            {/* {event.image && event.eventImages.length > 1 && (
              <div className="mt-5 grid grid-cols-3 gap-2 sm:grid-cols-4">
                {event.eventImages.slice(1).map((src, i) => (
                  <img
                    key={i}
                    src={src}
                    alt={`${event.eventTitle} ${i + 2}`}
                    className="h-20 w-full rounded-lg object-cover"
                    loading="lazy"
                  />
                ))}
              </div>
            )} */}

            <div className="mt-6 flex items-center gap-3 border-t border-border pt-4">
              <span className="text-sm text-muted-foreground">
                {t("events.shareLabel")}
              </span>
              <a
                href={shareLinks.linkedin}
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="text-muted-foreground hover:text-primary-600"
              >
                <Linkedin className="h-4 w-4" />
              </a>
              <a
                href={shareLinks.twitter}
                target="_blank"
                rel="noreferrer"
                aria-label="X"
                className="text-muted-foreground hover:text-primary-600"
              >
                <Twitter className="h-4 w-4" />
              </a>
              <a
                href={shareLinks.facebook}
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
      </DialogContent>
    </Dialog>
  );
}
