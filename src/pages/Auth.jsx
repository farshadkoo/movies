import React, { useContext, useEffect } from "react";
import { useHistory, useLocation } from "react-router-dom";
import Container from "../component/Layout/Container";
import { UserContext } from "../context/UserContext";
import authService from "../service/authService";

export default function Auth() {
  const { setSessionId } = useContext(UserContext);
  const location = useLocation();
  const history = useHistory();
  const requstToken = new URLSearchParams(location.search).get("request_token");

  useEffect(() => {
    if (requstToken) {
      authService.createSession(requstToken).then((data) => {
        setSessionId(data.session_id);
        history.replace("/");
      });
    }
  }, []);

  return (
    <Container>
      <div style={{ color: "white" }}>
        <h1 style={{ color: "white" }}>ssssssssssss</h1>
      </div>
    </Container>
  );
}
