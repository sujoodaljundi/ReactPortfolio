import React from "react";
import useCurrentTime from "./hooks/useCurrentTime";

const CustomHookExample = () => {
  const currentTime = useCurrentTime();

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Custom Hook Example</h1>
      <p>The current time is:</p>
      <h2>{currentTime}</h2>
    </div>
  );
};

export default CustomHookExample;
