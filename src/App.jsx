import './App.css'
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Sidebar from './components/Sidebar.jsx'
import ClientList from './pages/clients/ClientList.jsx'
import ClientCreate from './pages/clients/ClientCreate.jsx';
import ClientEdit from './pages/clients/ClientEdit.jsx';
import Login from './pages/Login.jsx';
import Home from './pages/home/Home.jsx';

function AppContent() {
  const location = useLocation();

  
  const hideSidebarRoutes = ['/login', '/home'];

  const shouldHideSidebar = hideSidebarRoutes.includes(location.pathname);

  return (
    <div className='flex'>
      {!shouldHideSidebar && <Sidebar />}
      <div className='p-7 text-2xl font-semibold flex-1 h-screen'>
        <Routes>
          <Route path='/login' element={<Login />} />
          <Route path='/home' element={<Home />} /> {/* si tu as une page Home */}
          <Route path='/clients' element={<ClientList />} />
          <Route path='/clients/create' element={<ClientCreate />} />
          <Route path='/clients/edit/:id' element={<ClientEdit />} />
        </Routes>
      </div>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  )
}

export default App;
