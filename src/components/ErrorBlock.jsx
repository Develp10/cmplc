import React from "react";

const ErrorBlock = ({ isError, errorMsg }) => {
  return (
    isError && (
      <div className="error-block">
        <p>{errorMsg}</p>
      </div>
    )
  );
};

export default ErrorBlock;
