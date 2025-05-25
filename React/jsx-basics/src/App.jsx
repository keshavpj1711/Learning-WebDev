function App() {
  const name = "Keshav";

  return (
    <>
      <div className="h-screen">
        <div className='flex flex-col justify-center items-center gap-5 h-4/5'>
          <h1 className='text-6xl'>{name} is learning JSX</h1>
          <h3 className='text-3xl'>Your random number is: {Math.floor(Math.random() * 11)}</h3>
        </div>

        <footer className="flex justify-center">
          Created by: {name} Copyright {new Date().getFullYear()}
        </footer>
      </div>
    </>
  )
}

export default App
