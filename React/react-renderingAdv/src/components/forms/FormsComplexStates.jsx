import { useState } from "react";

function FormsComplexStates() {
  const [{ fname, lname }, setFullName] = useState({
    fname: "",
    lname: "",
  })

  function handleChange(e) {
    const { value, name } = e.target;
    console.log(value, "\n", name)

    setFullName((prevValue) => {
      if (name === "fname") {
        return {
          fname : value,
          lname : prevValue.lname
        }
      } else {
        return {
          fname : prevValue.fname,
          lname : value
        }
      }
    })
  }

  return (
    <div className="flex justify-center">
      <div className="flex flex-col gap-4">
        <div>
          <div className="text-2xl flex justify-center my-2">
            Hello {fname} {lname}
          </div>
          <div className="flex flex-col gap-2 justify-center">
            <div className="flex items-center justify-between">
              <input type="text"
                name="fname"
                placeholder="First Name"
                className="rounded-md p-2"
                onChange={handleChange}
              />
            </div>
            <div className="flex items-center justify-between">
              <input type="text"
                name="lname"
                placeholder="Last Name"
                className="rounded-md p-2"
                onChange={handleChange}
              />
            </div>
          </div>
        </div>
        <div className="flex justify-center">
          Learning about Complex States
        </div>
      </div>
    </div>
  )
}

export default FormsComplexStates;