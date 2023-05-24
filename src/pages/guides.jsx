import React from 'react'
import Header from "../components/navBar";
import GuidesContent from '../components/guidesContent';
import NoTop from "../components/footerwithoutTop";


function Guides() {
  return (
    <div> 
      <Header />
      <GuidesContent />
      <NoTop />
    </div>
  );
}

export default Guides;