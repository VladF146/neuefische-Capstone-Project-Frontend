import { Routes, Route, Navigate } from 'react-router-dom';
import ProtectedRoute from './Components/ProtectedRoute';
import Notes from './Pages/Notes';
import SingleNote from './Pages/SingleNote';
import Authentication from './Pages/Authentication';
import Layout from './Components/Layout';
import CreateNote from './Pages/CreateNote';
import Settings from './Pages/Settings';
import PageNotFound from './Pages/PageNotFound';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route element={<ProtectedRoute />}>
          <Route path="/" element={<Layout />}>
            <Route index element={<Navigate to="/notes" />} />
            <Route path="notes" element={<Notes />} />
            <Route path="notes/:noteId" element={<SingleNote />} />
            <Route path="create" element={<CreateNote />} />
            <Route path="settings" element={<Settings />} />
            <Route path="auth" element={<Authentication />} />
          </Route>
        </Route>
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div>
  );
}

export default App;
