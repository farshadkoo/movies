import request from "../helpers/requset/request";

function creatRequestToken() {
  return request.get({ path: "authentication/token/new" });
}

function createSession(request_token) {
  return request.post(
    { path: `authentication/session/new` },
    { request_token }
  );
}

const userService = {
  creatRequestToken,
  createSession,
};

export default userService;
