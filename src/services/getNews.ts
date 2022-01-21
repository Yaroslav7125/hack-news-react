import { taxios } from '../taxios';

export async function fetchAllNews(pageNumber?: string) {
  if (!pageNumber) return null;

  return await taxios.get('/news/{pageNumber}.json', { params: { pageNumber } });
}

export async function fetchNewsItem(itemId?: string) {
  if (!itemId) return null;

  return await taxios.get('/item/{itemId}.json', { params: { itemId } });
}
