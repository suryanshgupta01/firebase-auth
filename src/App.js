import './App.css';
import { BrowserRouter as Router, Switch, Route, Routes } from 'react-router-dom';
import Signup from './Signup';
import Login from './Login';
import Dashboard from './Dashboard';
import { useUserContext } from './useCustomContext';
import ForgotPassword from './ForgotPassword';
import ResetDetails from './ResetDetails';
function App() {
  const { currentUser } = useUserContext();
  return (
    <Router>
      <Routes>
        <Route path='/' element={!currentUser ? <Signup /> : <Dashboard />} exact />
        <Route path='/login' element={!currentUser ? <Login /> : <Dashboard />} />
        <Route path='/forgot-password' element={<ForgotPassword />} />
        <Route path='/reset-details' element={!currentUser ? <Login /> : <ResetDetails />} />
      </Routes>
    </Router>

  );
}

export default App;
