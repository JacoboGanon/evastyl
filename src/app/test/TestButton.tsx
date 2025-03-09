"use client";
import { useState } from "react";

const TestButton = () => {
  const [someRandomVariable, setSomeRandomVariable] = useState(0);
  return (
    <div>
      {someRandomVariable}
      <button onClick={() => setSomeRandomVariable(Math.random())}>
        Click me
      </button>
    </div>
  );
};

export default TestButton;
