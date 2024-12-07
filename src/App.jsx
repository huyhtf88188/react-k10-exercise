import { Route, Routes } from "react-router-dom";
import "./App.css";
import UserPage from "./user/UserPage";
import LoginForm from "./user/LoginForm";
import RegisterForm from "./user/RegisterForm";
import HomePage from "./page/HomePage";
import HomePageForm from "./page/HomePageForm";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/homePage" element={<HomePage />}></Route>
        <Route path="/homePageForm/:id" element={<HomePageForm />}></Route>
        <Route path="/homePageForm/" element={<HomePageForm />}></Route>

        <Route path="/user" element={<UserPage />}>
          <Route path="register" element={<RegisterForm />} />
          <Route path="login" element={<LoginForm />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
