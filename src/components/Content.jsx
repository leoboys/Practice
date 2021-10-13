import { Button, Container, TableRow } from "@mui/material";
import { Box } from "@mui/system";
import * as React from "react";
import "./Content.css";


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
        </div>
    )
}

export default Content;