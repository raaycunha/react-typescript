import { useState, useEffect } from "react";

const Counter = () => {
  const [count, setCount] = useState<number>(0);
  useEffect(() => {
    console.log(`O valor de count é: ${count}`);
  }, [count]);
  return (
    <div className="m-3">
      <p>{count}</p>
      <button onClick={() => setCount((prev) => prev + 1)}>Incrementar</button>
    </div>
  );
};

export default Counter;
