// Hooks can only be used inside a function 

import { useState } from "react";


function Counter() {

  const [count, setCount] = useState(0);

  function increase() {
    setCount(count + 1);
  }
  function decrease() {
    setCount(count - 1);
  }

  return (
    <div>
      <div className="flex justify-center">
        <div className="flex flex-col gap-2">
          <div className="flex justify-center text-7xl">
            {count}
          </div>
          <div className="flex gap-2">
            <button className="p-1 bg-cyan-500 text-3xl rounded-md w-12"
              onClick={decrease}>
              -
            </button>
            <button className="p-1 bg-cyan-500 text-3xl rounded-md w-12"
              onClick={increase}>
              +
            </button>
          </div>
        </div>
      </div>
      <div className="text-xl flex justify-center mt-8">
        <p>
          To learn about useState()
        </p>
      </div>
    </div>
  )
}

export default Counter;