import React, { useEffect, useState } from "react";
import { Input, Card, Button } from "antd";
import axios from "axios";

const { Meta } = Card;

const initialFormState = {
  username: "",
  password: ""
};

export default function LifecycleNew() {
  const [deets, setDeets] = useState(initialFormState);
  const [profileCount, setProfileCount] = useState(0);
  const [profiles, setProfiles] = useState([]);

  useEffect(() => {
    console.log("LifecycleNew mounted/updated");
    getProfiles();
    return () => {
      console.log("LifecycleNew unmounted!");
    };
  }, [profileCount]);

  const handleChange = event => {
    setDeets({
      ...deets,
      [event.target.name]: event.target.value
    });
  };

  const getProfiles = async () => {
    const response = await axios.get(
      `https://randomuser.me/api/?results=${profileCount}`
    );
    console.log(response.data.results);
    setProfiles(response.data.results);
  };

  const renderProfiles = () => {
    return profiles.map(profile => {
      const { picture, name, location } = profile;
      return (
        <Card
          key={profile.cell}
          hoverable
          style={{ width: 240, margin: "10px auto" }}
          cover={<img alt="example" src={picture.large} />}
        >
          <Meta
            title={`${name.first} ${name.last}`}
            description={location.country}
          />
        </Card>
      );
    });
  };
  console.log("LifecycleNew rendered!");
  return (
    <div>
      <h2>Hooks State & Lifecycles</h2>
      <form style={{ width: 300, margin: "auto" }}>
        <Input
          addonBefore="Username"
          type="username"
          name="username"
          autoComplete="off"
          value={deets.username}
          placeholder="ManateeTaco"
          onChange={handleChange}
        />
        <br />
        <Input
          addonBefore="Password"
          type="password"
          name="password"
          autoComplete="off"
          value={deets.password}
          placeholder="Password"
          onChange={handleChange}
        />
        <Input
          addonBefore="# of Profiles"
          type="number"
          name="profileCount"
          autoComplete="off"
          onChange={e => setProfileCount(e.target.value)}
        />
      </form>
      <h2>Email:{deets.username}</h2>
      <h2>Password:{deets.password}</h2>
      <div className="profile_container">
        {profiles.length > 1 ? renderProfiles() : null}
      </div>
    </div>
  );
}
