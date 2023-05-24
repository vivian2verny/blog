import React from "react";
import Header from "../components/navBar";
import Replies from "../components/replies";
import BlogfinanceContent from "../components/blogfinanceContent";
import NoTop from "../components/footerwithoutTop";

function FinanceBlog() {
  return (
    <div>
      <Header />
      <BlogfinanceContent />
      <Replies />
      <NoTop />
    
    </div>
  );
}

export default FinanceBlog;
