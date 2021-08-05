import React, { useContext } from "react";
import { Menu, Dropdown } from "antd";
import { DownOutlined } from "@ant-design/icons";
import { Button, Avatar, Row, Col } from "antd";
import Container from "../Layout/Container";
import { UserContext } from "../../context/UserContext";
import authService from "../../service/authService";
import image from "../../helpers/image";
import { NavLink } from "react-router-dom";
import classes from "./Nav.module.scss";

export default function Nav() {
  const { user, logout } = useContext(UserContext);

  const menu = () => (
    <Menu style={{ textAlign: "center" }}>
      <Menu.Item>
        <span>{user.username}</span>
      </Menu.Item>
      <Menu.Divider />

      <Menu.Item onClick={logout} danger>
        Logout
      </Menu.Item>
    </Menu>
  );

  function handelLogin() {
    authService.creatRequestToken().then((data) => {
      window.location = `https://www.themoviedb.org/authenticate/${
        data.request_token
      }?redirect_to=${import.meta.env.VITE_REDIRECT_URL}`;
    });
  }

  return (
    <nav className={classes.root}>
      <Container>
        {import.meta.env.VITE_REDIRECT_URL}
        <Row justify="space-between">
          <Col>
            <ul>
              <li className={classes.homee}>
                <NavLink exact activeClassName={classes.active} to="/">
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink activeClassName={classes.active} to="/movies">
                  movies
                </NavLink>
              </li>
              <li>
                <NavLink activeClassName={classes.active} to="/tv-shows">
                  Tv Shows
                </NavLink>
              </li>
              <li>
                <NavLink activeClassName={classes.active} to="/celebrities">
                  Celebrities
                </NavLink>
              </li>
            </ul>
          </Col>
          <Col>
            {user ? (
              <Dropdown overlay={menu()} placement="bottomCenter">
                <Avatar
                  size="large"
                  src={image(user?.avatar?.tmdb?.avatar_path, "w780")}
                />
              </Dropdown>
            ) : (
              <Button onClick={handelLogin}>Login</Button>
            )}
          </Col>
        </Row>
      </Container>
    </nav>
  );
}
