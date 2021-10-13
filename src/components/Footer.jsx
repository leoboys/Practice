import { Container, Link, TableHead, TableRow } from "@mui/material";
import { Box } from "@mui/system";
import * as React from "react";
import "./footer.css";
import { ReactComponent as FLogo } from "./FootLogo.svg";
import { ReactComponent as Social } from "./Social.svg";
import { ReactComponent as IN } from "./in.svg";
import { ReactComponent as Line } from "./line.svg";

function Footer(){
    return(
        <Container fixed>
            <Box className="footer" >
                <TableRow>
                <FLogo className="lg-foot" />
                <td>
                    <TableHead className="Link-about">About
                    </TableHead>
                    <Link className="Link-home">Home</Link>
                    <Link className="Link-abtus">About us</Link>
                    <Link className="Link-contact">Contact us</Link>
                </td>
                <td>
                    <TableHead className="Link-service">Service </TableHead>
                    <Link className="Link-product">Products</Link>
                    <Link className="Link-project">Projects</Link>
                </td>
                <td>
                    <TableHead className="Link-follow">Follow Us</TableHead>
                    <Social className="social"></Social>
                    <IN className="in-svg"></IN>
                </td>
                </TableRow>
                <Line className="line-svg"></Line>
                <p className="copyrights"> Copyright © 2020. Solar Shnumugam. All rights reserved.</p>
            </Box>

        </Container>
    )
}

export default Footer;