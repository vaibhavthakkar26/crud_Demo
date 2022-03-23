import "./App.css";
import Home from "./pages/home";
import store from "./redux/store";
import { Provider } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import UserInfo from "./pages/UserInfo";
function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/userinfo" element={<UserInfo />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
