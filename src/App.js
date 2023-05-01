import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import { Intro, Login, SignUp, Main, Mypage, Search, Info, ValueMain, Value, Trend, Wrong, PastMain, Goodpost } from './pages';
import { IsLogin } from "./router";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Intro />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />

        <Route path="/main" element={<Main />} />

        <Route path="/mypage/:userNum" element={<IsLogin><Outlet /></IsLogin>}>
          {/*:는 뒤에 변수가 옴, useParams를 이용해 userNum(변수) 값 설정 */}
          {/* 여러 페이지를 route 해야 할 경우 outlet을 사용해야 올바르게 동작(없다면 goodpost가 로드안됨) */}
          <Route path="" element={<Mypage />} />
          <Route path="goodpost" element={<Goodpost />} />
          {/* /goodpost 말고 goodpost면 url 뒤 /goodpost로 인식 */}
        </Route>

        <Route path="/search" element={<Search />} />
        <Route path="/info/:infoId" element={<Info />} />
        <Route path="/valueMain" element={<ValueMain />} />
        <Route path="/value" element={<Value />} />
        <Route path="/trend" element={<Trend />} />

        <Route path="/pastmain" element={<PastMain />} />

        <Route path="*" element={<Wrong />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
