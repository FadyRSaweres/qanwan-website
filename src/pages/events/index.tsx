import { useState } from "react";
import { useTranslation } from "react-i18next";
import { EventCard } from "./eventCard";
import { EventDetailsModal } from "./eventDetailsModal";
import type { EventItem } from "./types";
import { TitleSection } from "@/components/TitleSection";

export const MOCK_EVENTS: EventItem[] = [
  {
    id: "1",
    eventTitle: "Global Tech Summit 2024",
    eventTag: "مشارك وعارض",
    eventDate: "2024-05-20",
    eventDescription: "Join us at the biggest tech summit in the region where we showcase our latest AI products and solutions.",
    eventImages: ["https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&q=80&w=1000"],
    eventExternalLink: "https://example.com/event"
  },
  {
    id: "2",
    eventTitle: "Future of Finance Conference",
    eventTag: "مشاركة كمتحدث رئيسي",
    eventDate: "2024-06-15",
    eventDescription: "Our CEO will be delivering a keynote speech on the future of technology and decentralized finance.",
    eventImages: ["https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&q=80&w=1000"]
  },
  {
    id: "3",
    eventTitle: "Future of Finance Conference",
    eventTag: "مشاركة كمتحدث رئيسي",
    eventDate: "2024-06-15",
    eventDescription: "Our CEO will be delivering a keynote speech on the future of technology and decentralized finance.",
    eventImages: ["https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&q=80&w=1000"],
  }
];

/**
 * "الفعاليات" — Events page.
 * Same data pattern as News, but rendered as a 3-column grid,
 * and clicking a card opens a modal instead of routing to a new page.
 */
export default function EventsListPage() {
  const { t } = useTranslation();
  const [activeEvent, setActiveEvent] = useState<EventItem | null>(null);

  return (
    <section className="py-16 md:py-28">
      <div className="container px-4 sm:px-6">
        <TitleSection
          className="mb-10 sm:mb-14"
          title={t("events.pageTitle")}
          subTitle={t("events.pageSubtitle")}
        />

        {MOCK_EVENTS.length === 0 ? (
          <div className="rounded-2xl border border-border bg-card p-10 text-center text-muted-foreground">
            {t("events.emptyState")}
          </div>
        ) : (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {MOCK_EVENTS.map((event, idx) => (
              <EventCard
                key={event.id}
                event={event}
                index={idx}
                onOpen={setActiveEvent}
              />
            ))}
          </div>
        )}
      </div>

      <EventDetailsModal
        event={activeEvent}
        open={!!activeEvent}
        onOpenChange={(open) => !open && setActiveEvent(null)}
      />
    </section>
  );
}
