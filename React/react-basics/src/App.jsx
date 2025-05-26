import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import FavFood from "./components/FavFood";
import Greeter from "./components/Greeter";
import Contact from "./components/Contact";
// These are imported in order to setup Route handling 


function App() {
  const name = "Keshav";
  const btnClass = "bg-cyan-600 p-2 rounded-md hover:bg-cyan-400 w-24 flex justify-center"

  return (
    <BrowserRouter>
      <div className="flex flex-col gap-5 h-screen">
        <div className="flex flex-col grow">
          <div className='flex flex-col justify-center items-center gap-2'>
            <h1 className='text-4xl'>{name} is learning JSX</h1>
            <h3 className='text-2xl'>Your random number is: {Math.floor(Math.random() * 11)}</h3>
          </div>

          {/* Adding Buttons to navigate */}
          <div className="flex flex-col gap-4 justify-center grow">

            <div className="flex justify-center text-3xl">
              <h3>Learnings</h3>
            </div>

            <div className="flex gap-6 justify-center">

              <div>
                <Link to="/" className={btnClass}>Home</Link>
              </div>

              <div>
                <Link to="/favFood" className={btnClass}>FavFood</Link>
              </div>

              <div>
                <Link to="/greeter" className={btnClass}>Greeter</Link>
              </div>

              <div>
                <Link to="/contact" className={btnClass}>Contacts</Link>
              </div>

            </div>
          </div>
        </div>

        {/* Route Handling */}
        <Routes>
          <Route path="/favFood" element={<FavFood />} />
          <Route path="/greeter" element={<Greeter />} />
          <Route path="/contact" element={<Contact />}/>
        </Routes>

        <footer className="flex justify-center min-h-16">
          Created by: {name} Copyright {new Date().getFullYear()}
        </footer>
      </div>
    </BrowserRouter>
  )
}

export default App
