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
        <Route element={<ProtectedRoute />}>
          <Route path="/" element={<Layout />}>
            <Route index element={<Navigate to="/notes" />} />
            <Route path="notes" element={<Home />} />
            <Route path="notes/:noteId" element={<SingleNote />} />
            <Route path="create" element={<CreateNote />} />
            <Route path="settings" element={<Settings />} />
          </Route>
        </Route>

        <Route path="/auth" element={<Authentication />} />
        <Route path="*" element="No page found" />
      </Routes>
    </div>
  );
}

export default App;
