/**
 * A single news item, as returned by the BE/CMS.
 * Extend freely (e.g. `content`/`body`) once the BE exposes richer fields
 * for the details page.
 */
export interface NewsItem {
  id: string | number;
  newsTitle: string;
  newsSubtitle: string;
  newsDate: string; // ISO date string, e.g. "2026-05-06"
  newsExternalLink?: string;
  newsImages: string[];
  /** Optional full body/content for the details page (rich text or plain paragraphs) */
  newsContent?: string;
}
