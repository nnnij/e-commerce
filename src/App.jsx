import { Container } from "react-bootstrap";
import HomePage from "./Pages/HomePage";
import TopNave from "./Component/Home/TopNave";
import NavBar from "./Component/Utilitis/NavBar";
import Footer from "./Component/Utilitis/Footer";
import { Routes, Route } from "react-router-dom";
import CartPage from "./Pages/CartPage/CartPage";
import FavoritesPage from "./Pages/FavoritesPage/FavoritesPage";
import LgeinPage from "./Pages/AuthPage/LoginPage";
import LgeonPage from "./Pages/AuthPage/LogonPage";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";

function App() {

  // to specefy direction with language:
  const {i18n} = useTranslation();

  useEffect(()=>{
    document.documentElement.lang = i18n.language;
    document.documentElement.dir = i18n.language === 'ar'?'rtl':'ltr';
  },[i18n.language])

  const location = useLocation(); // هون منعرف وين المستخدم حالياً
  // الشرط: إذا كان بالـ login page
  const hideLayoutPaths = ["/login", "/logon"];
  const isAuthPage = hideLayoutPaths.includes(location.pathname);

  return (
    <div>
      <Container fluid>
        <TopNave />
        {!isAuthPage && <NavBar />}
        <Routes>
          <Route index element={<HomePage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/favorites" element={<FavoritesPage />} />
          
          <Route path="/login" element={<LgeinPage />} />
          <Route path="/logon" element={<LgeonPage />} />
        </Routes>
      </Container>
      {!isAuthPage && <Footer />}
    </div>
  );
}

export default App;
