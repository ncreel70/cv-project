import React, { Component } from "react";
import "./components/FontAwesomeIcons";
import General from "./components/General/General";
import GeneralEdit from "./components/General/GeneralEdit";
import Education from "./components/Education";
import Employment from "./components/Employment";

class App extends Component {
  state = {
    fullName: "Full Name",
    email: "email@email.com",
    jobTitle: "Job Title",
    education: [
      {
        schoolName: "",
        startDate: "",
        endDate: "",
        description: "",
      },
    ],
    experience: {
      jobName: "",
      startDate: "",
      endDate: "",
      description: "",
    },
    generalEditable: false,
    educationEditable: false,
    employmentEditable: false,
    schoolEditable: false,
    jobEditable: false,
  };

  changeEdit = () => {
    console.log(this);
    switch (this.props.editable) {
      case "generalEditable":
        this.setState({
          generalEditable: !this.state.generalEditable,
        });
        break;
      default:
        this.setState({
          generalEditable: !this.state.generalEditable,
        });
    }
  };

  render() {
    const { fullName, email, jobTitle, changeEdit } = this.state;
    return (
      <div className="App">
        {!this.state.generalEditable ? (
          <General
            fullName={fullName}
            email={email}
            jobTitle={jobTitle}
            changeEdit={this.changeEdit}
            editable={changeEdit}
          />
        ) : (
          <GeneralEdit />
        )}
        <Education />
        <Employment />
      </div>
    );
  }
}

export default App;
