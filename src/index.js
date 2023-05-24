import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import "./App.css";
import "animate.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import ThemeProvider from "react-bootstrap/ThemeProvider";
import Ardilla from "./pages/ardilla";
import Hargon from "./pages/hargon";
import Budgeting from "./pages/budgeting";
import FinancialEducation from "./pages/financialEducation";
import Wealth from "./pages/wealthManagement";
import CrossBorder from "./pages/crossBorderPayment";
import Pomelo from "./pages/pomelo";
import Crypto from "./pages/crypto";
import MicroFinance from "./pages/microFinance";
import MobileMoney from "./pages/mobilemoney";
import FinanceBlog from "./pages/financeBlog";
import CryptoBlog from "./pages/cryptoBlog";
import BookeepingBlog from "./pages/bookeepingBlog";
import MaximiseGuides from "./pages/maximiseGuides";
import CustomGuides from "./pages/customGuides";
import Blogs from "./pages/blogs";
import PayplatformBlog from "./pages/payplatformBlog";
import Lending from "./pages/lending";
import ScrollToTop from "./scrollToTop";
import CustomMade from "./pages/custom";
import BookKeep from "./pages/bookKeeping";
import OpenBanking from "./pages/openBanking";
import HealthCare from "./pages/healthCare";
import Ecommerce from "./pages/ecommerce";
import Education from "./pages/education";
import Food from "./pages/food";
import HR from "./pages/hr";
import TermsCondition from "./pages/termsCondition";
import Guides from "./pages/guides";
import SecureloanGuides from "./pages/secureloanGuides";



// import ScrollToTop from 'scroll-to-top-react-router'

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ThemeProvider
    breakpoints={["xxxl", "xxl", "xl", "lg", "md", "sm", "xs", "xxs"]}
    minBreakpoint="xxs"
  >
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<App />}></Route>
        <Route path="/ardilla" element={<Ardilla />}></Route>
        <Route path="/hargon" element={<Hargon />}></Route>
        <Route path="/budgeting-tools" element={<Budgeting />}></Route>
        <Route
          path="/financial-education"
          element={<FinancialEducation />}
        ></Route>
        <Route path="/wealth-management" element={<Wealth />}></Route>
        <Route path="/cross-border" element={<CrossBorder />}></Route>
        <Route path="/payment-gateway" element={<Pomelo />}></Route>
        <Route path="/cryptocurrency" element={<Crypto />}></Route>
        <Route path="/microfinance" element={<MicroFinance />}></Route>
        <Route path="/mobile-money" element={<MobileMoney />}></Route>
        <Route path="/lending" element={<Lending />}></Route>
        <Route path="/custom-made" element={<CustomMade />}></Route>
        <Route path="/book-keeping" element={<BookKeep />}></Route>
        <Route path="/open-banking" element={<OpenBanking />}></Route>
        <Route path="/healthcare" element={<HealthCare />}></Route>
        <Route path="/ecommerce" element={<Ecommerce />}></Route>
        <Route path="/education" element={<Education />}></Route>
        <Route path="/food" element={<Food />}></Route>
        <Route path="/human-resources" element={<HR />}></Route>
        <Route path="/blogfinancecontent" element={<FinanceBlog />}></Route>
        <Route path="/payplatformcontent" element={<PayplatformBlog />}></Route>
        <Route path="/blogcryptocontent" element={<CryptoBlog />}></Route>
        <Route path="/bookeepingcontent" element={<BookeepingBlog />}></Route>
        <Route path="/blogcontent" element={<Blogs />}></Route>
        <Route path="/customapplicationcontent" element={<CustomGuides />}></Route>
        <Route path="/maximiseproductcontent" element={<MaximiseGuides />}></Route>
        <Route path="/secureloancontent" element={<SecureloanGuides />}></Route>
        <Route path="/guidescontent" element={<Guides />}></Route>
        <Route path="/termscondcontent" element={<TermsCondition />}></Route>
        {/* <Route path="/bookeepingcontent" element={<BlogContent />}></Route> */}
        {/* <Route path="/payplatformcontent" element={<BlogContent />}></Route> */}
        {/* <Route path="/blogfinancecontent" element={<BlogContent />}></Route> */}
        {/* <Route path="/blogcryptocontent" element={<BlogContent />}></Route>
        a */}
       
       
       
       
       
       
       
       
       
       
      </Routes>
    </BrowserRouter>
  </ThemeProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
