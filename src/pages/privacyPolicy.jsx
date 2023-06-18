import React from "react";
import Header from "../components/navBar";
import Privacybreadcrumb from "../components/privacybreadcrumb";
import Privacycontent from "../components/privacycontent";
import Footer from "../components/footer";

function PrivacyPolicy() {
  return (
    <div>
      <Header />
      <Privacybreadcrumb />
      <Privacycontent />
      <Footer />
    </div>
  );
}

export default PrivacyPolicy;
