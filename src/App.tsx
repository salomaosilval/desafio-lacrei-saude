import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Home } from "./pages/Home";
import { User } from "./pages/User";
import { Professional } from "./pages/Professional";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/user" element={<User />} />
          <Route path="/professional" element={<Professional />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
