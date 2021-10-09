import * as React from "react";
import { ReactComponent as Logo } from "./Logo.svg";
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import { Button, Typography } from "@mui/material";
import classes from "./Header.module.css";



function Header(){

   
    return(
        <div>
            <AppBar position="Fixed" sx={{backgroundColor:"white"}}>
                <Toolbar>
                <Logo  />
                    <Typography sx={{flexGrow: 1, marginLeft:0 }}>
                    </Typography>
                    
                    <Button className={classes.normalButton} sx={{ color:"rgba(0, 48, 60, 1)",fontSize:"12px"}} >HOME</Button>
                    <Button sx={{ color:"rgba(0, 48, 60, 1)", marginX:"10px", fontSize:"12px"}}>ABOUT US</Button>
                    <Button sx={{ color:"rgba(0, 48, 60, 1)",marginX:"10px", fontSize:"12px"}}>PRODUCT</Button>
                    <Button sx={{ color:"rgba(0, 48, 60, 1)",marginX:"10px", fontSize:"12px"}}>PROJECT</Button>
                    <Button sx={{ color:"rgba(0, 48, 60, 1)",marginX:"10px", fontSize:"12px"}}>CONTACT US</Button>
                    <Button sx={{ backgroundColor:"rgba(0, 48, 60, 1)", color:"white", fontSize:"12px",marginX:"10px"}}>Request a quote</Button>

                </Toolbar>
            </AppBar>
            </div>
    )
}

export default Header;
