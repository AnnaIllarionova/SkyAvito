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
import { ChangePasswordModal } from "./pages/change-password-modal/change-password-modal";
import { ChangeAdvertisement } from "./pages/change-advertisement/change-advertisement-modal";
import { useGetAllAdvertisementsQuery } from "./services/api-services";

export const AppRoutes = () => {
  const [searchText, setSearchText] = useState("");
  const [startSearch, setStartSearch] = useState(false);
  const [deletedPictures, setDeletedPictures] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const getUserFromLS = () => {
    try {
      return JSON.parse(localStorage.getItem("accessTokenData"));
    } catch (error) {
      return null;
    }
  };

  const [user, setUser] = useState(getUserFromLS());
  const navigate = useNavigate();

  const logOut = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("accessTokenData");
    localStorage.removeItem("refreshTokenData");
    localStorage.removeItem("currentPassword");
    setUser(null);
    navigate("/singin");
  };

  const {
    data: allAds,
    error,
    isLoading,
    refetch,
  } = useGetAllAdvertisementsQuery();

  return (
    <Routes>
      <Route
        path="/"
        element={
          <Layout user={user} logOut={logOut} setIsModalOpen={setIsModalOpen} />
        }
      >
        <Route
          index
          element={
            <MainPage
              searchText={searchText}
              setSearchText={setSearchText}
              startSearch={startSearch}
              setStartSearch={setStartSearch}
              allAds={allAds}
              error={error}
              isLoading={isLoading}
              isModalOpen={isModalOpen}
              user={user}
              logOut={logOut}
              setDeletedPictures={setDeletedPictures}
              deletedPictures={deletedPictures}
              refetch={refetch}
              setIsModalOpen={setIsModalOpen}
            />
          }
        />

        <Route
          path="/advertisement/:advId/*"
          element={
            <Advertisement
              logOut={logOut}
              user={user}
              refetch={refetch}
              isModalOpen={isModalOpen}
              setDeletedPictures={setDeletedPictures}
            deletedPictures={deletedPictures}
            setIsModalOpen={setIsModalOpen}
            />
          }
        >
          <Route path="reviews" element={<Reviews user={user} />} />
          <Route
            path="change-advertisement"
            element={
              <ChangeAdvertisement
                user={user}
                logOut={logOut}
                setDeletedPictures={setDeletedPictures}
                deletedPictures={deletedPictures}
                refetch={refetch}
                setIsModalOpen={setIsModalOpen}
              />
            }
          />
        </Route>

        <Route
          path="/seller-profile/:sellerId"
          element={
            <SellerProfilePage
              searchText={searchText}
              startSearch={startSearch}
              setStartSearch={setStartSearch}
              logOut={logOut}
              user={user}
              isModalOpen={isModalOpen}
              setDeletedPictures={setDeletedPictures}
              deletedPictures={deletedPictures}
              refetch={refetch}
              setIsModalOpen={setIsModalOpen}
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
              isModalOpen={isModalOpen}
              setDeletedPictures={setDeletedPictures}
              deletedPictures={deletedPictures}
              refetch={refetch}
              setIsModalOpen={setIsModalOpen}
            />
          }
        >
          <Route path="change-password" element={<ChangePasswordModal />} />
        </Route>

        <Route path="*" element={<ErrorPage />} />
      </Route>

      <Route
        path="/singin"
        element={<SingIn setUser={setUser} user={user} logOut={logOut} />}
      />
      <Route path="/singup" element={<SingUp user={user} logOut={logOut} />} />

    </Routes>
  );
};
