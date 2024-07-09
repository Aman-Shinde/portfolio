import React from 'react';
import { Box, Stack } from '@mui/material';
import AboutCard from '../components/AboutCard';

const containerStyle = {
  marginTop: {lg: "0px", md: "0px", sm: "48px", xs: "48px"},
  marginBottom: {lg: "48px", md: "48px", sm: "48px", xs: "48px"}
};

const sectionTitleStyle = {
  borderTop: "1px solid black",
  borderBottom: "1px solid black",
  marginBottom: "48px",
  textAlign: "center",
};

const sectionContentStyle = {
  textAlign: "center",
  mt: "12px",
};

const cardContainerStyle = {
  width: "100%",
  flexDirection: "row",
  flexWrap: "wrap",
  alignItems: "stretch",
  justifyContent: "space-between",
};

function About() {
  const data = [
    { description: 'Years of IT Experiance', title: '3+' },
    { description: 'Completed Projects', title: '5+' },
    { description: 'Technical Skills', title: '15+' },
    { description: 'Blog Articles Published', title: '4+' }
  ];

  return (
    <Box id="about" sx={containerStyle}>

      <Box>

        <Box sx={sectionTitleStyle}>
          <p className="font-size-xl lato-bold">
            About Me
          </p>
        </Box>

        <p className="font-size-md lato-light" style={sectionContentStyle}>
          As a web developer and design enthusiast, my objective is to combine my technical expertise and creative passion to create visually appealing and functional websites. I am dedicated to delivering exceptional user experiences through intuitive and aesthetically pleasing designs. With a strong foundation in web development and proficiency in design principles, I aim to develop innovative and responsive websites that seamlessly integrate user interface (UI) and user experience (UX) design. By staying up-to-date with the latest design trends and coding practices, I strive to exceed client expectations and contribute to the success of projects. I am eager to collaborate with cross-functional teams and contribute my skills to create engaging and impactful online experiences that leave a lasting impression.
        </p>

      </Box>

      <Box sx={sectionContentStyle}>

        <Stack sx={cardContainerStyle}>

          {data.map((item, index) => (
              <AboutCard key={index} item={item}/>
          ))}

        </Stack>

      </Box>

    </Box>
  );
}

export default About;