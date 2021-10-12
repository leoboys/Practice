import { Button, Card, CardContent } from "@mui/material";
import { Box } from "@mui/system";
import * as React from "react";
import  "./Cover.module.css";


function Cover(){
    return(
        <div>
            <Box sx={{position:"static", height:"480px", width:"100%", backgroundColor:"gray" }}>

                <Card sx={{ position:"absolute", width:"528px", height:"308px", marginX:"-24px", marginY:"40px",   bgcolor:"white" }}>

                   <CardContent style={{ marginLeft:"23px" }}>
                       
                    <ul className="title" style={{flexGrow:"0", fontSize:"30px", marginY:"49px", textAlign:"left"}}>
                        Energize Society
                    </ul>
                    <ul className="title" style={{
                        position:"static",
                        fontSize:"34px",
                        
                        marginTop:"13px",
                        textAlign:"left" , 
                        color:"#14A066",
                        order: 1
                        }}>
                        by Reliable Energy
                    </ul>
                    <ul style={{textAlign:"left" ,  marginTop:"1px", fontSize:"13px"}}>
                        As a worldwide distributor of solar supplies, we endeavor fast and knowledgeable service, we can your subsidy.
                    </ul>

                    <Button style={{
                        background:"rgba(0, 78, 102, 1)", 
                        fontSize:"14px",
                        color:"white", 
                        textAlign:"left" ,
                        
                        }}>
                            Enquire Now
                            
                    </Button>
                    </CardContent>

                   
                </Card>

            </Box>
        </div>
    )
}

export default Cover;