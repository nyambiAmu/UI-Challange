import React from "react";
import { Link } from "react-router-dom";
import {
    faYoutube,
    faFacebook,
    faTwitter,
    faInstagram
  } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faYoutube,
    faFacebook,
    faTwitter,
    faInstagram
} from "@fortawesome/free-brands-svg-icons";

const Navbar = () => {
    return (
        <nav className='navbar'>

        

            <ul>
                <li>portfolio</li>
                <li>about me</li>
                <li>myblog</li>
                <li>reviews</li>
                <li>contact me</li>

            </ul>
            
        </nav>
    )
}
export default Navbar