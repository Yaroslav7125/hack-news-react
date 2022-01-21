export interface News {
  // новости
  id: number;
  title: string;
  points?: number | null;
  user?: string | null;
  time_ago: string;
  url?: string;
  domain?: string;
}

export interface ItemComment {
  id: number;
  user: string | null;
  time: number;
  title?: string;
  time_ago: string;
  content: string;
  deleted?: boolean;
  dead?: boolean;
  url?: string;
  domain?: string;
  comments: ItemComment[]; // Comments are items too
  comments_count: number;
}

export interface HackNews {
  version: '1';
  routes: {
    '/news/{pageNumber}.json': {
      GET: {
        body?: FormData;
        params: {
          pageNumber: string;
        };
        response: News[];
      };
    };

    '/item/{itemId}.json': {
      GET: {
        body?: FormData;
        params: {
          itemId: string;
        };
        response: ItemComment;
      };
    };
  };
}
