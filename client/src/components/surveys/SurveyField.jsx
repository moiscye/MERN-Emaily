import React from "react";

export default ({ input, label, meta: { error, touched } }) => {
  // console.log("prosp ", input);

  return (
    <div>
      <label>{label}</label>
      <input {...input} />
      <div className="red-text" style={{ marginBottom: "20px" }}>
        {touched && error}
      </div>
    </div>
  );
};
