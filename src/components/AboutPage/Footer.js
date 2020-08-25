import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebook,
  faTwitter,
  faGithub,
} from '@fortawesome/free-brands-svg-icons';
import {
  faMapMarkerAlt,
  faCommentDots,
} from '@fortawesome/free-solid-svg-icons';

import logo from '../../assets/logo.png';

export default function Footer() {
  return (
    <div className="color">
      {/* first row */}
      <div className=" container mx-auto grid grid-cols-2 py-4">
        <div className="flex content-start w-24">
          <img src={logo} alt="logo" />
        </div>
        <div className="mt-5">
          <a href="https://github.com/7ananDlshad" className="float-right">
            <FontAwesomeIcon
              icon={faGithub}
              style={{
                marginTop: '10px',
                fontSize: '30px',
                color: '#18A0FB',
              }}
            />
          </a>
          <a href="https://twitter.com/7ananTaha" className="float-right">
            <FontAwesomeIcon
              icon={faTwitter}
              style={{
                marginTop: '10px',
                marginRight: '30px',
                fontSize: '30px',
                color: '#18A0FB',
              }}
            />
          </a>
          <a
            href="https://www.facebook.com/7anan.engineer"
            className="float-right"
          >
            <FontAwesomeIcon
              icon={faFacebook}
              style={{
                marginTop: '10px',
                marginRight: '30px',
                fontSize: '30px',
                color: '#18A0FB',
              }}
            />
          </a>
        </div>
      </div>

      <div className="container mx-auto">
        <hr />
      </div>
      {/* second row */}
      <div className=" container mx-auto grid grid-cols-3 mt-12">
        <div>
          <p className="font-semibold text-2xl mb-3">Want to talk with Us?</p>
          <p>We are always at your service</p>
          <FontAwesomeIcon
            icon={faMapMarkerAlt}
            className="text-blue-500 mt-10 mr-2"
          />
          <small>Erbil, Near our neightbour home - Iraq</small>
          <br />
          <FontAwesomeIcon
            icon={faCommentDots}
            className="text-blue-500 mt-5 mr-2"
          />
          <small>+9647512310232</small>
        </div>
        <div>
          <p className="font-semibold text-2xl mb-3">Our Services</p>
          <ul className="list-disc ml-5">
            <li className="mb-3">Route list</li>
            <li className="mb-3">Provide Buses</li>
            <li className="mb-3">Time of buses</li>
            <li className="mb-3">We love you</li>
            <li>Mobile Development</li>
          </ul>
        </div>
        <div>
          <p className="font-semibold text-2xl mb-3">Contact Us</p>
          <label className="block">
            <span className="text-gray-700">Email:</span>
            <input className="form-input mt-1 block w-full bg-input rounded py-1" />
          </label>
          <label className="block">
            <span className="text-gray-700">Message:</span>
            <textarea
              className="form-textarea mt-1 block w-full bg-input rounded"
              rows="5"
            ></textarea>
          </label>
          <button className="bg-blue-500 hover:bg-blue-700  text-white text-md  rounded shadow-2xl px-12 py-1 float-right mb-16 mt-5 boxshadow ">
            Submit Now
          </button>
        </div>
      </div>
      <div className="container mx-auto">
        <hr />
      </div>
      {/* third row */}
      <div
        className="text-center py-5 text-gray-500
"
      >
        <small>&copy; Copyright Royal Diamond Team 2020</small>
      </div>
    </div>
  );
}
