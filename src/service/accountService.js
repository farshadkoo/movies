import request from "../helpers/requset/request";

function getDetails() {
  return request.get({ path: `account` });
}

const accountService = {
  getDetails,
};

export default accountService;
