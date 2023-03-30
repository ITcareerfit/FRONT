import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Intro, Login, SignUp, Main, Mypage, Search, Info, ValueMain, Value, Trend, Wrong } from './pages';
// import { IsLogin } from "./router";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Intro />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />

        <Route path="/main" element={<Main />} />
        <Route path="/mypage" element={<Mypage />} />
        <Route path="/search" element={<Search />} />
        <Route path="/info" element={<Info />} />
        {/* <Route path="/valueMain" element={<IsLogin><Value/></IsLogin>} />*/}
        <Route path="/valueMain" element={<ValueMain />} />
        <Route path="/value" element={<Value />} />
        <Route path="/trend" element={<Trend />} />

        <Route path="*" element={<Wrong />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
