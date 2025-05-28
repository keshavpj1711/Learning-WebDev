import { Link } from "react-router-dom";
import InputArea from "./InputArea";

function LoginSignup(props) {

  const btnClass = "bg-cyan-600 p-2 rounded-md hover:bg-cyan-400 flex justify-center"

  return (
    <div className="w-48">
      <h1 className="text-3xl flex justify-center my-2">
        {props.isUserRegistered?<p>LogIn</p>:<p>Signup</p>}
      </h1>

      <form action="" className="flex flex-col gap-2">
        <InputArea type="text" placeholder="Username" />
        <InputArea type="password" placeholder="Password" />

        {/* Only showing Confirm Password when user is not registered */}
        {!props.isUserRegistered && <InputArea type="password" placeholder="Confirm Password" />}

        {props.isUserRegistered ?
          <Link to={"/auth"} className={btnClass}>
            Login
          </Link>
          : <Link to={"/auth"} className={btnClass}>
            Signup
          </Link>
        }
      </form>
    </div>
  )
}

export default LoginSignup;