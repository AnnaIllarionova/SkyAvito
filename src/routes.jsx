import { Route, Routes } from "react-router-dom";
import { MainPage } from "./pages/main-page/main-page";
import { Profile } from "./pages/profile/profile";

export const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/profile" element={<Profile />} />
        </Routes>
    )
}