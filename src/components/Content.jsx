import { Button, Container, Divider, TableRow, } from "@mui/material";
import { Box } from "@mui/system";
import * as React from "react";
import "./Content.css";
import { ReactComponent as Parts } from "./part.svg";
//import { ReactComponent as Point1 } from "./point1.svg";
//import { ReactComponent as Point3 } from "./point3.svg";
//import { ReactComponent as Point4 } from "./point4.svg";
//import { ReactComponent as Point5 } from "./point5.svg";
//import { ReactComponent as Point6 } from "./point6.svg";
//import { ReactComponent as Point7 } from "./point7.svg";
//import { ReactComponent as Point2 } from "./point_2.svg";

function Content(){

    return(
        <div>
        <Container>
            <TableRow >
                <td>
                <ul className="content-titleleft" >
                Attractive Subsidy</ul>
                <ul className="content-headleft">
                for our Home Customers
                </ul>
                <p className="content-paraleft" >We are the one and only partner of Government of Tamilnadu for our roof top home customers.</p>
                <Button sx={{backgroundColor:"rgba(0, 48, 60, 1)", color:"white", fontSize:"12px", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center",padding: "12px 20px", top: "17px", left: "-130px "}} >
                     Book Now
                </Button>
                </td>
                <td>
            <Box className="con-box">
                
                
                <ul className="content-title1" >
                How Business can benefit from</ul>
                <ul className="content-head" >Solar Panel Installation</ul>
                <p className="content-para"  >As a business owner, one of the highest overhead costs facing you is the cost of electricity. Sudden price increases add uncertainty to your business, especially to your cash flow mangement. Maybe it’s time to lessen that load and look at how your business can benfit from solar panel</p>
                <Button sx={{backgroundColor:"rgba(0, 48, 60, 1)", color:"white", fontSize:"12px", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center",padding: "12px 20px", top: "17px", left: "50px "}} >
                     Book Now
                </Button>
            </Box>
            </td>
            </TableRow>
           
        </Container>
        <Divider sx={{marginY:"190px"}} />
        <Container >
        
            <Box className="buttonbox" >
                <Box className="boxleft">
                <p className="boxleftword" >Solar Solutions for Business</p> 
                </Box>
            <p className="boxright" >Solar Solutions for Home</p> 
            </Box>
        </Container>
        <Container >
            <Box className="image1" />
           
            <p className="imagehead" >Are you looking for</p>
            <p className="imagehead1">Solar Oanel Installation for your Business?</p>
            <p className="imagehead2">Your are at the Right Place!</p>
            <p className="imagehead3">We build efficient and sustainable rooftop solar sysytem to help business to avail a great deal on electricity bills</p>
            <p className="imagehead4">A Hassle-free scheme to Make Business Go Solar Minimize your Energy Bills and save More to Power your Business</p>
            <p className="imagehead5">Key Attractive</p>
            <Parts className="part" />
        </Container>
        <Box className="banner">
            <p className="callfree">Call Toll Free</p>
            <p className="num">1800 419 877</p>
            <Button className="bannerbutton" sx={{
                bgcolor: "#14A066", 
                display: "flex", 
                flexDirection: "row", 
                justifyContent: "center",
                alignItems: "center",
                padding: "12px 20px",
                position: "absolute",
                width: "147px",
                height: "44px",
                left: "1056px",
                top: "52px",
                color: "white",
                borderRadius: "5px"
                 }}>Enquire Now</Button>
        </Box>
        <Container>
            <p className="foothead">Benefits of going Solar .....</p>

            <Box className="image2" />

           
        </Container>
        </div>
    )
}

export default Content;