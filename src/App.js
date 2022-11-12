import { Routes, Route, Navigate } from 'react-router-dom';
import ProtectedRoute from './Components/ProtectedRoute';
import Home from './Pages/Home';
import SingleNote from './Pages/SingleNote';
import Authentication from './Pages/Authentication';
import Layout from './Components/Layout';
import CreateNote from './Pages/CreateNote';
import Settings from './Pages/Settings';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route
            index
            element={<ProtectedRoute component={<Navigate to="/notes" />} />}
          />
          <Route
            path="notes"
            element={<ProtectedRoute component={<Home />} />}
          />
          <Route
            path="notes/:noteId"
            element={<ProtectedRoute component={<SingleNote />} />}
          />
          <Route
            path="create"
            element={<ProtectedRoute component={<CreateNote />} />}
          />
          <Route
            path="settings"
            element={<ProtectedRoute component={<Settings />} />}
          />
        </Route>

        <Route
          path="/auth"
          element={<ProtectedRoute component={<Authentication />} unprotected />}
        />
        <Route path="*" element="No page found" />
      </Routes>
    </div>
  );
}

export default App;
