import React, { useContext } from "react";
import { UserContext } from "../context/UserContext";
import Container from "../component/Layout/Container";

export default function Profile() {
  const { user } = useContext(UserContext);
  return <Container>{user.username}</Container>;
}
