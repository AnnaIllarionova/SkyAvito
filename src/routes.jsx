import { Route, Routes } from "react-router-dom";
import { MainPage } from "./pages/main-page/main-page";
import { Profile } from "./pages/profile/profile";
import { SingIn } from "./pages/singin/singin";
import { SingUp } from "./pages/singup/singup";
import { ErrorPage } from "./pages/error-page/error-page";
import { useState } from "react";
import { Advertisement } from "./pages/advertisement-page/advertisement-page";

export const AppRoutes = () => {
  const [searchText, setSearchText] = useState("");
  const [startSearch, setStartSearch] = useState(false);

  return (
    <Routes>
      <Route
        path="/"
        element={
          <MainPage
            searchText={searchText}
            setSearchText={setSearchText}
            startSearch={startSearch}
            setStartSearch={setStartSearch}
          />
        }
      />
      <Route
        path="/profile"
        element={
          <Profile
            searchText={searchText}
            startSearch={startSearch}
            setStartSearch={setStartSearch}
          />
        }
      />
      <Route path="/singin" element={<SingIn />} />
      <Route path="/singup" element={<SingUp />} />
      <Route path="/advertisement/:advId" element={<Advertisement />} />
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
};
