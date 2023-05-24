import React from 'react'
import Header from "../components/navBar";
import Replies from "../components/replies";
import BlogcryptoContent from '../components/blogcryptoContent';
import NoTop from "../components/footerwithoutTop";

function CryptoBlog() {
  return (
    <div> 
      <Header />
      <BlogcryptoContent />
      <Replies />
      <NoTop />
    </div>
  );
}




export default CryptoBlog;