import React from 'react'
import { Box, Stack, Link } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CakeIcon from '@mui/icons-material/Cake';

function Home() {

    const BASE_URL = '/portfolio/';

    const containerStyle = {
        width: { lg: "280px", md: "300px", sm: "100%", xs: "100%" },
        margin: "48px auto",
        marginTop: "0px"
    };

    const profileImageStyle = {
        width: "100%"
    };

    const nameStyle = {
        fontSize: "lg",
        fontWeight: "bold",
        fontFamily: "lato"
    };

    const socialIconsStyle = {
        width: "70%",
        margin: "0px auto",
        marginBottom: "20px",
        textAlign: "center"
    };

    const contactInfoContainerStyle = {
        width: "100%",
        margin: "0px auto",
        marginTop: "32px",
        textAlign: "center",
        padding: "20px 12px",
        border: "0.5px solid black"
    };

    const contactInfoItemStyle = {
        mb: "12px"
    };

    return (
        <Box id="home" sx={containerStyle}>

            <Box sx={{ width: "65%", margin: "0px auto", marginBottom: "10px", textAlign: "center" }}>
                <img src="./profile-pic.png" alt="profile-pi" style={profileImageStyle} />
            </Box>

            <Box sx={socialIconsStyle}>

                <p className="font-size-lg lato-bold" style={nameStyle}> <b> Aman Shinde </b> </p>

                <p className="font-size-md lato-regular" style={{ margin: "0px auto", marginBottom: "8px" }}> Web Engineer </p>

                <Stack direction="row" justifyContent="space-between" sx={{ width: "90%", margin: "0px auto" }}>
                    <FacebookIcon />
                    <TwitterIcon />
                    <InstagramIcon />
                    <LinkedInIcon />
                </Stack>

            </Box>

            <Box sx={contactInfoContainerStyle}>

                <Stack direction="row" alignItems="center" sx={contactInfoItemStyle}>
                    <EmailIcon sx={{ mr: "10px" }} />
                    <Box textAlign="left">
                        <p className="font-size-sm lato-light"> Email </p>
                        <p className="font-size-md lato-regular"> amanshinde.i2it@gmail.com </p>
                    </Box>
                </Stack>

                <Stack direction="row" alignItems="center" sx={contactInfoItemStyle}>
                    <PhoneAndroidIcon sx={{ mr: "10px" }} />
                    <Box textAlign="left">
                        <p className="font-size-sm lato-light"> Phone </p>
                        <p className="font-size-md lato-regular"> +91 7972131849 </p>
                    </Box>
                </Stack>

                <Stack direction="row" alignItems="center" sx={contactInfoItemStyle}>
                    <LocationOnIcon sx={{ mr: "10px" }} />
                    <Box textAlign="left">
                        <p className="font-size-sm lato-light"> Location </p>
                        <p className="font-size-md lato-regular"> Pune, Maharashtra </p>
                    </Box>
                </Stack>

                <Stack direction="row" alignItems="center">
                    <CakeIcon sx={{ mr: "10px" }} />
                    <Box textAlign="left">
                        <p className="font-size-sm lato-light"> Birthday </p>
                        <p className="font-size-md lato-regular"> 15 October </p>
                    </Box>
                </Stack>

            </Box>

            <Box sx={{ width: "100%", margin: "0px auto", marginTop: "20px", textAlign: "center" }}>
                <Link href={`${BASE_URL}resume.pdf`} rel="noopener noreferrer" className="font-size-md lato-regular" sx={{ textDecoration: "none", cursor: "pointer", padding: "7px 15px", color: "black", border: "1px solid black", borderRadius: "0", textTransform: "capitalize", '&:hover': { backgroundColor: "black", color: "white" } }}>
                    Download CV
                </Link>
            </Box>

        </Box>
    )
}

export default Home
