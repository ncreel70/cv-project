import React, { Component } from "react";
import Header from "./components/Header";
import Education from "./components/Education";

class App extends Component {
  state = {
    fullName: "Full Name",
    email: "email@email.com",
    jobTitle: "Job Title",
    education: [],
    experience: [],
  };
  render() {
    const { fullName, email, jobTitle } = this.state;
    return (
      <div className="App">
        <Header fullName={fullName} email={email} jobTitle={jobTitle} />
        <Education />
      </div>
    );
  }
}

export default App;
