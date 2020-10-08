import React from "react";
import School from "./School";

const Education = () => {
  return (
    <div>
      <div id="education">
        <h2>Education</h2>
        <ul>
          <School
            schoolName="Name of School"
            startDate="August 2020"
            gradDate="June 2022"
          />
        </ul>
      </div>
    </div>
  );
};

export default Education;
