function Auth() {

  const btnClass = "bg-cyan-600 p-2 rounded-md hover:bg-cyan-400 flex justify-center"
  var isLoggedOut = true;

  return (
    <div>
      <div className="flex justify-center my-4">
        {isLoggedOut ?
          <div className="w-48">
            <h1 className="text-3xl flex justify-center">
              <p>Hello</p>
            </h1>

            <form action="" className="flex flex-col gap-2">
              <input type="text" placeholder="Username" className="p-2" />
              <input type="password" placeholder="Password" className="p-2" />
              <button className={btnClass}>
                Login
              </button>
            </form>
          </div>
          : <div className="w-48">
            <h1 className="text-3xl flex justify-center">
              <p>Hello User!!</p>
            </h1>
          </div>}
      </div>
    </div>
  )
}

export default Auth;