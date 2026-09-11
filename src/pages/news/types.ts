/**
 * A single news item, as returned by the BE/CMS.
 * Extend freely (e.g. `content`/`body`) once the BE exposes richer fields
 * for the details page.
 */
export interface NewsItem {
  id: number;
  title_ar: string;
  title_en: string;
  description_ar: string;
  description_en: string;
  image: string;
  date: string; // ISO 8601 date string, e.g. "2026-09-10T00:00:00.000000Z"
  created_at: string; // ISO 8601 date string
  updated_at: string; // ISO 8601 date string
  image_url: string;
}