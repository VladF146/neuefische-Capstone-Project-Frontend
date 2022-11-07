import { useContext } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { AuthenticationContext } from "./Contexts/AuthenticationContenxt";
import Home from "./Pages/Home";
import SingleNote from "./Pages/SingleNote";
import Signup from "./Pages/Signup";
import Signin from "./Pages/Signin";
import Layout from "./Components/Layout";
import Edit from "./Pages/Edit";
import Settings from "./Pages/Settings";

function App() {
  const { user } = useContext(AuthenticationContext);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route
            index
            element={
              user ? <Navigate to="/notes" /> : <Navigate to="/signin" />
            }
          />
          <Route
            path="notes"
            element={user ? <Home /> : <Navigate to="/signin" />}
          />
          <Route
            path="notes/:noteId"
            element={user ? <SingleNote /> : <Navigate to="/signin" />}
          />
          <Route
            path="edit"
            element={user ? <Edit /> : <Navigate to="/signin" />}
          />
          <Route
            path="settings"
            element={user ? <Settings /> : <Navigate to="/signin" />}
          />
        </Route>

        <Route
          path="/signup"
          element={!user ? <Signup /> : <Navigate to="/notes" />}
        />
        <Route
          path="/signin"
          element={!user ? <Signin /> : <Navigate to="/notes" />}
        />
        <Route path="*" element="No page found" />
      </Routes>
    </div>
  );
}

export default App;
