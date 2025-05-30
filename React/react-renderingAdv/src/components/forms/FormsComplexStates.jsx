import { useState } from "react";

function FormsComplexStates() {
  const [{ fname, lname, email }, setFullName] = useState({
    fname: "",
    lname: "",
    email: "",
  })

  function handleChange(e) {
    const { value, name } = e.target;
    console.log(value, "\n", name)

    setFullName((prevValue) => {
      // if (name === "fname") {
      //   return {
      //     fname: value,
      //     lname: prevValue.lname,
      //     email: prevValue.email
      //   }
      // } else if (name === "lname") {
      //   return {
      //     fname: prevValue.fname,
      //     lname: value,
      //     email: prevValue.email,
      //   }
      // } else {
      //   return {
      //     fname: prevValue.fname,
      //     lname: prevValue.lname,
      //     email: value,
      //   }
      // }

      // Using the spread operator we can easily shorten this code 
      return {
        ...prevValue,
        [name] : value, // This is the format of using the value of the name var as key in a js object
      }
    })
  }

  return (
    <div className="flex justify-center">
      <div className="flex flex-col gap-4">
        <div>
          <div className="text-2xl flex justify-center mt-2">
            Hello {fname} {lname}
          </div>
          <div className="text-xs flex justify-center p-1">
            {email}
          </div>
          <div className="flex flex-col gap-2 justify-center">
            <form action="" className="flex flex-col gap-2">
              <input type="text"
                name="fname"
                placeholder="First Name"
                className="rounded-md p-2"
                onChange={handleChange}
              />

              <input type="text"
                name="lname"
                placeholder="Last Name"
                className="rounded-md p-2"
                onChange={handleChange}
              />

              <input type="text"
                name="email"
                placeholder="E-mail"
                className="rounded-md p-2"
                onChange={handleChange}
              />

            </form>
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