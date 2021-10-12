import { Link, TableRow } from "@mui/material";
import { Box } from "@mui/system";
import * as React from "react";
import "./footer.css";
import { ReactComponent as FLogo } from "./FootLogo.svg";
import { ReactComponent as Social } from "./Social.svg";
import { ReactComponent as IN } from "./in.svg";
import { ReactComponent as Line } from "./line.svg";

function Footer(){
    return(
        <div>
            <Box className="footer" >
                <TableRow>
                <FLogo className="lg-foot" />
                <td>
                    <Link className="Link-about">About
                    </Link>
                    <Link className="Link-home">Home</Link>
                    <Link className="Link-abtus">About us</Link>
                    <Link className="Link-contact">Contact us</Link>
                </td>
                <td>
                    <Link className="Link-service">Service </Link>
                    <Link className="Link-product">Products</Link>
                    <Link className="Link-project">Projects</Link>
                </td>
                <td>
                    <Link className="Link-follow">Follow Us</Link>
                    <Social className="social"></Social>
                    <IN className="in-svg"></IN>
                </td>
                </TableRow>
                <Line className="line-svg"></Line>
                <p className="copyrights"> Copyright © 2020. Solar Shnumugam. All rights reserved.</p>
            </Box>

        </div>
    )
}

export default Footer;