import React from 'react'
import { Stack, Box, Card, CardContent, CardActions, Button } from '@mui/material';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';

import { FaGithub, FaExternalLinkAlt, FaInfoCircle } from 'react-icons/fa';

import {
    FaHtml5,
    FaCss3Alt,
    FaPhp,
    FaBootstrap,
    FaReact,
} from 'react-icons/fa';
import { IoLogoJavascript } from 'react-icons/io5';
import {
    SiMui,
    SiJquery,
    SiStyledcomponents,
    SiMysql,
    SiTypescript,
    SiGooglemaps
} from 'react-icons/si';

const techIconMap = {
    HTML: <FaHtml5 title='HTML' size={"20px"}/>,
    CSS: <FaCss3Alt title='CSS' size={"20px"}/>,
    Bootstrap: <FaBootstrap title='Bootstrap' size={"20px"}/>,
    Typescript: <SiTypescript title='Typescript' size={"20px"}/>,
    Javascript: <IoLogoJavascript title='Javascript' size={"20px"}/>,
    Reactjs: <FaReact title='Reactjs' size={"20px"}/>,
    Php: <FaPhp title='Php' size={"20px"}/>,
    GoogleMaps: <SiGooglemaps title='GoogleMaps' size={"20px"}/>,
    Jquery: <SiJquery title='Jquery' size={"20px"}/>,
    StyledComponents: <SiStyledcomponents title='StyledComponents' size={"20px"}/>,
    MUI: <SiMui title='Material UI' size={"20px"}/>,
};

const cardStyle = {
    border: '1px solid black',
    borderRadius: '0',
    boxShadow: 'none',
    backgroundColor: 'transparent',
    padding: '16px 12px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    height: '100%'
};

const titleStyle = {
    textAlign: "center",
    marginBottom: "16px",
    fontSize: "lg",
    fontWeight: "bold",
    fontFamily: "lato"
};

const descriptionStyle = {
    textAlign: "center",
    fontSize: "md",
    fontFamily: "lato",
    marginBottom: "40px"
};

const actionButtonStyle = {
    justifyContent: 'space-between',
    padding: 0
};

const buttonStyle = {
    color: "white",
    border: "1px solid black",
    borderRadius: "0",
    textTransform: "capitalize",
    backgroundColor: "black",
    padding: { lg: "5px 15px", md: "5px 15px", sm: "4px 8px", xs: "4px 8px" },
    '&:hover': {
        backgroundColor: 'white',
        color: 'black',
        borderColor: 'black'
    }
};

const LinkButton = ({ href, icon: Icon, text }) => (
    <Button
        variant="outlined"
        className="font-size-sm font-size-sm-res lato-regular"
        href={href}
        target="_blank"
        sx={buttonStyle}
        endIcon={<Icon size={"10px"} />}
    >
        {text}
    </Button>
);

const ProjectButtons = ({ links }) => (
    <>
        {links.github && <LinkButton href={links.github} icon={FaGithub} text="Code" />}
        {links.live && <LinkButton href={links.live} icon={FaExternalLinkAlt} text="Live" />}
        {links.more && <LinkButton href={links.more} icon={FaInfoCircle} text="More" />}
    </>
);

function NewProjectCard({ project }) {
    return (
        <Card sx={cardStyle}>
            <CardContent sx={{ padding: 0 }}>
                <Box>

                    <p style={titleStyle} className="lato-bold font-size-lg font-size-lg-res">
                        {project.title}
                    </p>

                    <p style={descriptionStyle} className="lato-regular font-size-md font-size-md-res">
                        {project.description}
                    </p>

                </Box>
            </CardContent>
            <CardActions sx={actionButtonStyle, { flexWrap: "wrap", padding: "0px" }}>

                <Stack style={{ width: "100%", flexDirection: "row", justifyContent: "space-evenly", marginBottom: "16px" }}>
                    {project.techUsed && project.techUsed.map((tech) => (
                        <span key={tech}>
                            {techIconMap[tech]}
                        </span>
                    ))}
                </Stack>

                <Stack style={{ width: "100%", flexDirection: "row", justifyContent: "space-evenly" }}>
                    <ProjectButtons links={project.links} />
                </Stack>

            </CardActions>
        </Card>
    )
}

export default NewProjectCard
