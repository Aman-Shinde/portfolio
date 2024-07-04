import React from 'react';
import { Box, Stack } from '@mui/material';
import {
    FaHtml5,
    FaCss3Alt,
    FaPhp,
    FaBootstrap,
    FaReact,
    FaNode,
    FaCloud,
    FaFigma,
    FaConfluence,
    FaGithub,
    FaJenkins,
} from 'react-icons/fa';
import { IoLogoJavascript } from 'react-icons/io5';
import {
    SiJquery,
    SiMui,
    SiStyledcomponents,
    SiRedux,
    SiMysql,
    SiMongodb,
    SiGraphql,
    SiApollographql,
    SiExpress,
    SiMongoose,
    SiTypescript,
    SiJira,
    SiXampp,
    SiFilezilla,
} from 'react-icons/si';
import { VscVscode } from 'react-icons/vsc';
import {
    Speed as SpeedIcon,
    Devices as DevicesIcon,
    TipsAndUpdates as TipsAndUpdatesIcon,
    RocketLaunch as RocketLaunchIcon,
    Architecture as ArchitectureIcon,
    DeveloperMode as DeveloperModeIcon,
    Psychology as PsychologyIcon,
    TrendingUp as TrendingUpIcon,
} from '@mui/icons-material';

const containerStyle = {
    mb: { lg: '48px', md: '48px', sm: '48px', xs: '48px' }
};

const sectionTitleStyle = {
    borderTop: '1px solid black',
    borderBottom: '1px solid black',
    marginBottom: '48px'
};

const sectionStackStyles = {
    flexDirection: 'row',
    justifyContent: 'space-around',
    flexWrap: 'wrap',
    marginTop: '24px'
}

const skillBoxStyles = {
    width: { lg: '40%', md: '40%', sm: '48%', xs: '48%' },
    marginBottom: { lg: '24px', md: '24px', sm: '16px', xs: '16px' },
};

const skillBoxInnerStyles = {
    width: 'fit-content',
    margin: '0px auto',
    marginBottom: '8px',
    textAlign: 'center'
};

const skillIconStyles = {
    fontSize: { lg: 100, md: 100, sm: 50, xs: 50 }
};

const technologyBoxStyles = {
    width: '20%',
    marginBottom: '24px',
    padding: '8px',
    textAlign: 'center',
};

const toolBoxStyles = {
    width: '30%',
    marginBottom: '24px',
    padding: '8px',
    textAlign: 'center',
};

const skills = [
    {
        icon: <DeveloperModeIcon sx={skillIconStyles} />,
        title: "Web Development",
        description: "Fast load times and lag-free interaction, my highest priority."
    },
    {
        icon: <PsychologyIcon sx={skillIconStyles} />,
        title: "Problem Solving",
        description: "Ability to quickly resolve issues and find effective solutions."
    },
    {
        icon: <TrendingUpIcon sx={skillIconStyles} />,
        title: "Continuous Learning",
        description: "Dedicated to staying updated with the latest industry trends."
    },
    {
        icon: <ArchitectureIcon sx={skillIconStyles} />,
        title: "Web Design",
        description: "Creating aesthetically pleasing and user-friendly web interfaces."
    },
    {
        icon: <DevicesIcon sx={skillIconStyles} />,
        title: "Responsive",
        description: "Ensuring seamless performance across all devices and screen sizes."
    },
    {
        icon: <TipsAndUpdatesIcon sx={skillIconStyles} />,
        title: "Intuitive",
        description: "Prioritizing user experience through intuitive design and navigation."
    },
    {
        icon: <SpeedIcon sx={skillIconStyles} />,
        title: "Fast",
        description: "Optimizing website performance for quick loading times."
    },
    {
        icon: <RocketLaunchIcon sx={skillIconStyles} />,
        title: "Dynamic",
        description: "Creating interactive and dynamic web experiences."
    }
];

// Array of technologies with icon details and title
const technologies = [
    { icon: <FaHtml5 className="tech-icons" />, title: "HTML" },
    { icon: <FaCss3Alt className="tech-icons" />, title: "CSS" },
    { icon: <IoLogoJavascript className="tech-icons" />, title: "JavaScript" },
    { icon: <SiJquery className="tech-icons" />, title: "jQuery" },
    { icon: <FaPhp className="tech-icons" />, title: "PHP" },
    { icon: <FaBootstrap className="tech-icons" />, title: "Bootstrap" },
    { icon: <SiMui className="tech-icons" />, title: "Material UI" },
    { icon: <FaReact className="tech-icons" />, title: "React.js" },
    { icon: <FaNode className="tech-icons" />, title: "Node.js" },
    { icon: <SiStyledcomponents className="tech-icons" />, title: "Styled Components" },
    { icon: <SiRedux className="tech-icons" />, title: "Redux" },
    { icon: <SiMysql className="tech-icons" />, title: "MySQL" },
    { icon: <SiMongodb className="tech-icons" />, title: "MongoDB" },
    { icon: <SiGraphql className="tech-icons" />, title: "GraphQL" },
    { icon: <SiApollographql className="tech-icons" />, title: "Apollo" },
    { icon: <SiExpress className="tech-icons" />, title: "Express" },
    { icon: <SiMongoose className="tech-icons" />, title: "Mongoose" },
    { icon: <SiTypescript className="tech-icons" />, title: "TypeScript" },
    { icon: <FaCloud className="tech-icons" />, title: "REST API" }
];

// Array of tools with icon details and title
const tools = [
    { icon: <FaFigma className="tech-icons" />, title: "Figma" },
    { icon: <FaConfluence className="tech-icons" />, title: "Confluence" },
    { icon: <SiJira className="tech-icons" />, title: "JIRA" },
    { icon: <FaGithub className="tech-icons" />, title: "GitHub" },
    { icon: <FaJenkins className="tech-icons" />, title: "Jenkins" },
    { icon: <SiXampp className="tech-icons" />, title: "XAMPP" },
    { icon: <SiFilezilla className="tech-icons" />, title: "FileZilla" },
    { icon: <VscVscode className="tech-icons" />, title: "VS Code" }
];

function Resume() {

    return (
        <Box id="resume" sx={containerStyle}>

            <Box sx={{ marginBottom: '64px' }}>

                <Box sx={sectionTitleStyle}>
                    <p className="font-size-xl lato-bold" style={{ textAlign: 'center' }}>
                        Skills
                    </p>
                </Box>

                <Stack sx={sectionStackStyles}>

                    {
                        skills.map((skill, index) => (
                            <Box key={index} sx={skillBoxStyles}>

                                <Box sx={skillBoxInnerStyles}>
                                    {skill.icon}
                                </Box>

                                <Box>
                                    <p className="font-size-lg font-size-lg-res lato-bold" style={{ textAlign: 'center' }}> {skill.title} </p>
                                    <p className="font-size-md font-size-md-res lato-light" style={{ textAlign: 'center', marginTop: '6px' }}> {skill.description} </p>
                                </Box>

                            </Box>
                        ))
                    }

                </Stack>

            </Box>

            <Box sx={{ marginBottom: '64px' }}>

                <Box sx={sectionTitleStyle}>
                    <p className="font-size-xl lato-bold" style={{ textAlign: 'center' }}>
                        Technologies
                    </p>
                </Box>

                <Stack sx={sectionStackStyles}>

                    {technologies.map((technology, index) => (

                        <Box key={index} sx={technologyBoxStyles}>

                            {technology.icon}

                            <p className="font-size-sm font-size-sm-res lato-light">{technology.title}</p>

                        </Box>

                    ))}

                </Stack>

            </Box>

            <Box>

                <Box sx={sectionTitleStyle}>
                    <p className="font-size-xl lato-bold" style={{ textAlign: 'center' }}>
                        Tools
                    </p>
                </Box>

                <Stack sx={sectionStackStyles}>

                    {
                        tools.map((tool, index) => (
                            <Box key={index} sx={toolBoxStyles}>

                                {tool.icon}
                                <p className="font-size-sm font-size-sm-res lato-light">{tool.title}</p>

                            </Box>
                        ))
                    }



                    {/* Repeat similar Box structures for other tools */}

                </Stack>

            </Box>

        </Box>

    )
}

export default Resume;
