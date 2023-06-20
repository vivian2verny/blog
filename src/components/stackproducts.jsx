import React from "react";

import pic from "../assets/finpic.svg";
import wot from "../assets/Get More  (1).svg";
import facebook from "../assets/blogfacebook.svg";
import linkedin from "../assets/blog linkedin.svg";
import twitter from "../assets/blog twitter.svg";
import { Icon } from "@iconify/react";

function Stackproducts() {
  return (
    <section className="finance-content">
      <div className="container">
        <div className="row mt-5">
          <div className="col-md-12">
            <div className="row justify-content-center">
              <div className="col-md-9 ">
                <div className="text-center mt-5 mb-4">
                  <p className="mb-3 mt-5 "> Guides </p>

                  <h2>
                    Stackivy Products that help you with your personal financial
                    goals
                  </h2>
                  <div className="d-flex align-items-start justify-content-center my-4">
                    {" "}
                    <img src={pic} alt="" className="img-fluid mx-2" />{" "}
                    <p>
                      {" "}
                      Tochukwu Tabansi{" "}
                      <p>
                        {" "}
                        <span> 10 Feb 2023</span>{" "}
                      </p>
                    </p>{" "}
                  </div>
                </div>
              </div>
            </div>
            <div className="row justify-content-center">
              <div className="col-md-12">
                <div className="text-center my-3">
                   {/* <img src={man} alt="" className="img-fluid w-100" />  */}
                </div>
              </div>
            </div>
            <div className="row justify-content-center">
              <div className="col-md-9">
                <div className="finalback my-5">
                  <p>
                    Stackivy is a comprehensive financial platform designed to
                    empower you to manage your personal and business finances
                    like never before.
                  </p>
                  <p>
                    Our platform offers intuitive tools specifically tailored to
                    meet your personal finance needs. We've got you covered,
                    from budgeting and expense tracking to goal setting and
                    investment management. With Stackivy, you can clearly
                    understand your income, expenses, and savings and make
                    informed decisions to achieve your financial goals.
                  </p>
                  <p>
                    This guide highlights some of the tools tailored to your
                    financial well-being.
                  </p>
                </div>
              </div>
            </div>
            <hr></hr>
            <div className="row justify-content-center">
              <div className="col-md-9">
                <div className=" my-5">
                  <h4 className="my-4">Keed</h4>
                  {/* <img src={kid} alt="" className="img-fluid w-100" /> */}
                  <h6>
                    Keed is a financial learning platform for kids and children
                    between the ages of 5 and 11. The platform is geared towards
                    training and enabling young children to take responsibility
                    early, giving them a head start on financial freedom.
                  </h6>
                  <h6>
                    While anyone, anywhere, and at any age can start the journey
                    to financial freedom, starting early gives your child a
                    unique advantage.
                  </h6>
                  <h4 className="my-4"> Ardilla</h4>
                  {/* <img src={ard} alt="" className="img-fluid w-100" />  */}
                  <h6>
                    Anyone can aspire to financial freedom, and with Ardilla,
                    Stackivy embodies that belief. Ardilla opens up the world of
                    finance to everyone across the continent of Africa.
                  </h6>
                  <h6>
                    On Ardilla, anyone has a chance at financial freedom, from
                    the lower income class to the working class to the 1%. The
                    platform offers many financial management services,
                    including savings, investment, budgeting, insurance,
                    financial learning platform, and financial coaches or
                    advisors.
                  </h6>
                  <h6>
                    {" "}
                    We understand wealth building can be boring and tasking even
                    though the rewards are great. However, on Ardilla, we have
                    made it fun by integrating an interactive ranking system.
                    Check it out!
                  </h6>
                  <h4 className="my-4">Pomelo</h4>
                  {/* <img src={pom} alt="" className="img-fluid w-100" />  */}
                  <h6>
                    {" "}
                    Ever tried to pay for a product online only to find out the
                    payment options do not favour you? Stackivy's{" "}
                    <a href=" https://stackivy.africa/"> pomelo</a> is your
                    answer. The payment gateway offers payment solutions
                    facilitating transactions and payments. Now you have more
                    payment options at your disposal, making your shopping
                    easier and smoother.
                  </h6>
                  <h6>
                  Pomelo payment options include e-wallets, mobile payments, QR codes, and mobile payments. Pomelo also works perfectly for online and in-store payments.

                  </h6>

                  <h4 className="my-4">Hargon</h4>
                  {/* <img src={har} alt="" className="img-fluid w-100" />  */}
                  <h6>
                    {" "}
                    <a href="https://stackivy.africa/hargon"> Hargon</a>is a
                    credit platform offering lending solutions for your personal
                    needs. On Hargon, you can get loans quickly or buy from our
                    e-commerce platform and many vendors using the buy now, pay
                    later option.
                  </h6>
                  <h6>
                    With Hargon, you can rest assured that you have a financial
                    partner who always has your back in every situation.
                  </h6>
                  <h4 className="my-4"> Nearly</h4>
                  {/* <img src={ner} alt="" className="img-fluid w-100" />  */}
                  <h6>
                    Our Internet network is the bedrock of mobile banking, but
                    let's face it, it can be deplorable, especially in remote
                    regions. This shouldn't hinder or stop you though. With
                    Nearly, you can now bank on the go, sending and receiving
                    money to and from anyone anywhere using its mobile money
                    platform
                  </h6>
                  <h6>
                    <a href="https://stackivy.africa/"> Nearly</a>is designed to bypass network challenges, ensuring
                    your loved ones or projects in remote regions are properly
                    attended to, irrespective of network conditions.
                  </h6>

                  <h4 className="my-4"> Zettarh</h4>
                  {/* <img src={zeh} alt="" className="img-fluid w-100" />  */}
                  <h6>
                    Cryptocurrencies are transforming money and driving several
                    innovations across the globe, especially in Africa. With
                    this push for digital money, more people are making it a
                    payment option.
                  </h6>
                  <h6>You can be one of those too.</h6>
                  <h6>
                    <a href="https://stackivy.africa/">Zettarh
                        </a> is a trading and payment platform that helps
                    individuals and businesses buy, sell, and invest digital
                    currencies and foreign exchange.
                  </h6>

                  <hr></hr>
                  <hr></hr>
                  <h6 className="my-5">
                    {" "}
                    Don't let financial management overwhelm you. Start your
                    journey towards better personal finances today with our
                    comprehensive financial platform. Our platform gives you the
                    tools to make informed decisions, optimize your spending,
                    and pave the way towards financial freedom.
                  </h6>

                  <div className="row mt-5">
                    <div className="col-md-6">
                      <button className="btn next-blog  " type="button">
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
                    <div className="col-md-6 text-end ">
                      <div className="">
                        <button className="btn next-blog">
                          {" "}
                          <Icon icon="bx:link" className="mx-1" /> Copy Link
                        </button>{" "}
                        <a href="https://www.facebook.com">
                          <img src={facebook} alt="facebook" className="" />
                        </a>{" "}
                        <a href="https://www.twitter.com">
                          <img src={twitter} alt="twitter" className="" />
                        </a>{" "}
                        <a href="https://www.linkedin.com">
                          <img src={linkedin} alt="linkedin" className="" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="row justify-content-center mb-5">
              <div className="col-md-9">
                <div className="finalback my-5 text-center">
                  <img src={wot} alt="" className="img-fluid w-50 rounded" />
                  <p className="mt-3">
                    {" "}
                    Enter your email to get informations directly to you
                  </p>
                  <div className="row justify-content-center">
                    <div className="col-sm-4 text-center">
                      <div className="subscribe">
                        <div className="input-group">
                          <input
                            type="email"
                            className="form-control"
                            placeholder="Enter your email"
                          />
                          <span className="input-group-btn">
                            <button className="btn" type="button">
                              Subscribe
                            </button>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Stackproducts;
