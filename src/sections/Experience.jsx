import React from 'react';
import { Box, Stack, Grid } from '@mui/material';

import AlternateTimeline from '../components/AlternateTimeline';
import NewProjectCard from '../components/NewProjectCard';

const companyLogos = [
    "/portfolio/tcs_logo.png",
    "/portfolio/condenast_logo.png",
    "/portfolio/vogue_logo.png",
    "/portfolio/ad_logo.png",
    "/portfolio/gq_logo.png",
    "/portfolio/cnt_logo.svg",
    "/portfolio/monkiosque_logo.png",
    "/portfolio/tcs_logo.png",
    "/portfolio/condenast_logo.png",
    "/portfolio/vogue_logo.png",
    "/portfolio/ad_logo.png",
    "/portfolio/gq_logo.png",
    "/portfolio/cnt_logo.svg",
    "/portfolio/monkiosque_logo.png"
];



function Experiance() {
    
    const projectsNew = [
        {
            title: 'Home Automation',
            description: 'A smart home automation system that allows users to control various devices using voice commands. This project integrates with popular voice assistants for seamless interaction.',
            links: {
                github: 'https://github.com/Aman-Shinde/Voice-controlled-home-automation'
            }
        },
        {
            title: 'Navigation and Tracking',
            description: 'An application that provides real-time user navigation and tracking capabilities. It is designed to help track user movements and provide location-based services.',
            links: {
                github: 'https://github.com/Aman-Shinde/User-Navigation-and-Tracking'
            },
            techUsed: ['HTML', 'CSS', 'Php', 'GoogleMaps']
        },
        {
            title: 'WorkForceApp',
            description: 'A cross-platform application (Website, Android, iOS app) to support Municipal Corporations or any organizations to track a patient from the moment he/she identified as COVID-19 positive till discharged from hospital.',
            links: {
                github: 'https://github.com/jaiswalakshansh/WorkForceApp',
                live: 'http://workforcecovid.herokuapp.com/',
                more : 'https://www.hackerearth.com/challenges/hackathon/hackerearth-hackcovid-2/dashboard/848c8f5/submission/published/workforce-for-covid-19/'
            },
            techUsed: ['Php', 'GoogleMaps', 'Javascript', 'Jquery']
        },
        {
            title: 'Notes Extension',
            description: 'A Chrome extension that allows users to take and manage notes directly in their browser. It features an intuitive interface and various customization options.',
            links: {
                github: 'https://github.com/Aman-Shinde/Notes-chrome-extension',
            },
            techUsed: ['HTML', 'CSS', 'Javascript']
        },
        {
            title: 'Markdown Viewer',
            description: 'A web application for viewing and rendering Markdown files. It supports various Markdown syntaxes and provides a user-friendly interface for easy reading.',
            links: {
                github: 'https://github.com/Aman-Shinde/markdown-viewer',
                live: 'https://aman-shinde.github.io/markdown-viewer/'
            },
            techUsed: ['Reactjs', 'Javascript', 'CSS']
        },
        {
            title: 'A Garage Website',
            description: 'A website for a garage business, featuring details about services, location, and contact information. The site is designed to be user-friendly and responsive.',
            links: {
                github: 'https://github.com/Aman-Shinde/brothers-garage',
                live: 'https://aman-shinde.github.io/brothers-garage/'
            },
            techUsed: ['Reactjs', 'Javascript', 'MUI' ]
        },
        {
            title: 'My Portfolio',
            description: 'A personal portfolio website showcasing various projects and skills. It includes sections for work experience, education, and contact information.',
            links: {
                github: 'https://github.com/Aman-Shinde/portfolio',
                live: 'https://github.com/Aman-Shinde/portfolio'
            },
            techUsed: ['Reactjs', 'Javascript', 'MUI']
        },
        {
            title: 'Grid Planner',
            description: 'A web application that enables users to design and visualize grid layouts also generate the corresponding HTML and CSS code.',
            links: {
                github: 'https://github.com/Aman-Shinde/grid-planner',
                live: 'https://aman-shinde.github.io/grid-planner/'
            },
            techUsed: ['Typescript', 'Reactjs', 'Javascript', 'StyledComponents']
        },
        {
            title: 'Content cave',
            description: 'A platform dedicated to publishing high-quality articles across diverse topics. Designed to inform, inspire, and engage readers with expert-written content.',
            links: {
                github: 'https://github.com/Aman-Shinde/content-cave',
                live: 'https://aman-shinde.github.io/content-cave/'
            },
            techUsed: ['Typescript', 'Reactjs', 'Javascript', 'StyledComponents']
        },
        {
            title: 'Data Analyst Portfolio',
            description: 'A personal portfolio website showcasing the journey of a data analyst. It features certifications, and key projects offering a comprehensive view of skills and accomplishments in data analysis.',
            links: {
                github: 'https://github.com/Aman-Shinde/data-analyst-portfolio',
                live: 'https://shubhamkoshti71.github.io/portfolio/'
            },
            techUsed: ['HTML', 'CSS', 'Javascript']
        }
    ];
    

    const sectionBorderStyle = {
        borderTop: "1px solid black",
        borderBottom: "1px solid black",
        marginBottom: "48px",
    };

    const sectionTitleStyle = {
        textAlign: "center",
        fontSize: "xl",
        fontWeight: "bold",
        fontFamily: "Lato, sans-serif",
    };

    const logoContainerStyle = {
        position: "relative",
        overflowX: "hidden",
    };

    const stackStyle = {
        flexDirection: "row",
        width: "calc((100px * 14) + (12px * 20))",
        animation: "CompanyLogoScroll 40s linear infinite",
        '&:hover': { animationPlayState: "paused" }
    };

    const imgContainerStyle = {
        width: {
            lg: "100px",
            md: "100px",
            sm: "50px",
            xs: "50px"
        },
        height: "100%",
        margin: "0px 12px"
    }

    const imgStyle = {
        maxWidth: "100%",
        margin: "0px auto",
        aspectRatio: "3/2",
        objectFit: "contain",
        mixBlendMode: "color-burn"
    }

    return (
        <Box id="work" sx={{ mb: { lg: "48px", md: "48px", sm: "48px", xs: "48px" } }}>

            <Box sx={{ marginBottom: "64px" }}>
                <Box sx={{ ...sectionBorderStyle }}>
                    <p className="font-size-xl lato-bold" style={{ ...sectionTitleStyle }}>
                        Experience
                    </p>
                </Box>

                <AlternateTimeline />
            </Box>

            <Box sx={{ marginBottom: "64px" }}>
                <Box sx={{ ...sectionBorderStyle }}>
                    <p className="font-size-xl lato-bold" style={{ ...sectionTitleStyle }}>
                        Worked With
                    </p>
                </Box>

                <Box sx={{ ...logoContainerStyle }}>
                    <Stack sx={{ ...stackStyle }}>
                        {
                            companyLogos.map((logo, index) => (
                                <Box key={index} sx={{ ...imgContainerStyle }}>
                                    <img style={{ ...imgStyle }} src={logo} alt="pic"></img>
                                </Box>
                            ))
                        }
                    </Stack>
                </Box>
            </Box>

            <Box>
                <Box sx={{ ...sectionBorderStyle }}>
                    <p className="font-size-xl lato-bold" style={{ ...sectionTitleStyle }}>
                        Personal Projects
                    </p>
                </Box>

                <Box sx={{ mt: "12px" }}>
                    <Grid container spacing={2}>
                        {projectsNew.reverse().map((project, index) => (
                            <Grid item key={index} xs={12} sm={6} lg={6}>
                                <NewProjectCard
                                    project={project}
                                />
                            </Grid>
                        ))}
                    </Grid>
                </Box>
            </Box>

        </Box>
    )
}

export default Experiance;

