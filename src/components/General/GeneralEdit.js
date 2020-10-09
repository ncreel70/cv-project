import React from "react";
import CancelButton from "../Buttons/CancelButton";

const GeneralEdit = (props) => {
  const { fullName, jobTitle, email } = props;
  return (
    <div>
      <CancelButton />
      <input id="fullNameInput" type="text">
        {fullName}
      </input>
      <input id="jobTitleInput" type="text">
        {jobTitle}
      </input>
      <input id="emailInput" type="text">
        {email}
      </input>
    </div>
  );
};

export default GeneralEdit;
