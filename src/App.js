import { useContext } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { AuthenticationContext } from './Contexts/AuthenticationContenxt';
import Home from './Pages/Home';
import Signup from './Pages/Signup';

function App() {
  const { user } = useContext(AuthenticationContext);

  return (
    <div>
      <Routes>
        <Route path="/" element={user ? <Home /> : <Navigate to="/signup" />} />
        <Route path="/signup" element={!user ? <Signup /> : <Home />} />
        <Route path="*" element="No page found" />
      </Routes>
    </div>
  );
}

export default App;
