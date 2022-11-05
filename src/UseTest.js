import { useEffect, useState, useRef } from 'react';

const UseTest = () => {

  const [count, setCount] = useState(0);

  const isFirstRender = useRef(true);

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }

    console.log('useEffect ran. count is: ', count);
  }, [count]);

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
};

export default UseTest;
