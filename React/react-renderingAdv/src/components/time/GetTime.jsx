import { useState } from "react";

function GetTime() {

  const [time, setTime] = useState(new Date().toLocaleTimeString())
  const [showingTime, setShowingTime] = useState(false)

  function updateTime() {
    setTime(new Date().toLocaleTimeString());

    setTimeout(updateTime, 1000);
  }

  function showTime() {
    updateTime();
    setShowingTime(true);
    console.log(showingTime);
  }

  function stopTime() {
    setShowingTime(false);
  }

  return (
    <div>
      <div className="flex justify-center">
        <div className="flex flex-col gap-4 w-1/2">

          {showingTime ?
            <div className="flex flex-col gap-4">
              <div className="flex justify-center text-6xl">
                {time}
              </div>
              <button className="p-1 bg-cyan-500 text-xl rounded-md"
                onClick={stopTime}>
                Stop Time
              </button>
            </div>

            :
            <div className="flex flex-col gap-4">
              <div className="flex justify-center text-6xl">
                Time
              </div>
              <button className="p-1 bg-cyan-500 text-xl rounded-md"
                onClick={showTime}>
                Show Time
              </button>
            </div>}
        </div>
      </div>
    </div>
  )
}

export default GetTime;