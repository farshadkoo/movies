import useFetch from "./useFetch";

export default function useMovieDB(endpoint, query) {
  return useFetch({
    url: `https://api.themoviedb.org/3/${endpoint}`,
    query: {
      api_key: "7416b3659b60cf9465009bb64d7ad28c",
      language: "en-us",
      ...query,
    },
  });
}
