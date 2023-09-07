import React, { useEffect } from "react";

const Error = () => {
  useEffect(() => {
    document.title = "Page Not Found";
  }, []);

  return (
    <div>p</div>
  );
};

export default Error;
