import React from "react";

const Header = (props) => {
  const { fullName, jobTitle, email } = props;
  return (
    <div>
      <h2 id="fullName">{fullName}</h2>
      <h2 id="jobTitle">{jobTitle}</h2>
      <h2 id="email">{email}</h2>
    </div>
  );
};

export default Header;
