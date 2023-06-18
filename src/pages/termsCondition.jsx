import React from "react";
import Header from "../components/navBar";
import TermsBreadcrumb from "../components/termsBreadcrumb";
import Termscondcontent from "../components/termscondcontent";
import Footer from "../components/footer";

function TermsCondition() {
  return (
    <div>
      <Header />
      <TermsBreadcrumb />
      <Termscondcontent />
      <Footer />
    </div>
  );
}

export default TermsCondition;
