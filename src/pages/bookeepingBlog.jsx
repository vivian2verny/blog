import React from 'react'
import Header from "../components/navBar";
import Replies from "../components/replies";
import BookeepingContent from '../components/bookeepingContent';
import NoTop from "../components/footerwithoutTop";

function BookeepingBlog() {
  return (
    <div> 
    <Header />
    <BookeepingContent />
    <Replies />
    <NoTop />
  </div>
  );
}

export default BookeepingBlog;