import './App.css'
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Auth from './components/auth/Auth';
import Counter from './components/counter/Counter';
import GetTime from './components/time/GetTime';

function App() {

  const btnClass = "bg-cyan-600 p-2 rounded-md hover:bg-cyan-400 w-24 flex justify-center"

  return (
    <BrowserRouter>
      <div>
        <div className='flex flex-col p-4 gap-4'>
          <div className='text-3xl p-2 flex justify-center'>
            Keshav is Learning 2
          </div>

          <div className='flex justify-center gap-4'>
            <Link to={"/auth"} className={btnClass}>
              Auth
            </Link>
            <Link to={"/counter"} className={btnClass}>
              Counter
            </Link>
            <Link to={"/getTime"} className={btnClass}>
              Get Time
            </Link>
          </div>
        </div>
        <div className='fixed bottom-0 w-full inset-x-0 text-xm flex justify-center p-4'>
          <p>Keshav Copyright {new Date().getFullYear()}</p>
        </div>
      </div>
      <Routes>
        <Route path="/auth" element={<Auth />} />
        <Route path="/counter" element={<Counter />} />
        <Route path="/getTime" element={<GetTime />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
