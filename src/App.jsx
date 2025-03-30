import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Sidebar from './components/Sidebar.jsx'
import ClientList from './pages/clients/ClientList.jsx'
import ClientCreate from './pages/clients/ClientCreate.jsx';
import ClientEdit from './pages/clients/ClientEdit.jsx';

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
            <Route path='/clients/create' element={<ClientCreate />}/>
            <Route path='/clients/edit/:id' element={<ClientEdit />}/>
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App
