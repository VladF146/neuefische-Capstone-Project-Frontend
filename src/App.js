import { useContext } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { AuthenticationContext } from "./Contexts/AuthenticationContext";
import Home from "./Pages/Home";
import Signup from "./Pages/Signup";
import Signin from "./Pages/Signin";
import Layout from "./Components/Layout";
import EditNotes from "./Pages/EditNotes";
import Settings from "./Pages/Settings";
import Note from "./Pages/Note";

function App() {
  const { user } = useContext(AuthenticationContext);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={user ? <Home /> : <Navigate to="/signin" />} />
          <Route
            path="/:id"
            element={user ? <Note /> : <Navigate to="/signin" />}
          />
          <Route
            path="edit"
            element={user ? <EditNotes /> : <Navigate to="/signin" />}
          />
          <Route
            path="settings"
            element={user ? <Settings /> : <Navigate to="/signin" />}
          />
        </Route>

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
