import { Button, Card, CardContent} from "@mui/material";
import { Box } from "@mui/system";
import * as React from "react";
import  "./Cover.css";


function Cover(){
    return(
        <div>
            <Box  className="cover-box1"  >

                <Card className="cover-card" >

                   <CardContent >
                       
                    <ul className="title" >
                        Energize Society
                    </ul>
                    <ul className="title2" >
                        by Reliable Energy
                    </ul>
                    <ul className="sub-title">
                        As a worldwide distributor of solar supplies, we endeavor fast and knowledgeable service, we can your subsidy.
                    </ul>
                    <Button className="card-button" sx={{
                        background:"#004E66", 
                        color:"white", 
                        display: "flex",
                        lexDirection: "row",
                        justifyContent: "center",
                        alignItems: "center",
                        padding: "12px 20px",
                        left: "67px",
                        top: "24px"}}  >
                            Enquire Now
                            
                    </Button>

                   
                    </CardContent>

                   
                </Card>

            </Box>
           


        </div>
    )
}

export default Cover;