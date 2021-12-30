const API_KEY = "dd8955cb06f7a0763e791982bada205b";
const BASE_URL = `https://api.themoviedb.org/3/`;

interface BaseResponse {
  page: number;
  total_results: number;
  total_pages: number;
}
export interface MovieResponse extends BaseResponse {
  results: Movie[];
}
export interface Movie {
  adult: boolean;
  backdrop_path: string | null;
  genre_ids: object[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string | null;
  popularity: number;
  poster_path: string | null;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

export interface TV {
  name: string;
  original_name: string;
  origin_country: string[];
  vote_count: number;
  backdrop_path: string | null;
  vote_average: number;
  genre_ids: number[];
  id: number;
  original_language: string;
  overview: string;
  poster_path: string | null;
  first_air_date: string;
  popularity: number;
}

export const moviesApi = {
  trending: ({ pageParam }) =>
    fetch(
      `${BASE_URL}trending/movie/week?api_key=${API_KEY}&language=en-US&page=${
        typeof pageParam !== "number" ? "1" : pageParam
      }&region=KR`
    ).then((res) => res.json()),
  upcoming: ({ pageParam }) =>
    fetch(
      `${BASE_URL}movie/upcoming?api_key=${API_KEY}&language=en-US&page=${pageParam}&region=KR`
    ).then((res) => res.json()),
  nowPlaying: () =>
    fetch(
      `${BASE_URL}movie/now_playing?api_key=${API_KEY}&language=en-US&page=1&region=KR`
    ).then((res) => res.json()),
  search: ({ queryKey }) => {
    const [, query] = queryKey;
    return fetch(
      `${BASE_URL}search/movie?api_key=${API_KEY}&language=en-US&query=${query}&page=1&region=KR`
    ).then((res) => res.json());
  },
  detail: ({ queryKey }) => {
    const [, id] = queryKey;
    return fetch(
      `${BASE_URL}movie/${id}?api_key=${API_KEY}&append_to_response=videos,images`
    ).then((res) => res.json());
  },
};

export const tvApi = {
  trending: ({ pageParam }) =>
    fetch(
      `${BASE_URL}trending/tv/week?api_key=${API_KEY}&language=en-US&page=${
        typeof pageParam !== "number" ? "1" : pageParam
      }&region=KR`
    ).then((res) => res.json()),
  airingToday: ({ pageParam }) =>
    fetch(
      `${BASE_URL}tv/airing_today?api_key=${API_KEY}&language=en-US&page=${
        typeof pageParam !== "number" ? "1" : pageParam
      }&region=KR`
    ).then((res) => res.json()),
  topRated: ({ pageParam }) =>
    fetch(
      `${BASE_URL}tv/top_rated?api_key=${API_KEY}&language=en-US&page=${
        typeof pageParam !== "number" ? "1" : pageParam
      }&region=KR`
    ).then((res) => res.json()),
  search: ({ queryKey }) => {
    const [, query] = queryKey;
    return fetch(
      `${BASE_URL}search/tv?api_key=${API_KEY}&language=en-US&query=${query}&page=1&region=KR`
    ).then((res) => res.json());
  },
  detail: ({ queryKey }) => {
    const [, id] = queryKey;
    return fetch(
      `${BASE_URL}tv/${id}?api_key=${API_KEY}&append_to_response=videos,images`
    ).then((res) => res.json());
  },
};
