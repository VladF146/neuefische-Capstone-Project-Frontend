import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={"Home"} />
        <Route path="/signup" element={"Signup"} />
        <Route path="/signin" element={"Signin"} />
        <Route path="*" element={"No page found"} />
      </Routes>
    </div>
  );
}

export default App;
