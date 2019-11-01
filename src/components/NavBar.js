import React from "react";
import { Link } from "react-router-dom";
import { Button } from "antd";

const style = {
  navContainer: {
    display: "flex",
    justifyContent: "center"
  },
  link: {
    margin: "10px"
  }
};

export default function NavBar() {
  return (
    <div style={style.navContainer}>
      <Link to="/" style={style.link}>
        <Button type="primary" size="large">
          Old & Busted <span role="img">💩</span>
        </Button>
      </Link>
      <Link to="/new" style={style.link}>
        <Button type="primary" size="large">
          New Hotness <span role="img">🔥</span>
        </Button>
      </Link>
    </div>
  );
}
