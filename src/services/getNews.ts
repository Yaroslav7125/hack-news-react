import axios from 'axios';
// import useSWR from 'swr';
//
// const fetcher = (url: string) => {
//   return axios.get(url).then((res) => res.data);
// };
//
// export function useNews(pageNumber: number) {
//   const { data } = useSWR(`https://api.hnpwa.com/v0/news/${pageNumber}.json`, fetcher);
//   return data;
// }

////////     без useSWR

export async function fetchData(pageNumber: number) {
  return await axios.get(`https://api.hnpwa.com/v0/news/${pageNumber}.json`);
}
