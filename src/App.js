import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Intro, Login, SignUp, Main, Wrong } from './pages';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Intro />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />

        <Route path="/main" element={<Main />} />

        <Route path="*" element={<Wrong />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
