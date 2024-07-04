import React from 'react';
import { Box, Stack, Grid } from '@mui/material';

import AlternateTimeline from '../components/AlternateTimeline';
import ProjectCard from '../components/ProjectCard';

const companyLogos = [
    "./tcs_logo.png",
    "./condenast_logo.png",
    "./vogue_logo.png",
    "./ad_logo.png",
    "./gq_logo.png",
    "./cnt_logo.svg",
    "./monkiosque_logo.png",
    "./tcs_logo.png",
    "./condenast_logo.png",
    "./vogue_logo.png",
    "./ad_logo.png",
    "./gq_logo.png",
    "./cnt_logo.svg",
    "./monkiosque_logo.png"
];

function Experiance() {
    const projects = [
        {
            title: 'Project One',
            description: 'Description of project one.',
            imageUrl: 'https://via.placeholder.com/150',
            link: '#'
        },
        {
            title: 'Project Two',
            description: 'Description of project two.',
            imageUrl: 'https://via.placeholder.com/150',
            link: '#'
        },
        {
            title: 'Project One',
            description: 'Description of project one.',
            imageUrl: 'https://via.placeholder.com/150',
            link: '#'
        },
        {
            title: 'Project Two',
            description: 'Description of project two.',
            imageUrl: 'https://via.placeholder.com/150',
            link: '#'
        },
        // Add more projects here
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
                        {projects.map((project, index) => (
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

