import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Sidebar from './components/Sidebar.jsx'
import ServiceList from './pages/services/service.jsx';
import ServiceCreate from './pages/services/ServiceCreate.jsx';
import ServiceEdit from './pages/services/ServiceEdit.jsx';
import ClientList from './pages/clients/ClientList.jsx'
import ClientCreate from './pages/clients/ClientCreate.jsx';
import ClientEdit from './pages/clients/ClientEdit.jsx';
import ServiceTarificationList from './pages/tarifications/ServiceTarificationList.jsx';
import ServiceTarificationCreate from './pages/tarifications/ServiceTarificationCreate.jsx';
import RendezVousCalendar from './pages/rendezvous/RendezVousCalendar.jsx';
import RendezVousForm from './pages/rendezvous/RendezVousForm.jsx';
import Login from './pages/Login.jsx';
import Home from './pages/home/Home.jsx';
import Register from './pages/register.jsx';
import Reservation from './pages/reservation/Reservation.jsx';

function AppContent() {
  const location = useLocation();

  
  const hideSidebarRoutes = ['/login', '/','/register','/reservation'];

  const shouldHideSidebar = hideSidebarRoutes.includes(location.pathname);

  return (
    <div className='flex'>
      {!shouldHideSidebar && <Sidebar />}
      <div className='p-7 text-2xl font-semibold flex-1 h-screen'>
        <Routes>
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/' element={<Home />} /> 
          <Route path='/reservation' element={<Reservation />} /> 
          
          <Route path='/clients' element={<ClientList />} />
          <Route path='/clients/create' element={<ClientCreate />} />
          <Route path='/clients/edit/:id' element={<ClientEdit />} />
          <Route path='/services' element={<ServiceList />} />
          <Route path='/services/create' element={<ServiceCreate />} />
          <Route path='/services/edit/:id' element={<ServiceEdit />} />
          <Route path='/tarifications' element={<ServiceTarificationList />} />
          <Route path='/tarifications/create' element={<ServiceTarificationCreate />} />
          <Route path='/rendezvous' element={<RendezVousCalendar />} />
          <Route path='/rendezvous/create' element={<RendezVousForm />} />
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
