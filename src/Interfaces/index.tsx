/**
 * Article data Interface
 * @id number
 * @title string
 * @imageUrl string
 * @summary string
 * @publishedAt string
 */
export interface IArticleData {
  regstr?: string | null; 
  id?: number;
  title: string;
  imageUrl?: string;
  summary: string;
  publishedAt?: string;
}