import React from 'react'
import Header from "../components/navBar";
import BlogContent from '../components/blogContent';
import NoTop from "../components/footerwithoutTop";

function Blogs() {
  return (
    <div> 
      <Header />
      <BlogContent />
      <NoTop />
    </div>
  );
}

export default Blogs;