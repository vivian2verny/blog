import ob from "../assets/repam.svg";
import obj from "../assets/reppm.svg";
import React, { useState } from 'react';
// import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Collapse from 'react-bootstrap/Collapse';
import { Form } from "react-bootstrap";

function Replies () {
  const [open, setOpen] = useState(false);
  const handleClose = () => setOpen(false)
  return (
    <section className="replies">
      <div className="container">
        <div className="row justify-content-center my-5">
          <div className="col-md-8">
            <h3>Comments<span>(2)</span></h3>
            <div className="mt-2">
              <div className="d-flex flex-row">
                <img src={ob} alt="ob" className="img-fluid" />
                <div className="ms-4 mt-5">
                  <h6>Oshinowo Bola <span className="ms-4">December 15, 2022 at 10:00AM</span></h6>
                  <p>I learnt about this app late last year and it has really helped me on how i manage my finances </p>
                  <button onClick={() => setOpen(!open)}
                    aria-controls="example-collapse-text"
                    aria-expanded={open} 
                    type="button"
                    className="btn btn-light">REPLY
                  </button>
                </div>
                
              </div>
            </div> 
            <hr></hr>
            <div className="mt-2 mb-5">
              <div className="d-flex flex-row">
                <img src={obj} alt="ob" className="img-fluid" />
                <div className="ms-4 mt-5">
                  <h6>Oshinowo Bola <span className="ms-4">December 15, 2022 at 10:00AM</span></h6>
                  <p>I learnt about this app late last year and it has really helped me on how i manage my finances </p>
                  <button onClick={() => setOpen(!open)}
                    aria-controls="example-collapse-text"
                    aria-expanded={open} 
                    type="button"
                    className="btn btn-light">REPLY
                  </button>
                </div>
                
              </div>
            </div> 
            

            
              
                
                <div className="mb-5">
                    <h4> Leave a Reply</h4>
                    <p> Your email will be kept confidential </p>
                  <Form>
                    <Form.Group className="mb-3" controlId="">
                      <Form.Label></Form.Label>
                      <Form.Control as="textarea" rows={5} />
                    </Form.Group>
                    <Row className="mb-3">
                      <Form.Group as={Col} controlId="">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" />
                      </Form.Group>

                      <Form.Group as={Col} controlId="">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" />
                      </Form.Group>
                    </Row>
                    <div class="form-check">
                      <input class="form-check-input" type="checkbox"/>
                      <label class="form-check-label" for="flexCheckDefault">
                        Save my name and Email for the next time i comment
                      </label>
                    </div>
                    <div className="text-center mt-5">
                      <button
                        className="btn btn-primary btn-main rounded-pill px-2 py-3"
                        to="/"
                      >
                        Post Comment
                      </button>
                    </div>
                  </Form>
                </div>
              
            
          </div>
        </div>
      </div>
    </section>
  );
}

export default Replies;

