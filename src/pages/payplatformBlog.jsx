import React from 'react'
import Header from "../components/navBar";
import Replies from "../components/replies";
import PayplatformContent from '../components/payplatformContent';
import NoTop from "../components/footerwithoutTop";

function PayplatformBlog() {
  return (
    <div> 
      <Header />
      <PayplatformContent />
      <Replies />
      <NoTop />
    </div>
  );
}

export default PayplatformBlog;