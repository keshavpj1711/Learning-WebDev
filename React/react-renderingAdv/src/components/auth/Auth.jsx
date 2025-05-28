import LoginSignup from "./LoginSignup";

function Auth() {

  var isLoggedOut = true;
  var isUserRegistered = true;

  return (
    <div>
      <div className="flex justify-center my-4">
        {isLoggedOut ?
          <LoginSignup isUserRegistered={isUserRegistered}/>
          : <div className="w-48">
            <h1 className="text-3xl flex justify-center my-4W">
              <p>Hello User!!</p>
            </h1>
          </div>}
      </div>
      <div className="text-xl flex justify-center">
          <p>
            To learn about conditional rendering using <em>ternary</em> and <em>AND</em> operator
          </p>
      </div>
    </div>
  )
}

export default Auth;