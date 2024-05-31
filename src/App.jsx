import { Routes, Route } from "react-router-dom";
import Navbar from "./Components/User/Home/Navbar";
import Footer from "./Components/User/Home/Footer";
import NavbarAdmin from "./Components/Admin/Home/Navbar";
import DetailsPage from "./Pages/UserPage/DetailsPage";
import HomePage from "./Pages/UserPage/HomePage";
import WeddingPage from "./Pages/UserPage/WeddingPage";
import LoginPage from "./Pages/AdminPage/LoginPage";
import AddMid from "./Components/Admin/Mid/AddMid";
import AddHero from "./Components/Admin/Hero/AddHero";
import Wedding from "./Components/Admin/Wedding/Wedding";
import ListWedding from "./Components/Admin/Wedding/ListWedding";
import EditProduct from "./Components/Admin/Wedding/EditProduct";
import ContactPage from "./Pages/UserPage/ContactPage";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import ForgottenPasswordPage from "./Pages/AdminPage/ForgottenPasswordPage";
import ResetPage from "./Pages/AdminPage/ResetPage";
import ListSlides from "./Components/Admin/Hero/ListSlides";
import ListMid from "./Components/Admin/Mid/ListMid";
import ListInsta from "./Components/Admin/Instagram/ListInsta";
import ServicePage from "./Pages/UserPage/ServicePage";
import AuthContextProvider from "./Components/Admin/Context/AuthContext";
import PrivateRoute from "./Components/Admin/PrivateRoute";
import AboutPage from "./Pages/UserPage/AboutPage";
import ListService from "./Components/Admin/Servic/ListService";
import AddService from "./Components/Admin/Servic/AddService";
import EditService from "./Components/Admin/Servic/EditService";
import ListAbout from "./Components/Admin/About/Details/ListAbout";
import AddDetails from "./Components/Admin/About/Details/AddDetails";
import EditDetails from "./Components/Admin/About/Details/EditDetails";
import {
  LoadingProvider,
  useLoading,
} from "./Components/User/Context/LoadingContext";
import { useEffect } from "react";
import Loader from "./Components/Loader/Loader";

const App = () => {
  return (
    <div>
      <LoadingProvider>
        <Routes>
          <Route path="/" element={<Navbar />}>
            <Route
              index
              element={<LoadingWrapper component={<HomePage />} />}
            />
            <Route
              path="about"
              element={<LoadingWrapper component={<AboutPage />} />}
            />
            <Route
              path="service"
              element={<LoadingWrapper component={<ServicePage />} />}
            />
            <Route
              path="wedding"
              element={<LoadingWrapper component={<WeddingPage />} />}
            />
            <Route
              path="details/:weddingId"
              element={<LoadingWrapper component={<DetailsPage />} />}
            />
            <Route
              path="contact"
              element={<LoadingWrapper component={<ContactPage />} />}
            />
          </Route>
        </Routes>
      </LoadingProvider>

      {/* admin */}
      <AuthContextProvider>
        <Routes>
          <Route element={<PrivateRoute />}>
            <Route path="/reelman-admin" element={<NavbarAdmin />}>
              <Route index element={<ListSlides />} />
              <Route path="add-slide" element={<AddHero />} />
              <Route path="list-mid" element={<ListMid />} />
              <Route path="add-mid" element={<AddMid />} />
              <Route path="list-wedding" element={<ListWedding />} />
              <Route path="add-wedding" element={<Wedding />} />
              <Route path="edit-wedding/:id" element={<EditProduct />} />
              <Route path="list-insta" element={<ListInsta />} />
              <Route path="list-service" element={<ListService />} />
              <Route path="add-service" element={<AddService />} />
              <Route path="edit-service/:id" element={<EditService />} />
              <Route path="list-about" element={<ListAbout />} />
              <Route path="add-about" element={<AddDetails />} />
              <Route path="edit-about/:id" element={<EditDetails />} />
            </Route>
          </Route>
          <Route path="/login" element={<LoginPage />} />
          <Route
            path="/forgotten-password"
            element={<ForgottenPasswordPage />}
          />
          <Route path="/reset-password/:accessToken" element={<ResetPage />} />
        </Routes>
      </AuthContextProvider>
      <Footer />
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
        transition:Bounce
      />
    </div>
  );
};

const LoadingWrapper = ({ component }) => {
  const { loading, setLoading } = useLoading();

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, [setLoading]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <Loader />
      </div>
    );
  }

  return component;
};

export default App;
