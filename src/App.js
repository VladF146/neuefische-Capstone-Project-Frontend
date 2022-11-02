import { useContext } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { AuthenticationContext } from "./Contexts/AuthenticationContenxt";
import Home from "./Pages/Home";
import Signup from "./Pages/Signup";
import Signin from "./Pages/Signin";

function App() {
  const { user } = useContext(AuthenticationContext);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={user ? <Home /> : <Navigate to="/signin" />} />
        <Route
          path="/signup"
          element={!user ? <Signup /> : <Navigate to="/" />}
        />
        <Route
          path="/signin"
          element={!user ? <Signin /> : <Navigate to="/" />}
        />
        <Route path="*" element="No page found" />
      </Routes>
    </div>
  );
}

export default App;
