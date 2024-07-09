import React from "react";
import Logo from '../src/assets/accredainnew.webp.png';
import { Button, Grid, Box, Typography } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';
import AddIcon from '@mui/icons-material/Add';

const Footer = () => {

    const programs = ["Data Science & Al",
        "Product Management",
        "Business Analytics",
        "Digital Transformation",
        "Business Management",
        "Project Management",
        "Strategy & Leadership",
        "Senior Management",
        "Fintech"];

    return (
        <footer>
            <div className="logo">
                <img src={Logo} alt="logo" />
                <div>
                    <Button variant="contained">Schedule 1-on-1 Call Now</Button>
                    <Typography variant="caption" display="flex" sx={{ justifyContent: "center" }} gutterBottom>
                    Speak with our Learning Advisor
                    </Typography>
                </div>
            </div>
            <Box sx={{ flexGrow: 1, margin: '32px 0' }}>
                <Grid container spacing={2}>
                    <Grid item xs={3} sx={{ marginLeft: "62px", marginRight: '42px' }}>
                        <Typography variant="h6" gutterBottom>
                            Programs
                        </Typography>
                        {programs.map((i,k) => <Typography key={k} variant="subtitle1" gutterBottom sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                            {i}<AddIcon />
                        </Typography>)}
                    </Grid>
                    <Grid item xs={4} sx={{ margin: "0 42px" }}>
                        <Typography variant="h6" gutterBottom>
                            Contact Us
                        </Typography>
                        <Typography variant="body2" gutterBottom>
                            Email us (For Data Science Queries): admissions@accredian.com
                            Email us (For Product Management Queries):pm@accredian.com
                            Data Science Admission Helpline:+91 9079653292 (9 AM - 7 PM)
                            Product Management Admission Helpline:+91 9625811095
                            Enrolled Student Helpline: +91 7969322507
                            Office Address: 4th Floor, 250, Phase IV, Udyog Vihar, Sector 18, Gurugram,
                            Haryana 122015
                        </Typography>
                        <Typography variant="subtitle1" gutterBottom>
                            Why Accredian
                        </Typography>
                        <Typography variant="overline" display="block" gutterBottom>
                            Follow Us
                        </Typography>
                        <FacebookIcon sx={{ marginRight: "4px" }} />
                        <TwitterIcon  sx={{ marginRight: "4px" }} />
                        <LinkedInIcon sx={{ marginRight: "4px" }} />
                        <InstagramIcon sx={{ marginRight: "6px" }} />
                        <YouTubeIcon sx={{ marginRight: "4px" }} />
                    </Grid>
                    <Grid item xs={1}>
                        <Typography variant="h6" gutterBottom>
                            Accredian
                        </Typography>
                        <Typography variant="body2" gutterBottom>
                            About
                            Career
                            Blog
                            Admission Policy
                            Referral Policy
                            Privacy Policy
                            Terms Of Service
                            Master FAQs
                        </Typography>
                    </Grid>
                </Grid>
            </Box>
            <Typography variant="caption" display="flex" sx={{ justifyContent: "center" }} gutterBottom>
                © 2024 Accredian A Brand of FullStack Education Pvt Ltd. All Rights Reserved
            </Typography>
        </footer>
    );
}

export default Footer;