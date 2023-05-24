import React from "react";
import { Link } from "react-router-dom";
import woh from "../assets/How mobile 2.svg";
import man from "../assets/finman.svg";
import five from "../assets/apping.png";
import one from "../assets/comp.png";
import six from "../assets/ben.png";
import seven from "../assets/coin.png";
import nine from "../assets/roll.png";
import ten from "../assets/AI.png";
import two from "../assets/screren.png";
import arry from "../assets/ATM.png";
import fin from "../assets/FINTECH.png";

function BlogContent() {
  return (
    <section className="finance-content">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="row justify-content-center my-4">
              <div className="col-md-12">
                <div className="text-center my-5">
                  <h6 className="mt-5">The Blog </h6>
                  <h5> Check out our blogs for informations</h5>
                  <img src={man} alt="" className="img-fluid mt-5 w-100" />
                  <div className=" d-flex justify-content-start  my-4">
                    {" "}
                    <p>
                      <span>
                        {" "}
                        Tochukwu Tabansi{" "}
                        <span className="mx-3"> 2 hours ago</span>{" "}
                      </span>{" "}
                    </p>
                  </div>

                  <div className="row ">
                    <div className="col-md-9">
                      <div className="text-start ">
                        <img
                          src={woh}
                          alt=""
                          className="img-fluid w-100  rounded"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 my-4 text-start">
                    <button
                      className="btn next-blog  rounded-pill "
                      type="button"
                    >
                      {" "}
                      Finance{" "}
                    </button>
                    <button
                      className="btn next-blog rounded-pill mx-3"
                      type="button"
                    >
                      {" "}
                      Finance{" "}
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-md-12">
                <div className="row  justify-content-center mt-5">
                  <div className="col-md-4 mb-3">
                    <img
                      src={five}
                      alt="testimonial"
                      className="img-fluid w-100 mb-3"
                    />
                    <p>
                      <span>
                        {" "}
                        Tochukwu Tabansi
                        <span className="mx-3"> 2 hours ago</span>{" "}
                      </span>{" "}
                    </p>
                    <Link to="/bookeepingcontent">
                      <h3 className="my-3">
                        4 reasons why your business needs a Bookeeping
                        applications
                      </h3>
                    </Link>
                    <div className="">
                      <button
                        className="btn next-blog  rounded-pill "
                        type="button"
                      >
                        {" "}
                        Finance{" "}
                      </button>
                      <button
                        className="btn next-blog rounded-pill mx-3"
                        type="button"
                      >
                        {" "}
                        Bookeeping{" "}
                      </button>
                    </div>
                  </div>
                  <div className="col-md-4 mb-3">
                    <img
                      src={six}
                      alt="testimonial"
                      className="img-fluid w-100 mb-3"
                    />
                    <p>
                      <span>
                        {" "}
                        Tochukwu Tabansi{" "}
                        <span className="mx-3"> 2 hours ago</span>{" "}
                      </span>{" "}
                    </p>

                    <Link to="/payplatformcontent">
                      <h3 className="my-3">
                        {" "}
                        Benefits and Challenges of using payment platforms
                      </h3>
                    </Link>
                    <div className="">
                      <button
                        className="btn next-blog  rounded-pill "
                        type="button"
                      >
                        {" "}
                        E-commerce
                      </button>
                      <button
                        className="btn next-blog rounded-pill mx-3"
                        type="button"
                      >
                        {" "}
                        Finance{" "}
                      </button>
                    </div>
                  </div>
                  <div className="col-md-4 mb-3">
                    <img
                      src={seven}
                      alt="testimonial"
                      className="img-fluid w-100 mb-3"
                    />
                    <p>
                      <span>
                        {" "}
                        Tochukwu Tabansi{" "}
                        <span className="mx-3"> 2 hours ago</span>{" "}
                      </span>{" "}
                    </p>
                    <Link to="/blogcryptocontent">
                      <h3 className="my-3">Is Crypto the Future of Finance </h3>
                    </Link>
                    <div className="">
                      <button
                        className="btn next-blog  rounded-pill "
                        type="button"
                      >
                        {" "}
                        Crypto{" "}
                      </button>
                      <button
                        className="btn next-blog rounded-pill mx-3"
                        type="button"
                      >
                        {" "}
                        Finance{" "}
                      </button>
                    </div>
                  </div>
                </div>
                <div className="row  justify-content-center mt-5">
                  <div className="col-md-4 mb-3">
                    <img
                      src={arry}
                      alt="testimonial"
                      className="img-fluid w-100 mb-3"
                    />
                    <p>
                      <span>
                        {" "}
                        Tochukwu Tabansi
                        <span className="mx-3"> 2 hours ago</span>{" "}
                      </span>{" "}
                    </p>
                    <Link to="/blogfinancecontent">
                      <h3 className="my-3">
                        Impact of mobile banking on commerce in Africa
                      </h3>
                    </Link>
                    <div className="">
                      <button
                        className="btn next-blog  rounded-pill "
                        type="button"
                      >
                        {" "}
                        Finance{" "}
                      </button>
                      <button
                        className="btn next-blog rounded-pill mx-3"
                        type="button"
                      >
                        {" "}
                        E-commerce{" "}
                      </button>
                    </div>
                  </div>
                  <div className="col-md-4 mb-3">
                    <img
                      src={two}
                      alt="testimonial"
                      className="img-fluid w-100 mb-3"
                    />
                    <p>
                      <span>
                        {" "}
                        Tochukwu Tabansi
                        <span className="mx-3"> 2 hours ago</span>{" "}
                      </span>{" "}
                    </p>
                    <h3 className="my-3">
                      {" "}
                      Using AI to transform bookkeeping for companies
                    </h3>
                    <div className="">
                      <button
                        className="btn next-blog  rounded-pill "
                        type="button"
                      >
                        {" "}
                        E-commerce
                      </button>
                      <button
                        className="btn next-blog rounded-pill mx-3"
                        type="button"
                      >
                        {" "}
                        Finance{" "}
                      </button>
                    </div>
                  </div>
                  <div className="col-md-4 mb-3">
                    <img
                      src={fin}
                      alt="testimonial"
                      className="img-fluid w-100 mb-3"
                    />
                    <p>
                      <span>
                        {" "}
                        Tochukwu Tabansi{" "}
                        <span className="mx-3"> 2 hours ago</span>{" "}
                      </span>{" "}
                    </p>
                    <h3 className="my-3">
                      {" "}
                      How Open banking can help fintech build better financial
                      solutions{" "}
                    </h3>
                    <div className="">
                      <button
                        className="btn next-blog  rounded-pill "
                        type="button"
                      >
                        {" "}
                        Crypto{" "}
                      </button>
                      <button
                        className="btn next-blog rounded-pill mx-3"
                        type="button"
                      >
                        {" "}
                        Finance{" "}
                      </button>
                    </div>
                  </div>
                </div>
                <div className="row  justify-content-center my-5">
                  <div className="col-md-4 mb-3">
                    <img
                      src={nine}
                      alt="testimonial"
                      className="img-fluid w-100 mb-3"
                    />
                    <p>
                      <span>
                        {" "}
                        Tochukwu Tabansi
                        <span className="mx-3"> 2 hours ago</span>{" "}
                      </span>{" "}
                    </p>
                    <h3 className="my-3">What is financial freedom </h3>
                    <div className="col-sm">
                      <button
                        className="btn next-blog  rounded-pill "
                        type="button"
                      >
                        {" "}
                        Finance{" "}
                      </button>
                      <button
                        className="btn next-blog rounded-pill mx-3"
                        type="button"
                      >
                        {" "}
                        Wealth managment{" "}
                      </button>
                    </div>
                  </div>
                  <div className="col-md-4 mb-3">
                    <img
                      src={ten}
                      alt="testimonial"
                      className="img-fluid w-100 mb-3"
                    />
                    <p>
                      <span>
                        {" "}
                        Tochukwu Tabansi{" "}
                        <span className="mx-3"> 2 hours ago</span>{" "}
                      </span>{" "}
                    </p>
                    <h3 className="my-3">How to invest in crypto </h3>
                    <div className="">
                      <button
                        className="btn next-blog  rounded-pill "
                        type="button"
                      >
                        {" "}
                        Finance{" "}
                      </button>
                      <button
                        className="btn next-blog rounded-pill mx-3"
                        type="button"
                      >
                        {" "}
                        Bookeeping{" "}
                      </button>
                    </div>
                  </div>
                  <div className="col-md-4 mb-3">
                    <img
                      src={one}
                      alt="testimonial"
                      className="img-fluid w-100 mb-3"
                    />
                    <p>
                      <span>
                        {" "}
                        Tochukwu Tabansi{" "}
                        <span className="mx-3"> 2 hours ago</span>{" "}
                      </span>{" "}
                    </p>
                    <h3 className="my-3">
                      5 best payment methods for an E-commerce site{" "}
                    </h3>
                    <div className="">
                      <button
                        className="btn next-blog  rounded-pill "
                        type="button"
                      >
                        {" "}
                        Finance{" "}
                      </button>
                      <button
                        className="btn next-blog rounded-pill mx-3"
                        type="button"
                      >
                        {" "}
                        E-commerce{" "}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className=" d-flex flex-row  justify-content-between my-5 ">
              {/* <div className="col-md-9"> */}
              <div className=""> Previous </div>
              <div className="">
                <ul class="pagination ">
                  <button class="btn-item mx-1">
                    <a class="plink" href="#">
                      1
                    </a>
                  </button>

                  <button className="btn-item2">
                    <a class="pg-link" href="#">
                      2
                    </a>
                  </button>
                </ul>
              </div>

              <div className=""> Left </div>
              {/* </div> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default BlogContent;
