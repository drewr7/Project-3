import React, { Component } from "react";
import Faker from "faker";
import moment from "moment";
import MainContent from "../components/MainContent"

class MainPage extends Component {
  state = {
    users: []
  };
  componentDidMount() {
    let arr = new Array(10).fill(undefined).map((val, idx) => {
      let user = {
        firstName: Faker.name.firstName(),
        lastName: Faker.name.lastName(),
        profilePicture: Faker.image.avatar(),
        lastSignedIn: moment(Faker.date.recent(45)).fromNow(),
        latestPost: Faker.lorem.paragraphs(2, " ")
      };
      return user;
    });
    this.setState({ users: arr });
  }
  render() {
    return (
      <React.Fragment>
        <MainContent/>
      </React.Fragment>
    );
  }
}

export default MainPage;
