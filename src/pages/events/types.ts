/**
 * A single event, as returned by the BE/CMS.
 */
export interface EventItem {
  id: string | number;
  eventTitle: string;
  /** Participation role/tag shown in gold, e.g. "مشارك وعارض" / "مشاركة كمتحدث رئيسي" */
  eventTag: string;
  eventDate: string; // ISO date string, e.g. "2024-05-20"
  eventDescription: string;
  eventImages: string[];
  eventExternalLink?: string;
}
