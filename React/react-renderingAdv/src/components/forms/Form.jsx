import { useState } from "react";

function Forms() {
  const [name, setName] = useState("");
  const [input, setInput] = useState("")
  const [currentName, setCurrentName] = useState("");

  function handleChange(e) {
    if (e.target.value === "") {
      setName("")
    } else {
      console.log(e.target.value);
      setCurrentName(e.target.value);
    }
  }

  function handleSync(e) {
    setInput(e.target.value);
  }

  function handleClick() {
    setName(currentName)
  }

  return (
    <div className="flex justify-center">
      <div className="flex flex-col gap-4">
        <div>
          <div className="text-2xl flex justify-center my-2">
            Input Sync
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex justify-between items-center">
              <label htmlFor="">First Input: </label>
              <input type="text"
                placeholder="Enter Something"
                onChange={handleSync}
                value={input}
                className="rounded-md p-2"
              />
            </div>
            <div className="flex justify-between items-center">
              <label htmlFor="">Second Input: </label>
              <input type="text"
                placeholder="Enter Something"
                onChange={handleSync}
                value={input}
                className="rounded-md p-2"
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-2 justify-center">
          <div className="text-2xl flex justify-center">
            Hello {name + "!!"}
          </div>
          <div className="flex justify-center">
            <input type="text"
              placeholder="Enter Name"
              onChange={handleChange}
              className="rounded-md p-2"
            />
          </div>
          <div className="flex justify-center">
            <button
              className="bg-cyan-500 w-1/3 p-2 rounded-md"
              onClick={handleClick}
            >
              Submit
            </button>
          </div>
        </div>
        <div>
          Learning about React forms and event handling
        </div>
      </div>
    </div>
  )
}

export default Forms;