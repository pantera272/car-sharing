import AdminPanel from './components/view/AdminPanel/AdminPanel';
import CarSharing from './components/view/CarSharing/CarSharing';
import Login from './components/view/Login/Login';
import Main from './components/view/Main/Main';
import { Route, Routes } from 'react-router-dom';
import PageNotFound from './components/view/PageNotFound/PageNotFound';
import WorkerAdminPanel from './components/view/WorkerAdminPanel/WorkerAdminPanel';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Main />} />
      <Route path='/login' element={<Login />} />
      <Route path='/user' element={<CarSharing />} />
      <Route path='/admin' element={<AdminPanel />} />
      <Route path='/workeradminpanel' element={<WorkerAdminPanel />} />
      <Route pant='/pagenotfound' element={<PageNotFound />} />
    </Routes>
  );
};

export default App;