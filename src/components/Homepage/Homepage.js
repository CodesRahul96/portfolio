import React from 'react'
import '../../pages/style.css';
import { Row, Col } from 'react-bootstrap'
import Text from './Text'
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home() {
  return (
    <div className='homepagebackground' >
      <div className='container' style={{height: "100%"}}>
        <Row>
          <Col md={7}>
            <h2 className='headtext'>Hello 
              <span role='img' className='wave' aria-label='wave'>👋</span>
              </h2>
            <h2 className='nametext'>I'm Rahul Misal <span role='img' className='emoji' aria-label='emoji'>🙂</span></h2>
            <span></span>
            <Text />
            <button onClick={() => {
              window.open("https://github.com/CodesRahul");
            }}
              className='socailmediabtn'><AiFillGithub className='icon' /></button>
            <button onClick={() => {
              window.open("https://www.linkedin.com/in/codesrahul/");
            }}
              className='socailmediabtn'><FaLinkedinIn className='icon' /></button>
            <button onClick={() => {
              window.open("https://twitter.com/CodesRahul");
            }}
              className='socailmediabtn'><AiOutlineTwitter className='icon' /></button>
            <button onClick={() => {
              window.open("https://instagram.com/codez_rahul");
            }}
              className='socailmediabtn'><AiFillInstagram className='icon' /></button>
          </Col>

          <Col md={5}>
            <div className="imagedeveloper">
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default Home;