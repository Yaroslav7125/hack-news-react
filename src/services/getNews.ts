import axios from 'axios';

export async function fetchAllNews(pageNumber: number | string | undefined) {
  return await axios.get(`https://api.hnpwa.com/v0/news/${pageNumber}.json`);
}

export async function fetchNewsItem(itemId: number | string | undefined) {
  return await axios.get(`https://api.hnpwa.com/v0/item/${itemId}.json`);
}
