//import React, { useState } from "react";
//import Captcha from "captcha-image";
import {  Cointainer, Segment } from "semantic-ui-react";
import { FacebookShareButton, LinkedlnShareButton } from "react-share";
import { FacebookIcon, LinkedlnIcon } from "react-share";

function Links() {
    return(
        <div className="social-links">
        <Cointainer>
            <Segment>
                < FacebookShareButton url="https://www.facebook.com/profile.php?id=100080430145453&mibextid=ZbWKwL">
                    <FacebookIcon logoFillColor="white" round={true}></FacebookIcon>
                </FacebookShareButton>
                <LinkedlnShareButton url="https://www.linkedin.com/in/amukelani-nyambi-b89523221">
                    < LinkedlnIcon logoFillColor="white" round={true}></LinkedlnIcon >
                </LinkedlnShareButton>
            </Segment>
        </Cointainer>
        </div>

    );
}
export default Links