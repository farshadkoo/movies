import request from "../helpers/request";

function rate(id, rate) {
  return request.post({ path: `movie/${id}/rating` }, { value: rate });
}

const movieService = {
  rate,
};

export default movieService;
