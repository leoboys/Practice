import * as React from "react";
import { ReactComponent as Logo } from "./Logo.svg";
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import { Button, Link, Typography } from "@mui/material";
import classes from "./Header.module.css";



function Header(){

   
    return(
        <div>
            <AppBar  sx={{backgroundColor:"white", position: "fixed" }}>
                <Toolbar>
                <Logo  />
                    <Typography sx={{ flexGrow: 1, marginLeft: 0 }}>
                    </Typography>
               
                    <Link href="app" className={classes.normalButton} sx={{ color:"rgba(0, 48, 60, 1)",fontSize:"12px"}} >HOME</Link>
                    <Link href="#" sx={{ color:"rgba(0, 48, 60, 1)", marginX:"10px", fontSize:"12px"}}>ABOUT US</Link>
                    <Link href="#" sx={{ color:"rgba(0, 48, 60, 1)",marginX:"10px", fontSize:"12px"}}>PRODUCT</Link>
                    <Link href="#" sx={{ color:"rgba(0, 48, 60, 1)",marginX:"10px", fontSize:"12px"}}>PROJECT</Link>
                    <Link href="contact" sx={{ color:"rgba(0, 48, 60, 1)",marginX:"10px", fontSize:"12px"}}>CONTACT US</Link>
                    <Button href="#" sx={{ backgroundColor:"rgba(0, 48, 60, 1)", color:"white", fontSize:"12px",marginX:"10px"}}>Request a quote</Button>
                    
                </Toolbar>
            </AppBar>
            </div>
    )
}

export default Header;
