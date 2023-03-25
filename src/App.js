import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Intro, Login, SignUp, Main, Search, Doughnut, Wrong } from './pages';
import { IsLogin } from "./router";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Intro />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />

        <Route path="/main" element={<Main />} />
        <Route path="/search" element={<IsLogin><Search /></IsLogin>} />
        <Route path="/trend" element={<Doughnut />} />

        <Route path="*" element={<Wrong />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
