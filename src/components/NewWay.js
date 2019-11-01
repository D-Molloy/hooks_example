import React, { useEffect, useState } from "react";
import { Input } from "antd";
export default function LifecycleNew() {
  const [deets, setDeets] = useState({ username: "", password: "" });

  useEffect(() => {
    console.log("LifecycleNew mounted!");

    return () => {
      console.log("LifecycleNew unmounted!");
    };
  }, []);

  console.log("LifecycleNew rendered!");

  return (
    <div>
      <h2>Hooks State & Lifecycles</h2>
      <form style={{ width: 300, margin: "auto" }}>
        <Input
          addonBefore="Username"
          type="username"
          name="username"
          value={deets.username}
          placeholder="ManateeTaco"
          onChange={() => {}}
        />
        <br />
        <Input
          addonBefore="Password"
          type="password"
          name="password"
          autoComplete="off"
          value={deets.password}
          placeholder="Password"
          onChange={() => {}}
        />
      </form>
      <h2>Email:{deets.username}</h2>
      <h2>Password:{deets.password}</h2>
    </div>
  );
}
