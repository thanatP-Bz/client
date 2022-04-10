import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Landing, Register, Dashboard, Error } from "./pages";
import Test from "./test/Test";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/register" element={<Register />} />
        <Route path="/landing" element={<Landing />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Test />
    </BrowserRouter>
  );
}

export default App;
