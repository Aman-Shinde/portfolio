import React from 'react';
import { Card, CardContent, CardActions, Button } from '@mui/material';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';

// Styles
const cardStyle = {
  border: '1px solid black',
  borderRadius: '0',
  boxShadow: 'none',
  backgroundColor: 'white',
  padding: '8px 12px',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  height: '100%'
};

const titleStyle = {
  marginBottom: "4px",
  fontSize: "lg",
  fontWeight: "bold",
  fontFamily: "lato"
};

const descriptionStyle = {
  fontSize: "md",
  fontFamily: "lato",
  marginBottom: "12px"
};

const actionButtonStyle = {
  justifyContent: 'flex-end',
  px: 0
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

const ProjectCard = ({ title, description, link }) => {
  return (
    <Card sx={cardStyle}>
      <CardContent sx={{ textAlign: 'left', padding: 0, paddingBottom: "12px" }}>
        <p style={titleStyle} className="lato-bold font-size-lg font-size-lg-res">
          {title}
        </p>
        <p style={descriptionStyle} className="lato-regular font-size-md font-size-md-res">
          {description}
        </p>
      </CardContent>
      <CardActions sx={actionButtonStyle}>
        <Button 
          variant="outlined" 
          className="font-size-sm font-size-sm-res lato-regular"
          href={link} 
          target="_blank"
          sx={buttonStyle}
          endIcon={<OpenInNewIcon sx={{fontSize: "10px !important"}}/>}
        >
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
}

export default ProjectCard;
