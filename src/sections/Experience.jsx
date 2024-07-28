import React from 'react';
import { Box, Stack, Grid } from '@mui/material';

import AlternateTimeline from '../components/AlternateTimeline';
import ProjectCard from '../components/ProjectCard';

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
    const projects = [
        {
            title: 'Voice Controlled Home Automation',
            description: 'A smart home automation system that allows users to control various devices using voice commands. This project integrates with popular voice assistants for seamless interaction.',
            imageUrl: 'https://via.placeholder.com/150',
            link: 'https://github.com/Aman-Shinde/Voice-controlled-home-automation'
        },
        {
            title: 'User Navigation and Tracking',
            description: 'An application that provides real-time user navigation and tracking capabilities. It is designed to help track user movements and provide location-based services.',
            imageUrl: 'https://via.placeholder.com/150',
            link: 'https://github.com/Aman-Shinde/User-Navigation-and-Tracking'
        },
        {
            title: 'WorkForceApp',
            description: 'Built cross-platform application (Website, Android, iOS app) to support Municipal Corporations or any organizations from the moment a patient is identified as COVID-19 positive till he/she is released.',
            imageUrl: 'https://via.placeholder.com/150',
            link: 'https://github.com/jaiswalakshansh/WorkForceApp'
        },
        {
            title: 'Notes Chrome Extension',
            description: 'A Chrome extension that allows users to take and manage notes directly in their browser. It features an intuitive interface and various customization options.',
            imageUrl: 'https://via.placeholder.com/150',
            link: 'https://github.com/Aman-Shinde/Notes-chrome-extension'
        },
        {
            title: 'Markdown Viewer',
            description: 'A web application for viewing and rendering Markdown files. It supports various Markdown syntaxes and provides a user-friendly interface for easy reading.',
            imageUrl: 'https://via.placeholder.com/150',
            link: 'https://github.com/Aman-Shinde/markdown-viewer'
        },
        {
            title: 'Brothers Automotive Garage Website',
            description: 'A website for a garage business, featuring details about services, location, and contact information. The site is designed to be user-friendly and mobile responsive.',
            imageUrl: 'https://via.placeholder.com/150',
            link: 'https://github.com/Aman-Shinde/brothers-garage'
        },
        {
            title: 'My Portfolio',
            description: 'A personal portfolio website showcasing various projects and skills. It includes sections for work experience, education, and contact information.',
            imageUrl: 'https://via.placeholder.com/150',
            link: 'https://github.com/Aman-Shinde/portfolio'
        },
        {
            title: 'Grid Planner',
            description: 'Grid Planner is a web application that enables users to design and visualize grid layouts. You can define grid configurations such as columns, rows, gaps, and containers, and generate the corresponding HTML and CSS code.',
            imageUrl: 'https://via.placeholder.com/150',
            link: 'https://github.com/Aman-Shinde/grid-planner'
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
                        {projects.reverse().map((project, index) => (
                            <Grid item key={index} xs={12} sm={6} lg={6}>
                                <ProjectCard
                                    title={project.title}
                                    description={project.description}
                                    link={project.link}
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

