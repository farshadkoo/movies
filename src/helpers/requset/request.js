function URL(url) {
  if (typeof url === "string") {
    return url;
  }
  const session_id = localStorage.getItem("session_id");
  const query = {
    api_key: `7416b3659b60cf9465009bb64d7ad28c`,
    ...(session_id && { session_id }),
    ...url.query,
  };

  const queryParams = new URLSearchParams(query).toString();

  return `https://api.themoviedb.org/3/${url.path}?${queryParams}`;
}

function options(body, method) {
  return {
    method,
    headers: {
      "Content-type": "application/json",
    },
    ...(body && { body: JSON.stringify(body) }),
  };
}

function http(url, body, method) {
  return new Promise((resolve, reject) => {
    fetch(URL(url), options(body, method))
      .then((r) => r.json())
      .then(resolve)
      .catch(reject);
  });
}

const request = {
  get: (url) => http(url, null, "GET"),
  post: (url, body) => http(url, body, "POST"),
};

export default request;
