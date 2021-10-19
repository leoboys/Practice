import {Container } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import "./contact.css";

function Contact(){

    return (
        <div id="contact">
            <Header />
            <Container spacing={2} >
                <Box >
                   <tr> <h1 className="con-head" >Contact Us</h1></tr> 
                    <tr> <p className="con-para">Let’s Book your Solar Power/Subsidized</p></tr>   
                      <tr>
                         <td><input type="text" placeholder="your name?" className="name" /></td>
                          </tr>  
                        
                            
                </Box>

                <Box  className="contactbox" >
                    <image className="layer" />
                </Box>
                
            </Container>
            <Footer />
        </div>
    )
}

export default Contact;