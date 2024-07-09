import React from "react";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import ReferNow from '../src/assets/Anniversary (7) 1.png';
import ReferEarn from "./referNowPopup";

const HomePage = () => {
    return (
        <div>
            <Card sx={{ minWidth: 275, backgroundColor: "#EEF5FF", display: "flex", margin: "42px 82px", borderRadius: "8px", boxShadow: "0 2px 32px rgba(0, 0, 0, .1)" }}>
                <CardContent sx={{ display: "grid", placeItems: "center", padding: "46px" }} >
                    <div>
                    <Typography variant="h3" sx={{fontSize: "88px", lineHeight: "88px", fontWeight: "700px"}} gutterBottom>
                        Let's Learn & Earn
                    </Typography>
                    <Typography variant="h5" sx={{fontSize: "58px", lineHeight: "88px", fontWeight: "100px"}} component="div">
                         Get a chance to win <span style={{color: "#1A73E8", fontWeight: "800px"}}>up-to Rs. 15,000</span>
                    </Typography>
                    </div>
                    {/* <Button variant="contained">Refer Now</Button> */}
                    <ReferEarn />
                </CardContent>
                <img src={ReferNow} alt="refer" style={{ width: "50%", transform: "translate(22px, 36px)" }} />
            </Card>
        </div>
    );
}
export default HomePage;