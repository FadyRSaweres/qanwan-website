import { useState } from "react";
import { useTranslation } from "react-i18next";
import { EventCard } from "./eventCard";
import { EventDetailsModal } from "./eventDetailsModal";
import { TitleSection } from "@/components/TitleSection";
import { EventItem, mockEventItems } from "../mockData/events";


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

        {mockEventItems.length === 0 ? (
          <div className="rounded-2xl border border-border bg-card p-10 text-center text-muted-foreground">
            {t("events.emptyState")}
          </div>
        ) : (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {mockEventItems.map((event, idx) => (
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
