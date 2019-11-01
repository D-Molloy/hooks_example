import React, { Component } from "react";
import axios from "axios";
import { Input, Card } from "antd";
const { Meta } = Card;

export default class ClassLifecycle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      profiles: []
    };
    this.handleChange = this.handleChange.bind(this);
    this.getProfiles = this.getProfiles.bind(this);
    this.renderProfiles = this.renderProfiles.bind(this);
  }

  handleChange(e) {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }

  componentDidMount() {
    console.log("LifecycleOld mounted!!  \u{1F3C7}");
    this.getProfiles();
  }
  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log("LifecycleOld updated!! \u{23EB}");
  }
  componentWillUnmount() {
    console.log("LifecycleOld unmounted! \u{1F4A9}");
  }

  getProfiles() {
    axios
      .get("https://randomuser.me/api/?results=50")
      .then(res => {
        const results = res.data.results;
        console.log(results);
        this.setState({ profiles: results });
      })
      .catch(err => console.log(err));
  }

  renderProfiles() {
    return this.state.profiles.map(profile => {
      const { picture, name, location } = profile;
      return (
        <Card
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
  }

  render() {
    console.log("LifecycleOld rendered!");
    return (
      <div>
        <h2>Class State & Lifecycle Management</h2>
        <form style={{ width: 300, margin: "auto" }}>
          <Input
            addonBefore="Username"
            type="username"
            name="username"
            value={this.state.username}
            placeholder="ManateeTaco"
            onChange={this.handleChange}
          />
          <br />
          <Input
            addonBefore="Password"
            type="password"
            name="password"
            autoComplete="off"
            value={this.state.password}
            placeholder="Password"
            onChange={this.handleChange}
          />
        </form>
        <h2>Email:{this.state.username}</h2>
        <h2>Password:{this.state.password}</h2>
        <div className="profile_container">{this.renderProfiles()}</div>
      </div>
    );
  }
}
