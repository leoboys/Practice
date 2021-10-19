import { Container, Link, TableHead, TableRow } from "@mui/material";
import { Box } from "@mui/system";
import * as React from "react";
import "./footer.css";
import { ReactComponent as FLogo } from "./FootLogo.svg";
//import { ReactComponent as Social } from "./Social.svg";
//import { ReactComponent as IN } from "./in.svg";
import { ReactComponent as Line } from "./line.svg";
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

function Footer(){
    return(
        <Container fixed id="foot">
            <Box className="footer" >
                <TableRow>
                <FLogo className="lg-foot" />
                <td>
                    <TableHead className="Link-about">About </TableHead>
                    <Link href="#" sx={{color:"white"}} className="Link-home">Home</Link>
                    <Link href="#" sx={{color:"white"}} className="Link-abtus">About us</Link>
                    <Link href="#" sx={{color:"white"}} className="Link-contact">Contact us</Link>
                </td>
                <td>
                    <TableHead className="Link-service">Service </TableHead>
                    <Link href="#" sx={{color:"white"}} className="Link-product">Products</Link>
                    <Link href="#" sx={{color:"white"}} className="Link-project">Projects</Link>
                </td>
                <td>
                    <TableHead className="Link-follow">Follow Us</TableHead>
                  
                    <FacebookIcon href="#" className="social" />
                    <TwitterIcon href="#" className="twitter" />
                    <InstagramIcon href="#" className="instagram" />
                    <LinkedInIcon href="#" className="in-svg" />

                </td>
                </TableRow>
                <Line className="line-svg"></Line>
                <p className="copyrights"> Copyright © 2020. Solar Shnumugam. All rights reserved.</p>
            </Box>

        </Container>
    )
}

export default Footer;