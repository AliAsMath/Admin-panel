import Home from "./page/Home";
import Login from "./page/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import List from "./page/List";
import Single from "./page/Single";
import New from "./page/New";

function App() {
  return (
    <div className="font-nunito w-full select-none">
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
            <Route path="login" element={<Login />} />
            <Route path="users">
              <Route index element={<List />} />
              <Route path=":id" element={<Single />} />
              <Route path="new" element={<New type="user" />} />
            </Route>
            <Route path="products">
              <Route index element={<List />} />
              <Route path=":productId" element={<Single />} />
              <Route path="new" element={<New type="product" />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
