import React from "react";

const School = (props) => {
  const { schoolName, startDate, gradDate } = props;
  return (
    <div>
      <h3>{schoolName}</h3>
      <h3>{startDate}</h3>
      <h3>{gradDate}</h3>
    </div>
  );
};

export default School;
