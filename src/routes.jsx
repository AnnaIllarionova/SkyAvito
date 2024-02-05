import { Route, Routes, useNavigate } from "react-router-dom";
import { Layout, MainPage } from "./pages/main-page/main-page";
import { Profile } from "./pages/profile/profile";
import { SingIn } from "./pages/singin/singin";
import { SingUp } from "./pages/singup/singup";
import { ErrorPage } from "./pages/error-page/error-page";
import { useState } from "react";
import { Advertisement } from "./pages/advertisement-page/advertisement-page";
import { SellerProfilePage } from "./pages/seller-profile-page/seller-profile-page";
import { Reviews } from "./pages/reviews/reviews";
import { NewAdvertisement } from "./pages/add-new-advertisement/add-new-advertisement";
import { ChangePasswordModal } from "./pages/change-page-modal/change-page-modal";

export const AppRoutes = () => {
  const [searchText, setSearchText] = useState("");
  const [startSearch, setStartSearch] = useState(false);

  const getUserFromLS = () => {
    try {
      return JSON.parse(localStorage.getItem("accessTokenData"));
    } catch (error) {
      console.log(error);
      return null;
    }
  };

  const [user, setUser] = useState(getUserFromLS());
  const navigate = useNavigate();

  const logOut = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("accessTokenData");
    localStorage.removeItem("refreshTokenData");
    setUser(null);
    navigate("/singin");
  };

  return (
    <Routes>
      <Route path="/" element={<Layout user={user} logOut={logOut} />}>
        <Route
          index
          element={
            <MainPage
              searchText={searchText}
              setSearchText={setSearchText}
              startSearch={startSearch}
              setStartSearch={setStartSearch}
            />
          }
        />

        <Route path="/advertisement/:advId/*" element={<Advertisement />}>
          <Route path="reviews" element={<Reviews user={user} />} />
        </Route>

        <Route
          path="/seller-profile/:sellerId"
          element={
            <SellerProfilePage
              searchText={searchText}
              startSearch={startSearch}
              setStartSearch={setStartSearch}
            />
          }
        />

        <Route
          path="/profile/*"
          element={
            <Profile
              searchText={searchText}
              startSearch={startSearch}
              setStartSearch={setStartSearch}
              user={user}
              logOut={logOut}
            />
          }
        >
          <Route path="change-password" element={<ChangePasswordModal />} />
        </Route>
        
        <Route path="*" element={<ErrorPage />} />
      </Route>

      <Route path="/singin" element={<SingIn setUser={setUser} />} />
      <Route path="/singup" element={<SingUp />} />

      <Route
        path="/add-new-advertisement"
        element={<NewAdvertisement user={user} />}
      />
    </Routes>
  );
};
