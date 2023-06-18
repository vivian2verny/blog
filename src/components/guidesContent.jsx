import React from "react";
import { Link } from "react-router-dom";
import man from "../assets/Steps.png";
import woh from "../assets/Steps to  (1).png";
import pend from "../assets/Frame 10037.png";
import pen from "../assets/Frame 10039.png";
import app from "../assets/Frame 10038.png";
import one from "../assets/Frame 10040.png";
import snap from "../assets/apping.png";
import { Icon } from "@iconify/react";

function GuidesContent() {
  return (
    <section className="finance-content">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="row justify-content-center my-4">
              <div className="col-md-12">
                <div className="text-center my-5">
                  <h6 className="mt-5">STACKIVY GUIDES </h6>
                  <h5> Check out our guides for informations</h5>
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
                      src={app}
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
                    <Link to="/guides/secureloan">
                      <h3 className="my-3">
                        5 Steps to secure loans on Stackivy
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
                      src={pend}
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
                   <Link to="/guides/customapplication">
                   <h3 className="my-3">
                      {" "}
                      Steps to Building A Custom Application For Your Business
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
                      src={pen}
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
                   <Link to="/guides/maximiseproduct">
                   <h3 className="my-3">
                      {" "}
                      How to maximise your use of Stackivy Products
                    </h3>
                   </Link>
                    <div className="">
                      <button
                        className="btn next-blog  rounded-pill "
                        type="button"
                      >
                        {" "}
                        E-commerce{" "}
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
                      Steps to implement Stackivy's payment solution{" "}
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
                  <div className="col-md-4 mb-3">
                    <img
                      src={snap}
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
                      Stackivy products that help you with personal financial
                      goals
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
                      {" "}
                      Steps to implement Stackivy's payment solution
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
                      {" "}
                      How to apply for a personal loan on Stackivy{" "}
                    </h3>
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
                      {" "}
                      How to apply for a business loan on Stackivy{" "}
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
                        Bookeeping{" "}
                      </button>
                    </div>
                  </div>
                  <div className="col-md-4 mb-3">
                    <img
                      src={snap}
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
                      How to apply for a business loan on Stackivy
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
              <div className=""> <Icon icon="ic:baseline-arrow-back" /> Previous
              </div>
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

              <div className=""> Next <Icon icon="teenyicons:arrow-right-solid" /></div>
              {/* </div> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default GuidesContent;
