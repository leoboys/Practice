import { Button, Grid } from "@mui/material";
//import { Box } from "@mui/system";
import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import "./contact.css";
import { Box } from "@mui/system";

function Contact(){
    

    return (
        <div id="contact">
            <Header />
            {/*<Container >
                <table>
                   <tr> <h1 className="con-head" >Contact Us</h1></tr> 
                    <tr> <p className="con-para">Let’s Book your Solar Power/Subsidized</p></tr>   
                      <tr>
                         <td>
                             <label className="namel" >Name</label>
                             <input type="text" placeholder="your name?" className="name" />
                             </td>
                          </tr>  
                          </table>   
                            

                <Box  className="contactbox" >
                    <image className="layer" />
                </Box>
                
            </Container>*/}
            <Grid container fixed spacing={1} >
                <Grid item xs={6}>
                <h1 className="con-head" >Contact Us</h1>
                <p className="con-para">Let’s Book your Solar Power/Subsidized</p>
                <tr>
                    <td>
                        
                    <input type="text"  className="name" />
                    </td>
                    <td>
                    <input type="text"  className="mobile" />
                    </td>
                </tr>
                <tr>
                    <td>
                    <input type="text"  className="email" />
                    </td>
                </tr>
                <tr>
                    <td>
                    <h5 className="Add">Address</h5>
                    <input type="text"  className="address" />
                    </td>
                </tr>
                <tr>
                    <td>
                    <h5 className="source">Service Source</h5> 
                    <input type="text"  className="service" />
                    </td>
                </tr>
                <tr>
                    <Button className="book" >Book Now</Button>
                </tr>

                </Grid>
                <Grid item xs={6}>
                <Box  className="contactbox" >
                    <image className="layer" />
                </Box>

                </Grid>
            </Grid>
            <Footer />
        </div>
    )
}

export default Contact;