import React from "react";
import { Accordion } from "react-bootstrap";
import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";
import Row from "react-bootstrap/Row";
import Tab from "react-bootstrap/Tab";

function Privacycontent() {
  return (
    <section className="bg-white support-faq">
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <Tab.Container id="left-tabs-example" defaultActiveKey="first">
              <Row className="mb-5">
                <Col sm={3}>
                  <Nav variant="pills" className="flex-column">
                    <Nav.Item className="my-3">
                      <Nav.Link eventKey="first"> Overview </Nav.Link>
                    </Nav.Item>
                    <Nav.Item className="mb-4">
                      <Nav.Link eventKey="second">
                        {" "}
                        Type of Data We Collect{" "}
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item className="mb-4">
                      <Nav.Link eventKey="third">
                        {" "}
                        Information Stackivy Receives When You Use Our
                        Technology{" "}
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item className="mb-4">
                      <Nav.Link eventKey="fourth">
                        {" "}
                        Information Stackivy Collects When You Use Our Services{" "}
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item className="mb-4">
                      <Nav.Link eventKey="fifth">
                        {" "}
                        Purpose Of Collection Of Personal Data{" "}
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item className="mb-4">
                      <Nav.Link eventKey="sixth">
                        {" "}
                        Our Legal Basis For Processing{" "}
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item className="mb-4">
                      <Nav.Link eventKey="seventh">
                        {" "}
                        How Stackivy Collects And Stores Your Personal
                        Information{" "}
                      </Nav.Link>
                    </Nav.Item>
                    {/* <Nav.Item className="mb-4"> */}
                    {/* <Nav.Link eventKey="eighth">Spaycemoon</Nav.Link> */}
                    {/* </Nav.Item> */}
                    <Nav.Item className="mb-4">
                      <Nav.Link eventKey="nineth">
                        {" "}
                        How Stackivy Shares Your Information{" "}
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item className="mb-4">
                      <Nav.Link eventKey="tenth">
                        Third Parties Access To Personal Data Collected By
                        Stackivy{" "}
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item className="mb-4">
                      <Nav.Link eventKey="eleventh"> Security </Nav.Link>
                    </Nav.Item>
                    <Nav.Item className="mb-4">
                      <Nav.Link eventKey="twelveth"> Your Rights </Nav.Link>
                    </Nav.Item>
                    <Nav.Item className="mb-4">
                      <Nav.Link eventKey="thirteen">
                        {" "}
                        International Transfer Of Your Data{" "}
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item className="mb-5">
                      <Nav.Link eventKey="fourteen">
                        {" "}
                        Changes To This Statement{" "}
                      </Nav.Link>
                    </Nav.Item>
                  </Nav>
                </Col>

                <Col sm={9}>
                  <Tab.Content className="mx-5">
                    <Tab.Pane eventKey="first">
                      <div>
                        <h2 className="my-3">Overview</h2>
                        <p>
                          This Privacy Statement explains the ways Stackivy
                          collects, uses, and shares personal information about
                          a user (“you”) in connection with your access to or
                          use of Stackivy’s websites and our products and
                          services (collectively, “Services”), and in connection
                          with any other information We (“Stackivy”) collect
                          when you interact with us.{" "}
                        </p>
                      </div>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                      <h2 className="my-3">Type of Data We Collect</h2>
                      <p>
                        Stackivy collects the information you directly provide,
                        such as the information you share when you create a
                        developer account, update your profile, fill out our
                        contact forms, sign up for our emails, request customer
                        support, enroll in billing, execute a services
                        agreement, complete a compliance questionnaire, or
                        otherwise communicate with us. The types of information
                        we collect from you include full name, email address,
                        company name, RC Number, address, phone number, driver’s
                        license, date of birth, taxpayer identification number,
                        and any other information you choose to provide.
                      </p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <h2 className="my-3">
                        Information Stackivy Receives When You Use Our
                        Technology
                      </h2>
                      <p>
                        You may provide us with login information for your bank
                        account or other financial account to test and evaluate
                        how our technology will appear and operate in your
                        applications. If you test our service in this way,
                        Stackivy collects information from your financial
                        account as further described in our [End-User Privacy
                        Statement].
                      </p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="fourth">
                      <h2 className="my-3">
                        Information Stackivy Collects When You Use Our Services
                      </h2>
                      <p>
                        When you use our Services, we automatically collect
                        information about you as follows:{" "}
                      </p>
                      <p>
                        Log Information: We collect log files when you use our
                        Services, which include the type of browser you use,
                        access times, pages viewed, and your IP address.{" "}
                      </p>
                      <p>
                        {" "}
                        Approximage Location: We derive the approximate location
                        of the device you use to access our Services from your
                        IP address.
                      </p>
                      <p>
                        Information Collected by Cookies and Other Tracking
                        Technologies: We use various technologies to collect
                        information when you use our Services, including cookies
                        and web beacons. Cookies are small data files stored by
                        your web browser, on your hard drive, or in device
                        memory that help us improve our Services and your
                        experience, determine usage of parts and features of our
                        Services, and monitor for and detect potential harmful
                        conduct Web beacons are electronic images that are used
                        in our Services or emails and help deliver cookies,
                        count visits, and understand usage and campaign
                        effectiveness. You can find more information about how
                        we use cookies and your related choices in our Cookie
                        Policy (Hyperlink Cookie Policy here).{" "}
                      </p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="fifth">
                      <div>
                        <h2 className="my-3">
                          {" "}
                          Purpose Of Collection Of Personal Data{" "}
                        </h2>
                        <p>
                          Stackivy collects and processes personal information
                          about you in a number of ways, including through your
                          use of our Services. We use that information:
                        </p>
                        <ul>
                          <li>
                            To carry on/operate, improve, and develop our
                            Services;{" "}
                          </li>
                          <li>
                            To verify the identity of you and other members of
                            your company;{" "}
                          </li>
                          <li>
                            To bill developers for our Services and to transmit
                            payment;{" "}
                          </li>
                          <li>
                            {" "}
                            To comply with law, such as for tax reporting
                            purposes;
                          </li>
                          <li>	To send you technical notices, updates, security alerts, and administrative messages; </li>
                          <li>	To respond to your comments, questions, inquiries, and customer service requests; </li>
                          <li> To help personalise the Services experience for you; </li>
                          <li>	To communicate with you about products, services, offers, and events offered or sponsored by Stackivy, and to provide news and other information we think may be of interest to you; </li>
                          <li>	To monitor and analyse trends, usage, and activities in connection with our Services; </li>
                          <li>	To try detecting and preventing fraud, malicious activity, and other illegal activities; </li>
                          <li> 	To protect the rights, privacy, safety, or property of Stackivy and others; and for any other purpose described to you when the information was collected. </li>
                        </ul>
                      </div>
                    </Tab.Pane>
                    <Tab.Pane eventKey="sixth">
                      <div>
                        <h2 className="my-4">
                          {" "}
                          Our Legal Basis For Processing{" "}
                        </h2>
                        <p>
                          Stackivy’s legal basis for processing your information
                          largely depends on the nature of the information and
                          the context in which we collected or processed it.
                          Stackivy will normally only collect and process your
                          information where:{" "}
                        </p>
                        <ul>
                          <li> You have given your consent to do so; </li>
                          <li>
                            We need to fulfill our responsibilities and
                            obligations in any contract or agreement with you
                            (for example, to comply with our services
                            agreements);{" "}
                          </li>
                          <li>
                            To comply with our legal obligations under
                            applicable law;{" "}
                          </li>
                          <li>
                            The processing is necessary for our legitimate
                            interests and not overridden by your data protection
                            interests or fundamental rights and freedoms (for
                            example, to safeguard our services; to communicate
                            with you; or to provide or update our services).{" "}
                          </li>
                        </ul>
                      </div>
                    </Tab.Pane>
                    <Tab.Pane eventKey="seventh">
                      <div>
                        <h2 className="my-4">
                          {" "}
                          How Stackivy Collects And Stores Your Personal
                          Information{" "}
                        </h2>
                        <p>
                          Stackivy collects information from you as part of the
                          registration or application process with us or in the
                          course of providing our services. Stackivy also
                          collects your personal information while monitoring
                          our technology tools and services, including our
                          websites and email communications sent to and from
                          Stackivy.
                        </p>
                      </div>
                    </Tab.Pane>
                    <Tab.Pane eventKey="eighth">
                      <div>
                        <h2 className="my-4">Our Legal Basis For Processing</h2>
                        <p>
                          Stackivy’s legal basis for processing your information
                          largely depends on the nature of the information and
                          the context in which we collected or processed it.
                          Stackivy will normally only collect and process your
                          information where:{" "}
                        </p>
                        <ul>
                          <li> You have given your consent to do so; </li>
                          <li>
                            We need to fulfill our responsibilities and
                            obligations in any contract or agreement with you
                            (for example, to comply with our services
                            agreements);{" "}
                          </li>
                          <li>
                            To comply with our legal obligations under
                            applicable law;{" "}
                          </li>
                          <li>
                            The processing is necessary for our legitimate
                            interests and not overridden by your data protection
                            interests or fundamental rights and freedoms (for
                            example, to safeguard our services; to communicate
                            with you; or to provide or update our services).{" "}
                          </li>
                        </ul>
                      </div>
                    </Tab.Pane>

                    <Tab.Pane eventKey="nineth">
                      <div>
                        <h2 className="my-4">
                          How Stackivy Shares Your Information{" "}
                        </h2>
                        <p>
                          Stackivy shares information about you as follows or as
                          otherwise described in this Privacy Statement:{" "}
                        </p>
                        <ul>
                          <li>
                            With Stackivy service providers, partners,
                            contractors, or vendors, including collection
                            agencies in the event of delinquent payments from
                            our developers;{" "}
                          </li>
                          <li>
                            If Stackivy believes in good faith that disclosure
                            is appropriate to comply with applicable law,
                            regulation, or legal process (such as a court order
                            or subpoena), including in connection with requests
                            from law enforcement or other governmental
                            authorities;{" "}
                          </li>
                          <li>
                            If Stackivy believes in good faith that disclosure
                            is appropriate to comply with applicable law,
                            regulation, or legal process (such as a court order
                            or subpoena), including in connection with requests
                            from law enforcement or other governmental
                            authorities;{" "}
                          </li>
                        </ul>
                        <p>
                          In connection with a change in ownership or control of
                          all or part of our business (such as a merger,
                          acquisition, reorganisation, or bankruptcy);{" "}
                        </p>
                        <ul>
                          <li>
                            Between and among Stackivy and its current and
                            future parents, affiliates, subsidiaries and other
                            companies under common control or ownership; and{" "}
                          </li>
                          <li>With your consent or at your direction. </li>
                        </ul>
                        <p>
                          {" "}
                          Stackivy also collects, uses, and shares aggregated or
                          anonymised information for any purpose permitted under
                          applicable law.
                        </p>
                      </div>
                    </Tab.Pane>

                    <Tab.Pane eventKey="tenth">
                      <div>
                        <h2 className="my-3">
                          {" "}
                          Third Parties Access To Personal Data Collected By
                          Stackivy{" "}
                        </h2>
                        <p>
                          Stackivy may share your personal information with
                          certain trusted third parties in accordance with
                          contractual arrangements with those entities,
                          including:{" "}
                        </p>
                        <ul>
                          <li>Our professional advisers and auditors; </li>
                          <li>
                            External professional IT service providers such as
                            Cloud Storage Providers, Data Hosting Platforms etc;
                            and{" "}
                          </li>
                          <li>
                            {" "}
                            Third parties engaged in the course of providing
                            services to you with their prior consent.
                          </li>
                        </ul>
                        <p>
                          Where necessary, or for the reasons set out in our
                          policy, personal information may also be shared with
                          regulatory authorities, courts, tribunals, government
                          agencies, and law enforcement agencies.{" "}
                        </p>
                        <p>
                          Stackivy may also be required to disclose your
                          information to comply with legal or regulatory
                          requirements. Stackivy will use reasonable endeavours
                          to notify you before this happens, unless we are
                          legally restricted from doing so.{" "}
                        </p>
                      </div>
                    </Tab.Pane>
                    <Tab.Pane eventKey="eleventh">
                      <div>
                        <h2 className="my-3">Security </h2>
                        <p>
                          Stackivy stores information collected at licensed and
                          secured locations. Stackivy also uses a variety of
                          technical and organisational measures to help protect
                          your personal information from unauthorised access,
                          use, disclosure, alteration or destruction consistent
                          with applicable data protection laws, guidelines, and
                          standards
                        </p>
                      </div>
                    </Tab.Pane>
                    <Tab.Pane eventKey="twelveth">
                      <div>
                        <h2 className="my-4">Your Rights</h2>
                        <p>
                          {" "}
                          The Constitution of the Federal Republic of Nigeria
                          1999 (as Amended), the Nigeria Data Protection
                          Regulation 2019, and other applicable data protection
                          laws provide certain rights for you.
                        </p>
                        <p>
                          You are entitled to request details of the information
                          we hold about you and how we process it. You have the
                          right to have your personal data rectified or
                          erased/deleted, restrict our processing of that
                          information, to stop transfers of your personal
                          information to a third party and, in some
                          circumstances, to have personal information relating
                          to you transferred to another service
                          provider/organisation. You also have the right to
                          lodge a complaint concerning Stackivy’s processing of
                          your personal information with a regulatory authority.{" "}
                        </p>
                        <p>
                          If you object to the processing of your personal
                          information, or if you have provided your consent to
                          processing and you later choose to withdraw it, we
                          will respect that choice in accordance with our legal
                          obligations.{" "}
                        </p>
                        <p>
                          {" "}
                          Please note that even after you have chosen to
                          withdraw your consent, we may be able to continue to
                          process your personal information to the extent
                          required or otherwise permitted by law, particularly
                          in connection with exercising and defending our legal
                          rights or meeting our legal and regulatory
                          obligations.
                        </p>
                        <p>
                          Please note that even after you have chosen to
                          withdraw your consent, we may be able to continue to
                          process your personal information to the extent
                          required or otherwise permitted by law, particularly
                          in connection with exercising and defending our legal
                          rights or meeting our legal and regulatory
                          obligations.{" "}
                        </p>
                        <p>
                          For any of such request in pursuance of such rights,
                          please email us at:{" "}
                          <mail>stackivyafrica@gmail.com</mail>{" "}
                        </p>
                      </div>
                    </Tab.Pane>
                    <Tab.Pane eventKey="thirteen">
                      <div>
                        <h2 className="my-4"> International Transfer Of Your Data</h2>
                        <p>
                          The information we collect about you may be
                          transferred, used, or stored in any country where we
                          have operations or where we engage service providers.
                          That means that your information may be transferred to
                          a different country than where it was collected and
                          which may not provide equivalent levels of data
                          protection as Nigeria.{" "}
                        </p>
                        <p>
                          The level of Data protection in countries outside
                          Nigeria may be less than that offered within Nigeria.
                          Where this is the case, Stackivy will implement
                          appropriate measures to ensure that your personal
                          information remains protected and secure in accordance
                          with applicable data protection laws, guidelines, and
                          standards in Nigeria at the least. Nigerian standard
                          contractual clauses are in place between all Stackivy
                          entities that share and process personal data.{" "}
                        </p>
                        <p>
                          Where our third-party service providers process
                          personal data outside Nigeria in the course of
                          providing services to us, our written agreement with
                          them will include appropriate measures, usually
                          standard contractual clauses on data sharing in
                          accordance with prevailing local and international
                          standards.{" "}
                        </p>
                      </div>
                    </Tab.Pane>
                    <Tab.Pane eventKey="fourteen" className="mb-5">
                      <div>
                        <h2 className="my-4">Changes To This Statement</h2>
                        <p>
                          Stackivy may change this Privacy Statement
                          periodically. If we make changes, we will notify you
                          by updating the effective date at the top of this
                          Statement. Stackivy may also provide notice of any
                          changes through other means, such as placing a notice
                          on our homepage at --- or sending you an email.
                          Stackivy encourages you to review the Privacy
                          Statement whenever you access the Services or
                          otherwise interact with Stackivy, to stay informed
                          about our data practices and the choices available to
                          you.
                        </p>
                      </div>
                    </Tab.Pane>
                  </Tab.Content>
                </Col>
              </Row>
            </Tab.Container>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Privacycontent;
