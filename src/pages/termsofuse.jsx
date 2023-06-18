import React from 'react'
import Header from "../components/navBar";
import TermsofuseBreadcrumb from '../components/termsofuseBreadcrumb';
import TermsofuseContent from '../components/termsofuseContent';
import Footer from "../components/footer";

function Termsofuse() {
  return (
    <div>
      <Header />
      <TermsofuseBreadcrumb />
      <TermsofuseContent />
      <Footer />
    </div>
  )
}

export default Termsofuse;