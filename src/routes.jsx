import { Route, Routes } from "react-router-dom";
import { MainPage } from "./pages/main-page/main-page";
import { Profile } from "./pages/profile/profile";
import { SingIn } from "./pages/singin/singin";
import { SingUp } from "./pages/singup/singup";

export const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/singin" element={<SingIn />} />
            <Route path="/singup" element={<SingUp />} />
        </Routes>
    )
}