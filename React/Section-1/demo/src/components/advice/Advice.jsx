import React, { useEffect, useState } from "react";
import Message from "../no-of-advices-count/Message";

const Advice = () => {
  const [advice, setAdvice] = useState("");
  const [count, setCount] = useState(0);

  async function getAdvice() {
    const res = await fetch("https://api.adviceslip.com/advice");
    const data = await res.json();
    setAdvice(data.slip.advice);
    setCount((c) => c + 1);
  }

  useEffect(() => {
    getAdvice();
  }, []);

  return (
    <>
      <p>{advice}</p>
      <button onClick={getAdvice}>New Advice!</button>
      <Message count={count}></Message>
    </>
  );
};

export default Advice;
