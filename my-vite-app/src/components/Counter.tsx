import React, { useState } from 'react';

export const Counter = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <button data-testid="increment" onClick={() => setCount(count + 1)}>
        Count: {count}
      </button>
    </div>
  );
};

