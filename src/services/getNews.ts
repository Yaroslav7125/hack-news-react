import axios from 'axios';
import useSWR from 'swr';

const fetcher = (url: string) => {
  return axios.get(url).then((res) => res.data);
};

export function useNews(pageNumber: number | string) {
  const { data } = useSWR(`https://api.hnpwa.com/v0/news/${pageNumber}.json`, fetcher);
  return data;
}

////////     без useSWR

export async function fetchAllNews(pageNumber: number | string | undefined) {
  return await axios.get(`https://api.hnpwa.com/v0/news/${pageNumber}.json`);
}

export async function fetchNewsItem(itemId: number | string | undefined) {
  return await axios.get(`https://api.hnpwa.com/v0/item/${itemId}.json`);
}
