/**
 * Article data Interface
 * @id number
 * @title string
 * @imageUrl string
 * @summary string
 * @publishedAt string
 */
export interface IArticleData {
  regstr?: any; 
  id?: number;
  title: string;
  imageUrl?: string;
  summary: string;
  publishedAt?: string;
}