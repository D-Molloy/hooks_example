import React from "react";
import { Link } from "react-router-dom";
import { Button } from "antd";
const style = {
  navContainer: {
    display: "flex",
    justifyContent: "space-around",
    flexWrap: "wrap"
  },
  link: {
    margin: "10px auto"
  }
};

export default function NavBar() {
  return (
    <div style={style.navContainer}>
      <Link to="/state/old" style={style.link}>
        <Button type="primary" size="large">
          Updating State (OLD)
        </Button>
      </Link>
      <Link to="/state/new" style={style.link}>
        <Button type="primary" size="large">
          Updating State (NEW)
        </Button>
      </Link>
      <Link to="/lifecycle/old" style={style.link}>
        <Button type="primary" size="large">
          Lifecycle Management (OLD)
        </Button>
      </Link>
      <Link to="/lifecycle/new" style={style.link}>
        <Button type="primary" size="large">
          Lifecycle Management (NEW)
        </Button>
      </Link>
    </div>
  );
}
