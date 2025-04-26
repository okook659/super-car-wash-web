import './App.css'
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Sidebar from './components/Sidebar.jsx'
import ClientList from './pages/clients/ClientList.jsx'

function App() {

  {/*
     <div>
      <Login />
    </div>*/}

  return (
    <BrowserRouter>
      <div className='flex'>
        <Sidebar></Sidebar>
        <div className='p-7 text-2xl font-semibold flex-1 h-screen'>
          <Routes>
            <Route path='/clients' element={<ClientList />} />
            {/* <Route path='/' element={<ClientList />}/> */}
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App;
