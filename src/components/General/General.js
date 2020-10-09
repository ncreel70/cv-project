import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const General = (props) => {
  const { fullName, jobTitle, email, changeEdit } = props;
  return (
    <div>
      <h2 id="fullName">{fullName}</h2>
      <span id="edit" onClick={changeEdit}>
        <FontAwesomeIcon icon="edit" />
      </span>
      <h2 id="jobTitle">{jobTitle}</h2>
      <h2 id="email">{email}</h2>
    </div>
  );
};

export default General;
