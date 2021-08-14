import { message } from "antd";
import React, { useContext, useEffect } from "react";
import { useHistory, useLocation } from "react-router-dom";
import Container from "../component/Layout/Container";
import { UserContext } from "../context/UserContext";
import accountService from "../service/accountService";
import authService from "../service/authService";

export default function Auth() {
  const { setSessionId } = useContext(UserContext);
  const location = useLocation();
  const history = useHistory();
  const requestToken = new URLSearchParams(location.search).get(
    "request_token"
  );

  useEffect(() => {
    if (requestToken) {
      authService.createSession(requestToken).then((data) => {
        setSessionId(data.session_id);
        history.replace("/");

        accountService.getDetails().then((data) => {
          message.success(
            `${data.name || data.username} Welcome to Watch Movies!`
          );
        });
      });
    }
  }, []);

  return (
    <Container>
      <div style={{ color: "white" }}>
        <h1 style={{ color: "white" }}>Hi</h1>
      </div>
    </Container>
  );
}
