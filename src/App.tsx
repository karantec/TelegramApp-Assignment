import { BrowserRouter, Route, Routes } from "react-router-dom";

import MainLayout from "./components/layout/MainLayout";
import { Landing } from "./components/Landing/landing";
import { MainChat } from "./components/MainChat/mainChat";
function App() {
  return (
    <BrowserRouter>
      <MainLayout>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/chat/:chatId" element={<MainChat />} />
        </Routes>
      </MainLayout>
      s
    </BrowserRouter>
  );
}

export default App;
