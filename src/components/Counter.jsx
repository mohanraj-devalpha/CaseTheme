import { useEffect, useState } from "react";

const Counter = ({ end = 100, duration = 3000 }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const increment = Math.ceil(end / (duration / 16)); // Approximate frame duration
    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        start = end;
        clearInterval(timer);
      }

      setCount(start);
    }, 16); // Roughly 60 FPS

    return () => clearInterval(timer);
  }, [end, duration]);

  
  {
    
  }

  return (
    <span className="text-4xl sm:text-5xl text-[#EFB945] font-bold">
    {count}
    </span>
  );
};

export default Counter;
